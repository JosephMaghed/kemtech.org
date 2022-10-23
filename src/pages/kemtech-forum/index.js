import ContactForm from "components/ContactForm";
import MainAttendance from "components/summit-page/MainAttendance";
import RegisterInvitation from "components/summit-page/RegisterInvitationSection";
import Speakers from "components/summit-page/Speakers";
import SummitInvestment from "components/summit-page/summit-investment";
import Location from "components/summit-page/summit-location";
import SummitGuides from "components/summit-page/SummitGuides";
import SummitHero from "components/summit-page/SummitHero";
import SummitIntro from "components/summit-page/SummitIntro";
import SummitOverview from "components/summit-page/SummitOverview";
import SummitSchedule from "components/summit-page/SummitSchedule";
import SummitSponsors from "components/summit-page/SummitSponsors";

import Head from "next/head";
export default function summitPage() {
  return (
    <>
      <Head>
        <title>kemtech Forum 2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SummitHero />
      <SummitIntro />
      <MainAttendance />
      <SummitOverview /> 
      {/* <Speakers /> */}
      {/* <SummitSponsors /> */}
      <SummitSchedule />
      <RegisterInvitation />
      {/* <SummitGuides /> */}
      <Location />
      {/* <SummitInvestment /> */}
      <ContactForm />
    </>
  );
}
