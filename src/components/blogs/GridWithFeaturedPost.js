import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";
import blog from '../../images/blog.jpg'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import blog4 from '../../images/blog4.png'
import blog6 from '../../images/blog6.png'
import blog88 from '../../images/blog88.png'
import gol from '../../images/gol.png'
import ja from '../../images/ja.svg'

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto`;

const Posts = tw.div`mt-12 flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
const PostText = tw.div`flex-1 px-6 py-8`
const PostTitle = tw.h6`font-bold group-hocus:text-pink-500 transition duration-300 `;
const PostDescription = tw.p``;
const AuthorInfo = tw.div`flex`;
const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
const AuthorTextInfo = tw.div`text-xs text-gray-600`;
const AuthorName = tw.div`font-semibold mt-2`;
const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${props => props.featured && css`
    ${tw`w-full sm:w-full lg:w-2/3`}
    ${Post} {
      ${tw`sm:flex-row items-center sm:pr-3`}
    }
    ${PostImage} {
      ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
    }
    ${PostText} {
      ${tw`pl-8 pr-5`}
    }
    ${PostTitle} {
      ${tw`text-2xl`}
    }
    ${PostDescription} {
      ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
    }
    ${AuthorInfo} {
      ${tw`mt-8 flex items-center`}
    }
    ${AuthorName} {
      ${tw`mt-0 font-bold text-gray-700 text-sm`}
    }
  `}
`;

const DecoratorBlob1 = tw(SvgDotPatternIcon)`absolute bottom-0 left-0 w-32 h-32 mb-3 ml-3 transform -translate-x-1/2 translate-y-1/2 fill-current text-gray-500 opacity-50`
const DecoratorBlob2 = tw(SvgDotPatternIcon)`absolute top-0 right-0 w-32 h-32 mt-16 mr-6 transform translate-x-1/2 -translate-y-1/2 fill-current text-gray-500 opacity-50`

export default ({
  subheading = "",
  heading = "Projects",
  description = "Some Things I've Worked on",
  posts = [
    {
      postImageSrc: ja,
      title: "Arthos Therapeutics",
      authorName: "Treat osteoarthritis and back pain directly on your mobile",
      url: "https://www.jointacademy.com/"
    },
    {
      postImageSrc: gol,
      title: "Game of Life",
      authorName: "A basic implementation of John Conways Game of Life built using p5.js",
      url: "https://psgol.netlify.app/"
    },
    {
      postImageSrc:
        blog,
      authorImageSrc:
        "https://miro.medium.com/fit/c/256/256/2*IAHCMMz5FSeOkFPr1xa4QQ.jpeg",
      title: "My Thoughts in a Blog",
      description:
        "Here are some things that I'm currently working and writing about on the state of this thing we call the Internet",
      authorName: "Protik Sarkar",
      authorProfile: "Medium",
      url: "https://medium.com/@sarkar.protik",
      featured: true
    },
    {
      postImageSrc:
        blog88,
      title: "Memory Game",
      authorName: "A functional Memory Game built using p5.js and deployed using Netlify",
      url: "https://pmgs.netlify.app/"
    },
    {
      postImageSrc:
        blog6,
      title: "Admin Dashboard Example",
      authorName: "Build a dashboard to control the frontend and Backend at the same time. Built with react and 'Material UI.",
      url: "https://sarkarprotik.github.io/dashboard/",
    },
    // {
    //   postImageSrc: blog4,
    //   title: "A CRUD Application",
    //   authorName: "Username: Admin Password: secret The first Project I have worked on. The purpose here was the build a fully reactive application that had a separate front-end and back-end. The application is capable of CRUD. Using REST, MongoDB Atlas as the storage of the data.",
    //   url: "https://salt-admin.herokuapp.com/§"
    // },
    {
      postImageSrc:
        blog3,
      title: "A Simplified Instagram Clone",
      authorName: "Built on React-Native and hosted on Appetize. Heres a showcase of how React Native can be used to build almost anything",
      url: "https://appetize.io/app/rv441pymkgjgv7tv00ywbrxnb8?device=iphone6s&scale=100&orientation=portrait&osVersion=11.4&deviceColor=black"
    },
    {
      postImageSrc:
        blog2,
      title: "An Okay To-do App",
      authorName: "Built with React, Typescript & Redux. This is an example of using Local Storage to store form data for a returning Customer. ",
      url: "https://sarkarprotik.github.io/bynk183/"
    },
    {
      postImageSrc:
        blog1,
      title: "A Terrible Example of A Todo",
      authorName: "Heres one of the first To-Do app I've built a long time ago when I just started Coding",
      url: "https://sarkarprotik.github.io/Simple-React-TypeScript-ToDo/"
    },
    
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Posts>
          {posts.map((post, index) => (
            <PostContainer featured={post.featured} key={index}>
              <Post className="group" target='_blank' href={post.url}>
                <PostImage imageSrc={post.postImageSrc} />
                <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  {post.featured && <PostDescription>{post.description}</PostDescription>}
                  <AuthorInfo>
                    {post.featured && <AuthorImage src={post.authorImageSrc} />}
                    <AuthorTextInfo>
                      <AuthorName>{post.authorName}</AuthorName>
                      {post.featured && <AuthorProfile>{post.authorProfile}</AuthorProfile>}
                    </AuthorTextInfo>
                  </AuthorInfo>
                </PostText>
              </Post>
            </PostContainer>
          ))}
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
