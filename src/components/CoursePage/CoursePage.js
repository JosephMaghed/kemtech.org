import Custom404 from "components/404";
import ActivityCard from "components/ActivityCard";
import Button from "components/Button";
import { programsData } from "data/programsData";
import Image from "next/image";

// import styles
import styles from "./CoursePage.module.sass";

//import Images
import defaultProfile from "assets/default-profile.svg";
import defaultBanner from "assets/Untitled.png";

export const CoursePage = (props) => {
  // Get the Course Id
  const { courseId } = props;

  // If the id is not correct return 404
  // the Parent page ==> pages/program/progId/index.js handles redirection to 404
  // this code serve as a safe guard from building errors
  const courseList = Object.keys(
    programsData["training-&-career-development-program"].activities.active
  );
  //push paused courses to the list
  courseList.push(
    Object.keys(
      programsData["training-&-career-development-program"].activities.paused
    )
  );
  if (!courseList.includes(courseId)) return <Custom404 />;

  // Get the course data
  const courseData =
    programsData["training-&-career-development-program"].activities.active[
      courseId
    ];

  return (
    <section className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url('assets/Untitled.png')`,
        }}
      ></div>

      <div className={styles.titleContainer}>
        <h1 className={styles.courseName}>{courseData.name}</h1>
        <Button
          type="primary"
          innerText="Enroll Now"
          href={courseData.applyHref}
        />
      </div>

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
          <p>{courseData.price}</p>
        </div>
      </div>

      {courseData.instructorName && (
        <div className={styles.instructorContainer}>
          <h2 className={styles.sectionTitle}>Meet your Instructor</h2>
          <div className={styles.flexContainer}>
            <div className={styles.leftColumn}>
              <p className={styles.instructorName}>
                {courseData.instructorName}
              </p>
              {courseData.instructorBio && (
                <p className={styles.instructorBio}>
                  {courseData.instructorBio}
                </p>
              )}
            </div>
            <div className={styles.rightColumn}>
              <Image src={defaultProfile} alt="default image" />
            </div>
          </div>
        </div>
      )}

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

      <div className={styles.activityCard}>
        <ActivityCard
          title="What are you waiting for"
          href={courseData.applyHref}
          buttonText="Apply Now"
        />
      </div>
    </section>
  );
};
