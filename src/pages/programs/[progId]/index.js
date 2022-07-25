import { useRouter } from "next/router";
import { programsData } from "data/programsData";
import { useEffect } from "react";
import ProgramPage from "components/PorgramPage";

import { NextPageContext } from "next";
import { GetServerSideProps } from "next";

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

  return <ProgramPage pId={query.progId} />;
}
