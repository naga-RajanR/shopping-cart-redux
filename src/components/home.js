import React, { Component } from 'react'
import styled from 'styled-components'

const WaveSection=styled.div`
width:100%;
min-height:75vh;
position:relative;
background:linear-gradient(180deg,#3f51b5,darkslateblue)
`

export default class home extends Component {
    render() {
        return (<React.Fragment>
                <WaveSection className='wave'>
                </WaveSection>
                <section>

                </section>
        </React.Fragment>
        )
    }
}
