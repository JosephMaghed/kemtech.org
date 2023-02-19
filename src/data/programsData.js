import consultingImg from "assets/consluting.svg";
import transformImg from "assets/digital-transform.svg";
import exportImg from "assets/export.svg";
import investmentImg from "assets/investment.svg";
import manufactureImg from "assets/manufacturing.svg";
import startupImg from "assets/startup.svg";
import trainingImg from "assets/t&d.svg";
import technovateImg from "assets/tecnovate-lap.svg";

export const programsData = {
	"training-&-career-development": {
		name: "Training & Career Development",
		img: trainingImg,
		description: `The program's goal is to empower Egyptian youth to pursue their career choices and facilitate their transition from the academic education to the work force, bridge the gap between the academic outcomes and industry needs, and increase their competitiveness in the job market to become productive citizens in their societies and contribute to their country’s future development by providing a wide spectrum of career development and recruitment services In cooperation with global academic institutions, multinational cooperation and training partners, the valley will offer a comprehensive training programs in the areas of: Career Management, Employability Skills, English Language, Technical Trainings, Entrepreneurship, and Digital Literacy, Internship Programs and exchanges programs.`,
		activities: {
			// active: {
			//   "smart-grid-features": {
			//     name: "Smart Grid features",
			//     color: ["#43cea2", "#185a9d"],
			//     img: "/renewable.webp",
			//     href: "/programs/training-&-career-development-program/smart-grid-features",
			//     applyHref:
			//       "https://docs.google.com/forms/d/1BOwmqBCtdAeQ8aKy6_2eJiOffETNQo8fBrEHFLUFDzo/edit",
			//     duration: "5 Days",
			//     enrollDate: "August",
			//     price: "400 L.E.",
			//     instructorName: "Dr. Sayed El-Far",
			//     instructorImg: "/instructors-imgs/sayed-elfar.webp",
			//     instructorBio: `
			//     Dr El-Sayed Abdel-Razek El-Far, is currently the Vice Dean of College of Industry and Energy Technology, New Cairo Technological University, Egypt.
			//     He received Ph.D. degree in Electrical Power Engineering from Technical University, Hamburg, Germany, 1994.
			//     He is a member of IEEE and Several research groups.
			//     He participated as PI in more than five external funded projects in KSA and in Egypt as well. He also participated as local PI in two projects funded from Erasmus+ (European Union).
			//     His research interests are in the areas of Renewable/Alternate Energy Systems, Harmonics and Power Quality, Applications of solar energy, Solar and wind technology, electrical power systems, applications of nanotechnology in High voltage insulations and dielectrics and electromagnetic. He has more than 100 publications in high impact journals and conferences.
			//     `,
			//     content: [
			//       "Insight into smart grid infrastructure",
			//       "The role of power electronics and energy storage in smart grids",
			//       "Knowledge of advanced technologies and concepts such as advanced metering, demand side response, electric vehicles and the role of data communication",
			//       "Understanding of protection and cyber security fundamentals",
			//       "Identify different tools and approaches to modelling a Smart Grid",
			//       "Apply Optimal Power Flow (OPF) solutions to evaluate the performance of a power system with renewable energy sources",
			//       "Analyze power system dynamics (frequency stability) to achieve active power balance",
			//       "Identify control-room technologies for system-wide remote monitoring, protection, and risk management of smart grid cyber security.",
			//     ],
			//     outcomes: [],
			//   },
			//   "hydrogen-energy": {
			//     name: "Hydrogen Energy",
			//     color: ["#43cea2", "#185a9d"],
			//     img: "/renewable.webp",
			//     href: "/programs/training-&-career-development-program/hydrogen-energy",
			//     applyHref:
			//       "https://docs.google.com/forms/d/1BOwmqBCtdAeQ8aKy6_2eJiOffETNQo8fBrEHFLUFDzo/edit",
			//     duration: "5 Days",
			//     enrollDate: "August",
			//     price: "400 L.E.",
			//     instructorName: "Eng. Aliaa Khaled",
			//     instructorImg: "/instructors-imgs/aliaa-khaled.webp",
			//     instructorBio:
			//       "Eng. Aliaa is working now as teaching Assistant at Faculty of Industry and Energy Technology, New Cairo Technological University. She graduated from Integrated Technical Education Cluster with Excellent Grad in 2021. She has a good experience in many majors related to the Renewable Energy System. Now, she is preparing to start her Master degree study.",
			//     content: [
			//       "What is “Green hydrogen” ?",
			//       "The history of the green hydrogen",
			//       "The production of the hydrogen",
			//       "The methods to store the power from the solar energy",
			//       "Comparison between the traditional batteries and the fuel cell",
			//       "The cost of hydrogen production",
			//       "The production of the green hydrogen",
			//       "The devices of the analytical electrolyses",
			//       "The expectations of the green hydrogen and the blue one",
			//       "The production of the yellow hydrogen from the nuclear power",
			//       "The future of hydrogen internationally",
			//     ],
			//     outcomes: [],
			//   },
			//   PLC1: {
			//     name: "PLC1",
			//     color: ["#606c88", "#3f4c6b"],
			//     img: "/mechatronics.webp",
			//     href: "/programs/training-&-career-development-program/PLC1",
			//     applyHref:
			//       "https://docs.google.com/forms/d/1BOwmqBCtdAeQ8aKy6_2eJiOffETNQo8fBrEHFLUFDzo/edit",
			//     duration: "5 Days",
			//     enrollDate: "August",
			//     price: "400 L.E.",
			//     instructorName: "Eng. Mahmoud Abdrabo",
			//     instructorImg: "/instructors-imgs/mohamed-saber.webp",
			//     instructorBio:
			//       "Mahmoud Saber Abdrabbo is a Teaching Assistant at Faculty of Industry and Energy Technology, New Cairo Technological University (NCTU). He received the B.Sc. degree in mechatronics engineering from Misr University of Science and Technology (MUST) in 2017 and currently, he is a M.sc. student in Mechanical Engineering department in Benha University. He is well versed in the fields of Mechatronics systems, Process Control, Automatic Control, Embedded systems, Robotics, as well as practical experience in Embedded programming(ARM, AVR), PLC and SCADA.",
			//     content: [
			//       "Introduction to PLC and it's working principles",
			//       "PLC used languages",
			//       "Basic Logic programs",
			//       "Introduction to TIA PORTAL. TIA, Creating and editing Projects",
			//       "Hardware Configuration",
			//       "Programming Tag Table, Operation Block (OB)",
			//       "Program Simulation and Debugging",
			//       "Downloading and debugging a program",
			//       "Programming Functions",
			//       "Programming Function Blocks. Timers and Timer operations",
			//       "Counters and counter operations",
			//       "Advanced Timer, counter exercises Capstone Project",
			//     ],
			//     outcomes: [],
			//   },
			//   "basic-electronics": {
			//     name: "Basic Electronics",
			//     color: ["#606c88", "#3f4c6b"],
			//     img: "/mechatronics.webp",
			//     href: "/programs/training-&-career-development-program/basic-electronics",
			//     applyHref:
			//       "https://docs.google.com/forms/d/1BOwmqBCtdAeQ8aKy6_2eJiOffETNQo8fBrEHFLUFDzo/edit",
			//     duration: "5 Days",
			//     enrollDate: "August",
			//     price: "400 L.E.",
			//     instructorName: "Eng. Rowan Nasr",
			//     instructorImg: "/instructors-imgs/rowan-nasr.webp",
			//     instructorBio:
			//       "Eng. Rowan Nasr received the BSc degree in Power and Electrical Machinery from Kafr El Sheikh University in 2014, Diploma in Control of Computer Systems in 2017. Currently, she is a MSc student in Industrial Electronics and Control Department at Menouf Electronic Engineering Faculty. She has worked as a technology trainer at Al Amerya Integrated Technological Cluster AITC for 6 years in the Department of Electrical and Electronics Technology. She has great experience in field of Analog and Digital Electronics, Embedded systems, Automatic Control and Instrumentation, Micro-controller Systems, Classic Control Systems. as well as practical experience in Automation systems. Currently, she is a Teaching Assistant in Mechatronics Technology Program at New Cairo Technological University NCTU. ",
			//     content: [
			//       "Introduction about electricity",
			//       "Measurement Devices",
			//       "Breadboard",
			//       "Resistor",
			//       "Capacitor",
			//       "Inductor ",
			//       "Diodes",
			//       "Transistors ",
			//       "Thyristors ",
			//       "Triac",
			//       "Voltage Regulator",
			//       "Transformers",
			//       "Power supply",
			//       "Design filters",
			//       "555 timers",
			//       "Op-Amp",
			//       "Relays",
			//       "Switches",
			//       "Dc Motors",
			//     ],
			//     outcomes: [],
			//   },
			//   "ethical-hacker-l1": {
			//     name: "Ethical Hacker L1",
			//     color: ["#5C258D", "#4389A2"],
			//     img: "/ict.webp",
			//     href: "/programs/training-&-career-development-program/ethical-hacker-l1",
			//     applyHref:
			//       "https://docs.google.com/forms/d/1BOwmqBCtdAeQ8aKy6_2eJiOffETNQo8fBrEHFLUFDzo/edit",
			//     duration: "5 Days",
			//     enrollDate: "August",
			//     price: "400 L.E.",
			//     instructorName: "Eng. Hani Saad",
			//     instructorImg: "/instructors-imgs/hani-saad.webp",
			//     instructorBio: `Eng. Hani Saad received the BSc degree in Computer Science from Benha University in 2007, MSc degree in Computer Science from Annamalai University in India.
			//     He was an Assistant Lecturer in ICT Dept. in NCT New Cairo Technological University Also; he was an IT Manager for a lot of Industrial companies in Egypt and Saudi Arabia.
			//    He was also a TOT Instructor from CISCO & Huawei Academies.
			//    He was specialized in Networking, Security, Cyber Security and Ethical Hacker.`,
			//     content: [
			//       "Foundations for Information Security",
			//       "Exploiting and Protecting Web Applications",
			//       "Using Cryptography Correctly",
			//       "Network Security",
			//       "Writing Secure Code",
			//       "Emerging Threats & Defenses",
			//     ],
			//     outcomes: [],
			//   },
			//   "CCNA-R&S1": {
			//     name: "CCNA R&S1",
			//     color: ["#5C258D", "#4389A2"],
			//     img: "/ict.webp",
			//     href: "/programs/training-&-career-development-program/CCNA-R&S1",
			//     applyHref:
			//       "https://docs.google.com/forms/d/1BOwmqBCtdAeQ8aKy6_2eJiOffETNQo8fBrEHFLUFDzo/edit",
			//     duration: "5 Days",
			//     enrollDate: "August",
			//     price: "400 L.E.",
			//     instructorName: "Eng. Maha Gamal",
			//     instructorImg: "/instructors-imgs/maha-gamal.webp",
			//     instructorBio:
			//       "She has a Bachelor of electronics and electrical communications engineering. She is working as Demonstrator at NCT (New Cairo Technological University). And played different roles in her career, like: \r\n 1-Networks and VOIP engineer at Connect Company \n 2-Instructor at Egypt institute for wireless studies \n 3-Technical trainer at 4G Center \r\n 4-Technical support at Exceed company \r\n 5- Training at National Authority for Remote Sensing and Space science (NARSS)",
			//     content: [
			//       "Understand what is routing and its types",
			//       "Create a network with 3 switches and 3 router with static route",
			//       "Test connectivity with ping and tracert and traceroute",
			//       "Understand TCP/IP model",
			//       "Understanding OSI model",
			//       "IPV6 with routing",
			//       "Protocols",
			//       "5VLANs",
			//       "Trunking protocols",
			//       "VTP protocol",
			//       "DHCP",
			//       "DHCP with multiple VLANs",
			//       "DHCP snooping",
			//       "Intro to switching",
			//       "BPDU guard",
			//       "STP Protocol",
			//       "Port security",
			//       "HSRP",
			//       "Ether channel",
			//       "Stacking",
			//       "Discovery protocols ",
			//       "NAT",
			//       "Intro to Routing",
			//       "Routing concept ",
			//       "How to read routing table",
			//       "Routing types",
			//       "RIP protocol",
			//       "OSPF protocol",
			//       "VPN",
			//       "MPLS",
			//       "WAN",
			//     ],
			//     outcomes: [],
			//   },
			// },
			paused: [{}],
		},
	},
	"startup-studio": {
		name: "Startup# Studio",
		img: startupImg,
		description: `The program is based on  a venture studio model for entrepreneurship, whereas the valley adopts a one-stop shop approach for startups combining company building with venture funding  either by generating new ideas for startups or by recruiting founders with ideas, and then they apply significant amounts of time and capital to the process of growing the startup successfully.
    By design, venture studios play the role of matchmaker, linking business ideas to their talented counterparts to execute those ideas.`,
		activities: {
			active: null,
			paused: null,
		},
	},
	"technovate-lab": {
		name: "Technovate Lab",
		img: technovateImg,
		description: `The program focuses on offering students, entrepreneurs and startups world-class secure facilities, with access to tools, technology, labs, equipment, and support, along with the opportunity to learn, design and networking with corporates and supported ecosystems. Whereas their presence on the valley will allow them to work in the same space and collaborate to research and co-create innovative solutions and cutting-edge projects syncing with existing NCT programs and facilities.`,
		activities: {
			active: null,
			paused: null,
		},
	},
	"co-manufacturing-space": {
		name: "Co-Manufacturing Space",
		img: manufactureImg,
		description: `The program offers the access to clean, efficient and smart manufacturing work space through partnering with different local manufacturers so that an entrepreneur or startup can find a suitable space to be conducive to their manufacturing, research and development or prototyping needs and avoiding a huge investment in their own facilities`,
		activities: {
			active: null,
			paused: null,
		},
	},
	"investment-cluster": {
		name: "Investment Cluster",
		img: investmentImg,
		description: `The program provides the opportunity for qualified startups to find investment opportunities for their projects by communicating with investors interested in entrepreneurship, whether from local or  international venture capital companies, angel investors,  banks, and financial funds.`,
		activities: {
			active: null,
			paused: null,
		},
	},
	"bashkateb-io": {
		name: "Bashkateb.io",
		img: transformImg,
		description: `Bashkateb.io program provides a stack of Business Optech platform that empowers businesses and creative professionals  focusing mainly on startups,  freelancers and SMEs that seamless managing and monitoring all business process aspects of the company while leverage AI- Driven Decision making strategy based on personalization profile.`,
		activities: {
			active: null,
			paused: null,
		},
	},
	"exports-development": {
		name: "Exports Development",
		img: exportImg,
		description: `The program was developed to create the  opportunities for emerging companies and their products to access and compete in the global markets and to raise the quality and efficiency of the Egyptian product and increase its ability to compete by enriching innovation techniques.`,
		activities: {
			active: null,
			paused: null,
		},
	},
	"consulting-engineer-avenue": {
		name: "Consulting Engineer Avenue",
		img: consultingImg,
		description: `The program provides engineering  collaborative platform where  experts, consulting engineers, professors from multi-disciplines of engineering can share knowledge, connecting the ecosystem and co- participate in national projects in the way  to best utilize effectively their diverse experience for Egypt development.`,
		activities: {
			active: null,
			paused: null,
		},
	},
};
