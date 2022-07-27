import ProgramsView from "components/ProgramsView";
import Head from "next/head";

export default function programsPage() {
  return (
    <>
      <Head>
        <title>Programs - Kemtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ProgramsView />
    </>
  );
}
