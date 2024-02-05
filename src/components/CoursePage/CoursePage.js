import Custom404 from "components/404";
import ActivityCard from "components/ActivityCard";
import Button from "components/Button";
import { programsData } from "data/programsData";
import Image from "next/image";
import ScrollAnimate from "react-scroll-fade-animation";

// import styles
import styles from "./CoursePage.module.sass";

//import Images
import defaultProfile from "assets/default-profile.svg";

export const CoursePage = (props) => {
  // Get the Course Id
  const { courseId } = props;


  // Check if courseId is not valid
  if (!programsData["training-&-career-development"].activities.active[courseId]) {
    return <Custom404 />;
  }

  const courseData = programsData["training-&-career-development"].activities.active[courseId];

  // If the id is not correct return 404
  // the Parent page ==> pages/program/progId/index.js handles redirection to 404
  // this code serve as a safe guard from building errors
 

  // Get the course data
  // const courseData =
  //   programsData["training-&-career-development-program"].activities.active[
  //     courseId
  //   ];

// console.log(`img ${courseData.instructorImg}`);
  return (
    <section className={styles.container}>
      {/* banner image */}
      {courseData.img && (
        <ScrollAnimate path="bottom">
          <div
            style={{
              backgroundImage: `url('${courseData.img}')`,
            }}
            className={styles.imgContainer}
          ></div>
        </ScrollAnimate>
      )}

      <div className={styles.titleContainer}>
        <ScrollAnimate path="right">
          <h1 className={styles.courseName}>{courseData.name}</h1>
        </ScrollAnimate>
        <ScrollAnimate path="left">
          <Button
            type="primary"
            innerText="Enroll Now"
            href={courseData.applyHref}
          />
        </ScrollAnimate>
      </div>
      <ScrollAnimate path="top">
        <div className={styles.detailsContainer}>
          <div className={styles.detailsSection}>
            <p className={styles.detailsTitle}>Estimate Duration</p>
            <p>{courseData.duration}</p>
          </div>
          <span></span>

          <div className={styles.detailsSection}>
            <p className={styles.detailsTitle}>Enrolled by</p>
            <p>{courseData.enrollDate}</p>
          </div>
          <span></span>

          <div className={styles.detailsSection}>
            <p className={styles.detailsTitle}>Price</p>
            <p>
              <del>600 L.E.</del>
              <br />
              {courseData.price}
            </p>
          </div>
        </div>
      </ScrollAnimate>

      {courseData.instructorName && (
        <div className={styles.instructorContainer}>
          <ScrollAnimate path="bottom">
            <h2 className={styles.sectionTitle}>Meet your Instructor</h2>
          </ScrollAnimate>
          <div className={styles.flexContainer}>
            <div className={styles.leftColumn}>
              <ScrollAnimate path="right">
                <p className={styles.instructorName}>
                  {courseData.instructorName}
                </p>
                {courseData.instructorBio && (
                  <p className={styles.instructorBio}>
                    {courseData.instructorBio}
                  </p>
                )}
              </ScrollAnimate>
            </div>
            <ScrollAnimate path="left">
              <div className={styles.rightColumn}>
                {courseData.instructorImg ? (
                  <div className={styles.imgCropper}>
                    <Image
                      src={courseData.instructorImg}
                      alt={`${courseData.instructorName} picture`}
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="cover"
                      objectPosition={"top"}
                    />
                  </div>
                ) : (
                  <Image src={defaultProfile} alt="default image" />
                )}
              </div>
            </ScrollAnimate>
          </div>
        </div>
      )}
      <ScrollAnimate path="bottom">
        {courseData.content && courseData.content.length > 1 && (
          <div className={styles.listContainer}>
            <h2 className={styles.sectionTitle}>Content</h2>
            <ol>
              {courseData.content.map((x) => (
                <li key={x} className={styles.listItems}>
                  {x}
                </li>
              ))}
            </ol>
          </div>
        )}
      </ScrollAnimate>
      {courseData.outcomes && courseData.outcomes.length > 0 && (
        <div className={styles.listContainer}>
          <h2 className={styles.sectionTitle}>Outcomes</h2>
          <ol>
            {courseData.outcomes.map((x) => (
              <li key={x} className={styles.listItems}>
                {x}
              </li>
            ))}
          </ol>
        </div>
      )}

      <ScrollAnimate path="top">
        <div className={styles.activityCard}>
          <ActivityCard
            title="What are you waiting for"
            href={courseData.applyHref}
            buttonText="Apply Now"
          />
        </div>
      </ScrollAnimate>
    </section>
  );
};
