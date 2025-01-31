/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP)
*/


/**
* author: OTechCup
* copyright: &copy; 2022 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O"]
* version: v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import React from "react";

import Blog from "./Blog.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Portfolio from "./Portfolio.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import Background from "./layout/Background.jsx";
import "../static/assets/js/App.js";


function Index() {
    return (
        <>
            <Background />

            <Header />
            
            <About />
            
            <Resume />
            
            <Services />
            
            <Portfolio />
            
            <Contact />
            
            <Blog />
            
            <Footer />
        </>
    );
};


export default Index;
