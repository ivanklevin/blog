import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const Head = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix("/")}img/og-image.jpg`}
      />
    </Helmet>
  );
};

export default Head;
