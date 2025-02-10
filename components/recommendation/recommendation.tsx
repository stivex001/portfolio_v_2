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
    author: "Okoli Johnson",
    occupation: "Lead Software Engineer",
    image: "/assets/recommendations/okoli.jpg",
    description: [
      "Stephen is an exceptional developer with a strong work ethic and a passion for excellence. His dedication and problem-solving abilities make him an invaluable asset to any team.",
      "His drive and technical competence are truly inspiring. Without a doubt, he has a bright future ahead of him.",
    ],
    location: "Manchester, United Kingdom",
    coordinates: [53.483959, -2.244644, 0], 
  },
  {
    author: "Collins Nwoko",
    image: "/assets/recommendations/collins.jpg",
    occupation: "Full-Stack Developer",
    description: [
      "Having collaborated with Stephen on multiple projects, I deeply admire his technical skills and disciplined approach.",
      "He maintains a high level of focus, ensuring productivity even under tight deadlines. Any business looking for top talent would be lucky to have him.",
    ],
    location: "Abuja, Nigeria",
    coordinates: [9.05785, 7.49508, 0],
  },
  {
    author: "Oladapo Ajala",
    occupation: "Software Engineer",
    image: "/assets/recommendations/ajala.jpg",
    description: [
      "Stephen is a dedicated and insightful professional who approaches challenges with a solution-driven mindset.",
      "A strong team player with a clear goal-oriented approach, he consistently delivers impactful results. Highly recommended.",
    ],
    location: "Utrecht, Netherlands",
    coordinates: [52.090736, 5.12142, 0], // Corrected coordinates for Utrecht
  },
  {
    author: "Folasayo Samuel",
    occupation: "Software Engineer, Community Manager",
    image: "/assets/recommendations/folasayo.jpg",
    description: [
      "Stephen brings expert-level JavaScript and React.js knowledge to any team he joins.",
      "Beyond his technical expertise, he is always eager to support teammates facing challenges, making collaboration with him both productive and enjoyable.",
    ],
    location: "Lagos, Nigeria",
    coordinates: [6.5244, 3.3792, 0], // Corrected coordinates for Lagos
  },
  {
    author: "Godwin Opara",
    image: "/assets/recommendations/godwin.jpg",
    occupation: "Full-Stack Developer",
    description: [
      "Stephen’s approach to solving technical problems is both strategic and innovative.",
      "Despite our different cultural backgrounds, working with him was seamless and rewarding. If you need a developer with both technical expertise and excellent communication skills, he’s the one to call.",
    ],
    location: "Lagos, Nigeria",
    coordinates: [6.5244, 3.3792, 0], // Same coordinates as Lagos
  },
];

export default recommendationData;
