/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1536610914824-f68b75f3b237");
`;




const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      {/* <NavLink href="#">
        About
      </NavLink> */}
      <NavLink href="/blog">
        Blog
      </NavLink>
      {/* <NavLink href="#">
        Locations
      </NavLink> */}
      {/* <NavLink href="#">
        Pricing
      </NavLink> */}
    </NavLinks>,
    <NavLinks key={2}>
      {/* <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink> */}
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        {/* <StyledHeader links={navLinks} /> */}
        <div style={{ marginTop: '5vh' }}>
          <Header />
        </div>

        <Content>
          <Heading>
            Hi! I'm Protik Sarkar
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{ backgroundColor: '', borderRadius: '50%' }}>
              <a href="https://www.instagram.com/protik_s/">
                <img style={{ display: 'inline', width: 100, height: 'audo', justifyContent: 'center', alignItems: 'center', backgroundColor: '', borderRadius: '10%' }} src={'https://media.giphy.com/media/VgI9SujRQ4GlgsWzQv/giphy.gif'} />
              </a>
            </div>
            <div style={{ backgroundColor: '', borderRadius: '50%' }}>
              <a href="https://twitter.com/ProtikSarkar1/">
                <img style={{ display: 'inline', width: 100, height: 'audo', justifyContent: 'center', alignItems: 'center', backgroundColor: '', borderRadius: '10%' }} src={'https://media.giphy.com/media/ktfqJcs9AVf4HeDLFK/giphy.gif'} />
              </a>
            </div>
            <div style={{ backgroundColor: '', borderRadius: '50%' }}>
              <a href="https://www.tiktok.com/@protiktoks/">
                <img style={{ display: 'inline', width: 100, height: 'audo', justifyContent: 'center', alignItems: 'center', backgroundColor: '', borderRadius: '10%' }} src={'https://media.giphy.com/media/l7ebWVz4mINbriGuCe/giphy.gif'} />
              </a>
            </div>
            <div style={{ backgroundColor: '', borderRadius: '50%' }}>
              <a href="https://www.linkedin.com/in/protik-sarkar/">
                <img style={{ display: 'inline', width: 100, height: 'audo', justifyContent: 'center', alignItems: 'center', backgroundColor: '', borderRadius: '10%' }} src={'https://media.giphy.com/media/HQTYdpx1yhxWpugAi2/giphy.gif'} />
              </a>
            </div>
            <div style={{ backgroundColor: '', borderRadius: '50%' }}>
              <a href="https://github.com/sarkarprotik/">
                <img style={{ display: 'inline', width: 100, height: 'audo', justifyContent: 'center', alignItems: 'center', backgroundColor: '', borderRadius: '10%' }} src={'https://media.giphy.com/media/CwTvSiWflgCGKgz5eb/giphy.gif'} />
              </a>
            </div>
            </div>
            I'm a Frontend Developer based in Stockholm
          </Heading>
          {/* <PrimaryAction>Search Events Near Me</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
