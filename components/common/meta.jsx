import Head from "next/head";
import React from "react";

const MetaComponent = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="UTF-8" />
      <meta name="author" content="Ali Montazerion" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="language" content="english" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="expires" content="never" />
    </Head>
  );
};

MetaComponent.defaultProps = {
  title: "Ali Montazerion",
  description:
    "About Ali ,  علی منتظریون , منتظریون , ali montazerion , ali , aboutAli, about ali , iritman , iran, programmer",
  keywords:
    "montazerion, montazeriyoun, منتظریون, علی, ali montazerion, علی منتظریون",
};

export default MetaComponent;
