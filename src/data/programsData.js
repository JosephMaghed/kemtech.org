import trainingImg from "assets/t&d.svg";
import startupImg from "assets/startup.svg";
import technovateImg from "assets/tecnovate-lap.svg";
import manufactureImg from "assets/manufacturing.svg";
import investmentImg from "assets/investment.svg";
import transformImg from "assets/digital-transform.svg";
import exportImg from "assets/export.svg";
import consultingImg from "assets/consluting.svg";

export const programsData = {
  "training-&-career-development-program": {
    name: "Training & Career Development Program",
    img: trainingImg,
    description: `The program's goal is to empower Egyptian youth to pursue their career choices and facilitate their transition from the academic education to the work force, bridge the gap between the academic outcomes and industry needs, and increase their competitiveness in the job market to become productive citizens in their societies and contribute to their country’s future development by providing a wide spectrum of career development and recruitment services In cooperation with global academic institutions, multinational cooperation and training partners, the valley will offer a comprehensive training programs in the areas of: Career Management, Employability Skills, English Language, Technical Trainings, Entrepreneurship, and Digital Literacy, Internship Programs and exchanges programs.`,
    activities: {
      active: [
        {
          name: "Startup Launchpad",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et ipsum volutpat morbi eget posuere morbi. Vitae leo volutpat elit volutpat eleifend elit pharetra. Feugiat purus et ornare pellentesque ",
          color: ["#0D5149", "#41B8A8"],
          img: null,
          href: "/lunch pad program",
          applyHref: "www.google.com",
          duration: "3 weeks",
          effortPerWeek: "16 hours",
          enrolledBy: "05-06-2020",
          difficulty: "foundational",
          location: "online",
          price: "free",
          prerequisites: ["requirement 1", "require 2", "rq 3"],
          syllabus: [
            {
              title: "module 1",
              content: [
                "Introduction to Entrepreneurship",
                "Opportunity Analysis",
                "markets, Need-Finding and Planning",
              ],
            },
            {
              title: "module 2",
              content: [
                "Introduction to Entrepreneurship",
                "Opportunity Analysis",
                "markets, Need-Finding and Planning",
              ],
            },
          ],
        },
      ],
      paused: [{}],
    },
  },
  "startup-studio-program": {
    name: "Startup Studio Program",
    img: startupImg,
    description: `The program is based on  a venture studio model for entrepreneurship, whereas the valley adopts a one-stop shop approach for startups combining company building with venture funding  either by generating new ideas for startups or by recruiting founders with ideas, and then they apply significant amounts of time and capital to the process of growing the startup successfully.
    By design, venture studios play the role of matchmaker, linking business ideas to their talented counterparts to execute those ideas.`,
  },
  "technovate-lab-program": {
    name: "Technovate Lab Program",
    img: technovateImg,
    description: `The program focuses on offering students, entrepreneurs and startups world-class secure facilities, with access to tools, technology, labs, equipment, and support, along with the opportunity to learn, design and networking with corporates and supported ecosystems. Whereas their presence on the valley will allow them to work in the same space and collaborate to research and co-create innovative solutions and cutting-edge projects syncing with existing NCT programs and facilities.`,
  },
  "co-manufacturing-space-program": {
    name: "Co-Manufacturing Space Program",
    img: manufactureImg,
    description: `The program offers the access to clean, efficient and smart manufacturing work space through partnering with different local manufacturers so that an entrepreneur or startup can find a suitable space to be conducive to their manufacturing, research and development or prototyping needs and avoiding a huge investment in their own facilities`,
  },
  "investment-cluster-program": {
    name: "Investment Cluster Program",
    img: investmentImg,
    description: `The program provides the opportunity for qualified startups to find investment opportunities for their projects by communicating with investors interested in entrepreneurship, whether from local or  international venture capital companies, angel investors,  banks, and financial funds.`,
  },
  "digital-transformation-program": {
    name: "Digital Transformation Program",
    img: transformImg,
    description: `Bashkateb.io program provides a stack of Business Optech platform that empowers businesses and creative professionals  focusing mainly on startups,  freelancers and SMEs that seamless managing and monitoring all business process aspects of the company while leverage AI- Driven Decision making strategy based on personalization profile.`,
  },
  "exports-development-program": {
    name: "Exports Development Program",
    img: exportImg,
    description: `The program was developed to create the  opportunities for emerging companies and their products to access and compete in the global markets and to raise the quality and efficiency of the Egyptian product and increase its ability to compete by enriching innovation techniques.`,
  },
  "consulting-engineer-avenue-program": {
    name: "Consulting Engineer Avenue Program",
    img: consultingImg,
    description: `The program provides engineering  collaborative platform where  experts, consulting engineers, professors from multi-disciplines of engineering can share knowledge, connecting the ecosystem and co- participate in national projects in the way  to best utilize effectively their diverse experience for Egypt development.`,
  },
};
