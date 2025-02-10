export type Recommendation = {
  author: string;
  image: string;
  description: Array<string>;
  occupation: string;
  location: string;
  coordinates: [number, number, number];
};

const recommendationData: Array<Recommendation> = [
  {
    author: "Collins Nwoko",
    image: "/assets/recommendations/stephen.jpg",
    occupation: "Full-Stack Developer",
    description: [
      "Stephen and I worked together on a couple of projects, and I appreciate his skills and discipline.",
      "He has the focus and skills that keep him and his team productive during intense crunch periods. I couldn’t recommend him more for any business looking for new talent.",
    ],
    location: "Abuja, Nigeria",
    coordinates: [10, 2.4, 0],
  },
  {
    author: "Okoli Johnson",
    occupation: "Web Developer",
    image: "/assets/recommendations/stephen.jpg",
    description: [
      "Stephen is a great guy. His attitude and approach to work are really good. I would love to have him as a part of my team since he is hard-working, smart, and also technically competent.",
      "To see a young individual as driven as him is inspiring. He definitely has a bright future ahead of him.",
    ],
    location: "Dubrovnik, Croatia",
    coordinates: [7.2, 72.8, 0],
  },
  {
    author: "Mohamed Aachour",
    occupation: "Software Engineer",
    image: "/assets/recommendations/stephen.jpg",
    description: [
      "Stephen Okoye is a loyal colleague who understands complex matters.",
      "He is a strong and goal-oriented team player. With every problem, he suggested a solution. Highly recommended.",
    ],
    location: "Kenitra, Morocco",
    coordinates: [4.6, 79.7, 0],
  },
  {
    author: "Tracey Kadenyi",
    occupation: "Web Developer",
    image: "/assets/recommendations/stephen.jpg",
    description: [
      "There are so many good things I can say about working with Okoye Stephen. He has expert knowledge in JavaScript, and React.js",
      "Always willing to help a teammate facing a code blocker. Such generosity with knowledge and skill is what makes him easy and fun to work with.",
    ],
    location: "Nairobi County, Kenya",
    coordinates: [94.8, 67.5, 0],
  },
  {
    author: "Aleksandra Ujvari",
    image: "/assets/recommendations/stephen.jpg",
    occupation: "Full-Stack Developer",
    description: [
      "Stephen is a phenomenal developer, his approach to technical problems is incredible.",
      "We are from different countries and cultures, but we communicated effectively without blockers. If you are looking for a developer with both technical and soft skills, don't hesitate to contact him.",
    ],
    location: "Vojvodina, Serbia",
    coordinates: [7.8, 72.2, 0],
  },
  {
    author: "Elizabeth Ojesanmi",
    occupation: "Integration Specialist",
    image: "/assets/recommendations/stephen.jpg",
    description: [
      "When I think about Stephen, the words “hardworking and innovative” spring to mind. Okoye Stephen is someone I've had the pleasure of knowing, and we get along great.",
      "Stephen is a great guy for any position needing a developer, he has my highest recommendation.",
    ],
    location: "Accra, Ghana",
    coordinates: [96.8, 77.8, 0],
  },
  {
    author: "Ishpaul Singh",
    occupation: "Frontend Developer",
    image: "/assets/recommendations/stephen.jpg",
    description: [
      "Stephen is very knowledgeable when it comes to working with software tools and technologies, and he is also a very fast learner.",
      "I really enjoyed our pair-programming sessions together, as he was a helpful and understanding team member.",
    ],
    location: "New Delhi, India",
    coordinates: [3.2, 56.5, 0],
  },
  {
    author: "Sidney Kaguli",
    occupation: "Full-Stack Developer",
    image: "/assets/recommendations/stephen.jpg",
    description: [
      "I had the pleasure of working with Stephen on a three-week project (with 3 other members), a full-stack reservation app with React and Rails.",
      "I was particularly impressed by Stephen' ability to handle challenges, whether it's getting to the root of buggy code or getting people on board with ideas.",
    ],
    location: "Nairobi County, Kenya",
    coordinates: [94.8, 67.5, 0],
  },
];

export default recommendationData;
