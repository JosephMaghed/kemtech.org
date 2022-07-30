import CoursePage from "components/CoursePage";
import { programsData } from "data/programsData";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { capitalizeFirstLetter } from "utils/utils";

export const getServerSideProps = async (context) => {
  {
    const { query } = context;
    return { props: { query } };
  }
};

export default function CourseDetails(props) {
  /*
  If the path dose not contain /training-&-career-development-program
  ==> Redirect to a 404
  */
  const router = useRouter();
  useEffect(() => {
    const { courseId } = props.query;
    // List with active courses
    const courseList = Object.keys(
      programsData["training-&-career-development-program"].activities.active
    );
    //push paused courses to the list
    courseList.push(
      Object.keys(
        programsData["training-&-career-development-program"].activities.paused
      )
    );
    if (!courseList.includes(courseId)) {
      router.push("/404");
    }
  }, []);

  const { courseId } = props.query;

  // Head title
  let pageTitle = courseId.split("-").join(" ");
  pageTitle = capitalizeFirstLetter(pageTitle);

  return (
    <>
      <Head>
        <title>{`${pageTitle} - Kemtech`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CoursePage courseId={courseId} />
    </>
  );
}
