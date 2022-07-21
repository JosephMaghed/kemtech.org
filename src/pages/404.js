import Custom404 from "components/404";
import Head from "next/head";

export default function notFound() {
  return (
    <>
      <Head>
        <title>404 | kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Custom404 />
    </>
  );
}
