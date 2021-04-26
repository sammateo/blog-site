import Landing from "../src/Landing";
import styles from "../styles/About.module.css";
import Footer from "../src/Footer";
import Card from "../src/components/card";
export default function About() {
	const experience = [
		{
			position: "Manager",
			business: "Empowered Living Services and Supplies",
			time: "",
			description:
				"Managing daily operation, strategic planning, event planning, marketing, training and client consultation services. I also enable the marketing and sale of books and supplies.",
		},
		{
			position: "Consultant",
			business: "Enrich Consulting - Barbados",
			time: "Nov 2011 - Jun 2013 . 1 yr 8 mos",
			description:
				"Career Planning, Planning Business Start-Up, Money Management and Soft Skills Training, Report/ Document Writing and Strategic Planning, Coordination and Logistical Support.",
		},
		{
			position: "Financial Advisor",
			business: "CLICO International Life Insurance Ltd.",
			time: "Jan 2005 - Jan 2010 . 5 yrs 1 mo",
			description:
				"Investment and Insurance Advising, Customer Service and Sales, Marketing Seminars and Campaigns and Formualtion of Promotional Materials.",
		},
		{
			position: "Biology Teacher",
			business: "Queen's College, Barbados, WI",
			time: "Sep 2003 - Aug 2004 . 1yr",
			description: "Teaching Biology and Integrated Science.",
		},
	];

	const education = [
		{
			school: "Durham Business School",
			business:
				"Master of Business Administration (M.B.A.), General Business Administration and Management, Distinction",
			time: "2006  - 2008",
			description:
				"Management Strategy, Finance, Corporate Finance, Strategic Marketing, Project Management, Managing People (HRM) Information Systems Management, Managing Information, Research Methods and Management Decision Making.",
		},
	];
	return (
		<div className={styles.container}>
			<Landing title="About Sophia"></Landing>
			<div className={styles.content}>
				{/* <div className={styles.title}>
					<h2>About Sophia</h2>
				</div> */}
				<div>
					<p>Sophia Alecia Bygrave (MBA, BSc, Cert, Trainer TVET)</p>

					<p>
						Author, Trainer, Motivational Speaker/Business and Personal
						Development Consultant
					</p>
					<h3>Experience</h3>
					<div className={styles.experiencecards}>
						{experience.map((exp) => (
							<div key={exp.position}>
								<Card
									position={exp.position}
									business={exp.business}
									time={exp.time}
									description={exp.description}
								></Card>
							</div>
						))}
					</div>
					<h3>Education</h3>
					<div className={styles.experiencecards}>
						{education.map((exp) => (
							<div key={exp.school}>
								<Card
									position={exp.school}
									business={exp.business}
									time={exp.time}
									description={exp.description}
								></Card>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
