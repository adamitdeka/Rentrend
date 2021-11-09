const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const JWT_SECRET = config.get('jwtSecret');


exports.loginUser =  async (req, res) => {
  const { email, password } = req.body;

  // Simple validation if values are empty
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error('User Does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
    if (!token) throw Error('Couldnt sign the token');

    //List of data you will get once the login is successfull
    res.status(200).json({
      token,
      user: {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        address: user.address,
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};


exports.registerUser = async (req, res) => {
  const { first_name, last_name, address, email, password } = req.body;

  // Simple validation
  if (!first_name || !last_name || !address || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    //Creating a Variable to a new user
    const newUser = new User({
      first_name,
      last_name,
      address,
      email,
      password: hash
    });
    //Saving the new user to the database
    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    //Creating token for automatic sign in once user login
    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600
    });

    //Response you get once you got success
    //Should use the saveUser variable so that application are getting values from the data that has been saved already
    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        first_name: savedUser.first_name,
        last_name: savedUser.last_name,
        address: savedUser.address,
        email: savedUser.email
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) throw Error('User Does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
