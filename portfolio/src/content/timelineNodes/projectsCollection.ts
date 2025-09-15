import { ProjectStatus, type Project } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectsSection";
import SkyLineProjectImage from "@/assets/projects-assets/Airline.jpg";
import SawtakProjectImage from "@/assets/projects-assets/Sawtak.jpg";
import TheJoyOfLearningEnglishProjectImage from "@/assets/projects-assets/TheJoyOfLearning.png";
import { ProjectsNames, projectsStack } from "@/content/timelineNodes/techStackSectionContent";




export const projectsCollection: Project[] = [
  {
    projectName: "SkyLine",
    projectOverviewSection: [
      "The Skyline Project was the fourth mission in my journey through Orange Coding Academy. Built with React and Firebase, it became a flight-booking platform that allowed users to browse and reserve flights seamlessly—an ambitious challenge that pushed my technical skills forward.",

      "With only five days to complete the mission, our crew of five had to operate under a very tight deadline. This project tested our teamwork, communication, and ability to stay on course despite the pressure. It was a real exercise in balancing speed with precision.",

      "Through determination and collaboration, we launched a fully functional web application on time. The Skyline Project became proof that with the right crew and mindset, even the toughest deadlines can be met successfully—safe to say, this mission was executed flawlessly.",
    ],

    stack: { techStackGroups: projectsStack[ProjectsNames.SkyLine]?.techStackGroups || {} },
    bulletPointsSection: {
      sectionTitle: "Main contributions",
      bulletPoints: [
        "Engineered the login and signup modules using Firebase Authentication, ensuring secure access and a smooth onboarding experience for mission users.",

        "Developed the payment and checkout flow with PayPal integration, adding a dynamic discount feature to enhance usability and streamline the booking process.",

        "Helped maintain and manage the mission repository on GitHub, reviewing pull requests and ensuring that our codebase remained stable, scalable, and mission-ready.",

        "Structured the application’s data architecture in Firebase Firestore, establishing clear relationships and efficient queries to keep the system running with precision.",
      ],
    },
    featuredTags:["React","Firebase","PayPal","GitHub"],
    videoDemo: "https://res.cloudinary.com/ds8lpkotx/video/upload/v1757961700/WhatsApp_Video_2025-09-12_at_5.30.48_PM_ppzrqw.mp4",
    projectBackgroundImage: SkyLineProjectImage,
    projectStatus: ProjectStatus.Completed,
    projectRepoLink: "https://github.com/Basil-Abushihab/Airline-Project",
  },
  {
    projectName: "Sawtak",
    projectOverviewSection: [
      "Sawtak was my fifth mission in Orange Coding Academy, and it was the toughest one yet. The goal was to create a comprehensive election management system that could handle everything from voter registration to real-time result tracking to live debates between candidates.",
      "This mission was a real test of my skills and endurance. as A team of five, we had just one week to build a fully functional application from scratch. The pressure was on, and the stakes were high. We had to work around the clock, coordinating our efforts and pushing through long hours to meet the tight deadline.",
      "Despite the challenges, we pulled together and delivered a robust system that met all the requirements. Sawtak became more than just a project; it was a testament to our teamwork, resilience, and ability to thrive under pressure. Completing this mission was a proud moment, marking a significant milestone in my coding journey.",
    ],
    stack: { techStackGroups: projectsStack[ProjectsNames.Sawtak]?.techStackGroups || {} },
    bulletPointsSection: {
      bulletPoints: [
        "My main objective was to develop the candidates debates feature, which allowed candidates to schedule and participate in live debates. This involved creating a user-friendly interface and ensuring real-time updates during the debates as well as keeping up with event schedules.",
        "Additionally, I took on the responsibility of designing and implementing the database schema with all of its complex relationships which required high understanding of the requirements.",
      ],
      sectionTitle: "Main contributions",
    },
    featuredTags:["React","React Stream","GitHub","Stripe"],
    videoDemo: "https://res.cloudinary.com/ds8lpkotx/video/upload/v1757961853/1724583501679_m8yeuf.mp4",
    projectBackgroundImage: SawtakProjectImage,
    projectStatus: ProjectStatus.Completed,
    projectRepoLink: "https://github.com/Basil-Abushihab/Election-Project",
  },
  {
    projectName: "The Joy of learning English",
    projectOverviewSection: [
      "This personal mission began as a challenge presented by my father, a Tawjihi English teacher, who often struggled with customizing practice sheets and tailoring tests to his students’ needs. He needed a tool that would save time, improve flexibility, and provide deeper insights into student performance.",

      "I took it upon myself to engineer a dedicated platform for him—a personalized web application where he could effortlessly design tests, track progress, and manage his work more effectively. What started as a family-driven idea became an opportunity to merge my skills with a real-world need, turning code into a meaningful solution.",
    ],
    bulletPointsSection: {
      bulletPoints: [
      "implementing the core features of the application, including test creation, student management, and performance tracking.",
      "Setting up the backend infrastructure using Nest.Js with service-repository pattern to ensure better maintainability and reusability in the long run.",
      "Implementing authentication and authorization features to secure sensitive student data and ensure privacy.",
      ],
      sectionTitle: "In progress features",
    },
    stack: { techStackGroups: projectsStack[ProjectsNames.TheJoyOfLearningEnglish]?.techStackGroups || {} },
    featuredTags:["React","Nest.Js","GitHub"],
    projectStatus: ProjectStatus.InProgress,
    projectBackgroundImage: TheJoyOfLearningEnglishProjectImage,
    projectRepoLink: "https://github.com/Basil-Abushihab/TestingWebsite",
  },
];
