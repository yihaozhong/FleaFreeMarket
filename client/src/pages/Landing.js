import React from 'react'

import main from "../assets/images/main.svg"
// import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from "../components"
import { Link } from 'react-router-dom';

const Landing = () =>  {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
            <div className = 'info'>
                <h1>
                    Flea <span>Free</span> Market
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl dolor, congue id justo ut, dapibus ultrices lacus. Aliquam gravida turpis a porta eleifend.
                 Quisque ultrices mauris ut interdum elementum. 
                 Morbi mollis quam sit amet elit condimentum, 
                 id volutpat neque maximus. Aenean mattis metus vitae elit 
                 semper rutrum. Mauris suscipit sapien et est c
                 ommodo interdum sit amet quis erat. Nam pretium risus quis molestie congue. Sed quis sem cursus justo ornare sollicitudin et ut ante. Nulla sollicitudin 
                 ipsum non purus tincidunt accumsan.
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login / Register
                </Link>
                
            </div>
            <img src = {main} alt = 'flea market' className='img main-img'/>
        </div>



    </Wrapper>
  )
}



export default Landing
