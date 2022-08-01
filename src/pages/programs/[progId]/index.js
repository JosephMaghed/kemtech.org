import { useRouter } from "next/router";
import { programsData } from "data/programsData";
import { useEffect } from "react";
import ProgramPage from "components/ProgramPage";

import { NextPageContext } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  {
    const { query } = context;
    return { props: { query } };
  }
};

export default function ProgramDetails(props) {
  const { query } = props;
  const router = useRouter();

  // Handling redirect if the pageId dose not match any available programs
  useEffect(() => {
    const { query } = props;
    const programsList = Object.keys(programsData);
    if (!programsList.includes(query.progId)) {
      router.push("/404");
    }
  }, []);

  // Head title
  const pageTitle = programsData[query.progId].name;
  return (
    <>
      <Head>
        <title>{`${pageTitle} - Kemtech`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProgramPage pId={query.progId} />;
    </>
  );
}
