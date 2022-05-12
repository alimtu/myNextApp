import "../styles/globals.css";
import { PageContextProvider } from "../components/contexts/page-context";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";

const isSSR = typeof window === "undefined";

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <PageContextProvider>
          <DefaultSeo
            title="Ali Montazerion"
            titleTemplate="Ali Montazerion"
            robotsProps={{
              nosnippet: true,
              notranslate: true,
              noimageindex: true,
              noarchive: true,
              maxSnippet: -1,
              maxImagePreview: "none",
              maxVideoPreview: -1,
            }}
            openGraph={{
              url: "https://www.aboutali.ir",
              title: "Ali Montazerion",
              description: "Ali Montazerion",
              type: "profile",
              profile: {
                firstName: "Ali",
                lastName: "Montazerion",
                username: "Montazerion",
                gender: "man",
              },
              site_name: "AboutAli",
            }}
            description="Ali Montazerion - A site to introduce yourself to others and the possibility of ordering various projects by others"
            canonical="https://www.aboutali.ir"
            additionalMetaTags={[
              {
                property: "og:type",
                content: "Website",
              },
              {
                property: "og:title",
                content: "Ali",
              },
              {
                property: "og:description",
                content:
                  "A site to introduce yourself to others and the possibility of ordering various projects by others",
              },
              {
                property: "og:url",
                content: "https://www.aboutali.ir",
              },
              {
                property: "og:site_name",
                content: "AboutAli",
              },
              {
                property: "twitter:card",
                content: "Ali Montazerion",
              },
              {
                property: "twitter:title",
                content: "AboutAli  - A site to introduce yourself",
              },
              {
                property: "twitter:description",
                content: "AboutAli",
              },
              {
                property: "name5",
                content: "منتظریون",
              },
              {
                property: "name6",
                content: "علی منتظریون",
              },
              {
                name: "application-name",
                content: "AboutAli",
              },
              {
                name: "apple-itunes-app",
                content: "app-id=1472412417, app-argument=https://aboutali.ir",
              },
              {
                name: "google-site-verification",
                content: "+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=",
              },
              {
                name: "google",
                content: "nositelinkssearchbox",
              },
              {
                name: "googlebot",
                content: "notranslate",
              },
              {
                name: "msapplication-TileColor",
                content: "#ffffff",
              },
              {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1, shrink-to-fit=no",
              },
              {
                name: "description",
                content:
                  "A site to introduce yourself to others and the possibility of ordering various projects by others.",
              },
              {
                name: "author",
                content: "Ali Montazerion",
              },
              {
                name: "author1",
                content: "Ali",
              },
              {
                name: "author2",
                content: "Montazerion",
              },
              {
                name: "author3",
                content: "منتظریون",
              },
              {
                name: "author4",
                content: "علی",
              },
              {
                name: "author5",
                content: "علی منتظریون",
              },
              {
                name: "robots",
                content: "index, follow",
              },
              {
                name: "revisit-after",
                content: "1 days",
              },
              {
                name: "language",
                content: "english",
              },
              {
                name: "rating",
                content: "general",
              },
              {
                name: "distribution",
                content: "global",
              },
              {
                name: "expires",
                content: "never",
              },
              {
                httpEquiv: "x-ua-compatible",
                content: "IE=edge; chrome=1",
              },
            ]}
            additionalLinkTags={[
              {
                rel: "aboutali",
                href: "https://www.aboutali.ir",
              },
              {
                rel: "mask-icon",
                href: "https://www.aboutali.ir",
              },
              {
                rel: "apple-touch-icon",
                href: "https://www.aboutali.ir",
                sizes: "76x76",
              },

              {
                rel: "preload",
                href: "https://www.aboutali.ir",
                as: "font",
                type: "font/woff2",
                crossOrigin: "anonymous",
              },
            ]}
          />
          <Component {...pageProps} />
        </PageContextProvider>
      )}
    </>
  );
}

export default MyApp;
