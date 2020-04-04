import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import "@reach/tabs/styles.css";

import "./layout.css";

const Layout = ({ children }) => {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL || 'https://jamstack-into-auth.netlify.com';
  if (!url)
    throw new Error(
      'process.env.REACT_APP_NETLIFY_IDENTITY_URL is blank2, which means you probably forgot to set it in your Netlify environment variables',
    )
  return (
  <IdentityContextProvider url={url}>
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)};

export default Layout;
