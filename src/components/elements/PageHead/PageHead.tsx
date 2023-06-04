import Head from "next/head";
import { type FC } from "react";

const TITLE = "Any-List";

interface PageHeadProps {
  pageTitle?: string;
  descriptionLong: string;
  descriptionShort: string;
}

const PageHead: FC<PageHeadProps> = ({
  pageTitle,
  descriptionLong,
  descriptionShort,
}) => {
  const title = pageTitle ? `${TITLE} | ${pageTitle}` : TITLE;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={title} />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={descriptionLong} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:description" content={descriptionShort} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="twitter:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/social.png" />
        <meta property="twitter:description" content={descriptionShort} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content="/social.png" />
        {/* TODO: Fix this when deployed */}
        {/* <meta property="og:url" content={`https://wupzy.com${router.asPath}`} /> */}

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
    </>
  );
};

export default PageHead;
