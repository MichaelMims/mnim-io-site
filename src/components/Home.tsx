import useInterval from '@use-it/interval';
import react, { useEffect, useState } from 'react';
import styled from 'styled-components'
import profilePic from '../assets/img/profile-pic.png'

const HomeWrapper = styled.div`
flex-grow: 2;
display: flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`

const HomeTitle = styled.h1`
font-family: 'Inconsolata', monospace;
font-weight: 900;
`

const Subtitle = styled.h4`
font-family: 'Cabin Sketch', cursive;
`

const ProfilePicWrapper = styled.div`
width: 20vw;
height: 20vw;
position: relative;
overflow: hidden;
border-radius: 50%;
`

const ProfilePic = styled.img.attrs({
    src: profilePic
})`
display: inline;
margin: 0 auto;
margin-left: -10%;
width: 150%;
`



function Home({ }) {
    const devTypes = ['software developer', 'back-end engineer', 'devops engineer']
    const [devTypeIndex, setDevTypeIndex] = useState(0)

    useInterval(() => { 
        if (devTypeIndex === devTypes.length-1) {setDevTypeIndex(0)}
        else {setDevTypeIndex(devTypeIndex + 1)}
     }, 3000)

    return (
        <HomeWrapper>
            <ProfilePicWrapper>
                <ProfilePic />
            </ProfilePicWrapper>
            <HomeTitle>
                michael mims
            </HomeTitle>
            <Subtitle>
                a {devTypes[devTypeIndex]}
            </Subtitle>
        </HomeWrapper>
    );
}

export default Home;