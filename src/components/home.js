import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Wave from '../assets/wave.png'
const WaveSection=styled.div`
width:100%;
min-height:75vh;
position:relative;
background:linear-gradient(180deg,#3f51b5,#57babf)
`
const Image=styled.img`
width:100%;
position: absolute;
bottom: 0;
`
export default class home extends Component {
    render() {
        return (<Fade>
                <WaveSection>
                    <Image src={Wave}/>
                </WaveSection>
        </Fade>
        )
    }
}
