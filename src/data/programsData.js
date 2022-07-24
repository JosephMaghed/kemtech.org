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
    description: "hello",
    activities: {
      active: [
        {
          name: "lunch pad program",
          description: "description",
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
    description: "hello",
  },
  "technovate-lab-program": {
    name: "Technovate Lab Program",
    img: technovateImg,
    description: "hello",
  },
  "co-manufacturing-space-program": {
    name: "Co-Manufacturing Space Program",
    img: manufactureImg,
    description: "hello",
  },
  "investment-cluster-program": {
    name: "Investment Cluster Program",
    img: investmentImg,
    description: "hello",
  },
  "digital-transformation-program": {
    name: "Digital Transformation Program",
    img: transformImg,
    description: "hello",
  },
  "exports-development-program": {
    name: "Exports Development Program",
    img: exportImg,
    description: "hello",
  },
  "consulting-engineer-avenue-program": {
    name: "Consulting Engineer Avenue Program",
    img: consultingImg,
    description: "hello",
  },
};
