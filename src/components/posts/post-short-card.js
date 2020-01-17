import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../core/preview-compatible-image";
import { Link } from "gatsby";

const Post = styled.article`
  background-color: #fff;
  padding: 15px 0;
  box-sizing: border-box;
  & + & {
    margin-top: 25px;
  }
`;
const Title = styled.h3`
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const Description = styled.p`
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const Image = styled.div`
  margin-bottom: 15px;
`;
const Info = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
`;

const PostShortCard = ({ post }) => (
  <Post className={post.frontmatter.featuredpost ? "is-featured" : ""}>
    <Title>{post.frontmatter.title}</Title>
    <Description>{post.frontmatter.description}</Description>
    {post.frontmatter.featuredimage != null ? (
      <Image>
        <PreviewCompatibleImage
          imageInfo={{
            image: post.frontmatter.featuredimage,
            alt: `картинка ${post.frontmatter.title}`
          }}
        />
      </Image>
    ) : null}
    <Info>
      <Link className="button" to={post.fields.slug}>
        Читать
      </Link>
    </Info>
  </Post>
);

export default PostShortCard;
