import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CourseDetails() {
  /*
  If the path dose not contain /training-&-career-development-program
  ==> Redirect to a 404

  TODO : Redirect if the course is not found
  */
  const router = useRouter();
  // REVIEW: this implementation is causing delay in redirects
  // A better implementation should be done
  useEffect(() => {
    const { progId } = router.query;
    if (progId != "training-&-career-development-program") {
      router.push("/404");
    }
  }, []);

  const { courseId } = router.query;

  return <p>Post: {courseId}</p>;
}
