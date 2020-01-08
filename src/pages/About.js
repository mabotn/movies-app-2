import React from 'react'
import Navbar from '../components/Navbar'

const About = function () {
    return <div>
        <Navbar />
        <p>
            This web app is using the OMDB API.
        </p>
        <p>
            The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
        </p>
    </div>
}

export default About
