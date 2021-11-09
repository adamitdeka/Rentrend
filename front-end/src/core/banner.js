import React, {Component} from 'react';
import Styling from '../css/style.css';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Img1 from '../images/banner1.jpg';
import Img2 from '../images/banner2.jpg';
import Img3 from '../images/banner3.jpg';

export default class Banner extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img1}
                    alt="First slide"
                    />
                    <Carousel.Caption id="cap1">
                    <h3>New in Style</h3>
                    <p>Make your closet SUMMER ready.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption id="cap2">
                    <h3>Refresh your Wardrobe</h3>
                    <p>Wear, Return and Repeat each month.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption id="cap3">
                    <h3>Who we are?</h3>
                    <p>Your Best Friend's closet with better stuff.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}