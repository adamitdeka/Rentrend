import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Footer from "./footer"

const Layout = ({
    title = "Title",
    className,
    children
}) => (
    <div>
        <div className="jumbotron">
            <h2 className="col-md-2 mb-5">{title}</h2>
            <div className="col-md-20"><Menu /></div>
        </div>
        <div className={className}>{children}</div>
        <Footer/>
    </div>
);

export default Layout;
