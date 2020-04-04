import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Lorem, ipsum.</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <Link to="/dashboard">Go to dashboard</Link>
  </Layout>
);
