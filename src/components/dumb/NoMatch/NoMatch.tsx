import React, { StatelessComponent } from "react";
import Layout from "../../views/Layout/Layout";
import image from "./404.png";

export const NoMatch: StatelessComponent = () => (
  <Layout>
    <div
      style={{
        margin: "auto",
        paddingTop: "29vh",
        height: "100vh"
      }}
    >
      <img style={{ width: "70%" }} src={image} />
    </div>
  </Layout>
);
