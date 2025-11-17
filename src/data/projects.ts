import wool from '../assets/wool.png';
import waste from '../assets/waste.png';
import java from '../assets/java.png';
import sch from '../assets/sch.png';
import prep from '../assets/prep.png';
import res from '../assets/res.png';
import fin from '../assets/fin.png';

type Project = {
	slug: string;
	title: string;
	description: string;
	tech: string[];
	image: string;
};

export const projects: Project[] = [
	{
		slug: 'wool-transport-monitoring-app',
		title: 'Wool Transport Monitoring App',
		description:
			'Developed a mobile app to connect wool producers directly with consumers, removing intermediaries and ensuring fair pricing. Implemented wool storage management features, integrated educational modules to help farmers enhance product quality and market competitiveness a tracking system that helps users locate nearby wool storage facilities.',
		tech: ['MIT App Inventor', 'App Script', 'Excel', 'Firebase'],
		image: wool.src
	},
	{
		slug: 'waste-management-app',
		title: 'Waste Management App',
		description:
			'Developed a mobile app to encourage environmental sustainability, enabling users to earn credits for proper waste disposal, recycling, and contributions at nearby centers. Implemented waste categorization, geolocation for recycling centers, and a gamified rewards system to boost user participation.',
		tech: ['Dart', 'Flutter', 'FireBase'],
		image: waste.src
	},
	{
		slug: 'java-inventory-management',
		title: 'Java Inventory Management',
		description:
			'Developed an Inventory Management System with separate admin and user modules, allowing users to perform CRUD operations with role-specific features.',
		tech: ['Java','Eclipse','MySQL'],
		image: java.src
	},
	{
		slug: 'student-scholarship-portal',
		title: 'Student scholarship portal',
		description:
			'Developed a web-based Student Scholarship Portal to help students search and explore scholarships based on eligibility criteria. Included features like user login, scholarship filtering, and admin management',
		tech: ['React', 'NodeJS', 'MongoDB'],
		image: sch.src
	},
	{
		slug: 'prepwise-personalized-it-prep-companion-app',
		title: 'PrepWise- personalized IT prep companion App',
		description:
			'Developed PrepWise, a mobile application designed to help students prepare for IT industry placements. Integrated an AI-powered chatbot to schedule practice sessions and provide targeted study materials for specific companies. Implemented features including LeetCode progress tracking, video/audio mock interviews, ATS-based resume evaluation, and secure resume storage with real-time updates. The app delivers personalized recommendations and preparation plans based on each users profile, enhancing job readiness and boosting placement success rates.',
		tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
		image: prep.src
	},
	{
		slug: 'reactive-indian-restaurant',
		title: 'Reactive Indian restaurant',
		description:
			'Developed a responsive restaurant website using React with dynamic components, routing, and interactive UI for browsing menu, placing orders, and viewing offers.',
		tech: ['React', 'JavaScript', 'NodeJS'],
		image: res.src
	},
	{
		slug: 'finance-management-app',
		title: 'Finance Management App',
		description:
			'Developed Lights, a personal finance management application that enables individuals to efficiently track income, monitor expenses, and manage investments for better financial planning and decision-making.',
		tech: ['React Native','Expo','Spring Boot', 'MongoDB'],
		image: fin.src
	}
];

const projectMap = Object.fromEntries(projects.map(project => [project.slug, project]));

export const getProjectBySlug = (slug: string) => projectMap[slug];

