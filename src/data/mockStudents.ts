
export interface StudentPortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
  link?: string;
}

export interface StudentContact {
  email?: string;
  phone?: string;
}

export interface StudentService {
  id: number;
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
  skills: string[];
  price: string;
  portfolio?: StudentPortfolioItem[];
  aboutMe?: string;
  contact?: StudentContact;
}

export const mockStudents: StudentService[] = [
  {
    id: 1,
    name: "Alex Rivera",
    title: "Full-Stack Web Developer",
    description:
      "I create modern, responsive websites and web applications using the latest technologies.",
    avatarUrl:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Web Development", "Programming", "UI/UX Design"],
    price: "$35/hr",
    aboutMe: "I'm passionate about creating beautiful, functional web experiences. With expertise in modern web technologies, I help businesses establish their online presence. In my spare time, I enjoy gaming and exploring new coding frameworks.",
    contact: {
      email: "alex.rivera@myvillage.com",
      phone: "(555) 123-4567"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=280&q=80",
        title: "E-commerce Website",
        description: "Full-stack online store with payment integration."
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&h=280&q=80",
        title: "Portfolio Website",
        description: "Modern responsive portfolio for creative agency."
      }
    ]
  },
  {
    id: 2,
    name: "Jamie Patel",
    title: "Logo & Brand Designer",
    description:
      "Creating memorable logos and brand identities that help businesses stand out from the crowd.",
    avatarUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Logo Design", "Graphic Design", "Animation"],
    price: "$40/hr",
    aboutMe: "I specialize in creating visual identities that tell your brand's story. From concept to final design, I ensure every element works harmoniously. When I'm not designing, you'll find me sketching in cafes or exploring art galleries.",
    contact: {
      email: "jamie.patel@myvillage.com",
      phone: "(555) 234-5678"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=280&q=80",
        title: "Restaurant Logo Design",
        description: "Complete brand identity for local restaurant."
      }
    ]
  },
  {
    id: 3,
    name: "Morgan Lee",
    title: "3D Artist & Animator",
    description:
      "Bringing ideas to life through 3D modeling and animation using Blender and industry-standard tools.",
    avatarUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["3D Modeling", "Blender", "Animation"],
    price: "$45/hr",
    aboutMe: "I create stunning 3D visuals and animations for games, movies, and marketing. Every project is an opportunity to push creative boundaries and tell compelling stories through visual art. Outside work, I love gaming and attending animation festivals.",
    contact: {
      email: "morgan.lee@myvillage.com",
      phone: "(555) 345-6789"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&h=280&q=80",
        title: "Product Visualization",
        description: "3D render for tech product marketing."
      }
    ]
  },
  {
    id: 4,
    name: "Samira Chen",
    title: "Game Designer & Developer",
    description:
      "Creating engaging game experiences from concept to completion, specializing in indie and mobile games.",
    avatarUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Game Design", "Programming", "Animation"],
    price: "$50/hr",
    aboutMe: "Games are my passion! I design and develop engaging experiences that captivate players. From mechanics to storytelling, I handle every aspect of game creation. When not coding, I'm analyzing the latest games or speedrunning classics.",
    contact: {
      email: "samira.chen@myvillage.com",
      phone: "(555) 456-7890"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&h=280&q=80",
        title: "2D Platformer Game",
        description: "Indie game with custom mechanics and art."
      }
    ]
  },
  {
    id: 5,
    name: "Ethan Smith",
    title: "Graphic Designer & Illustrator",
    description:
      "Professional graphic design services for print and digital media, specializing in creative illustrations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Graphic Design", "Logo Design", "Animation"],
    price: "$30/hr",
    aboutMe: "I bring creativity to every project, whether it's a business card or a full marketing campaign. My style blends modern aesthetics with timeless design principles. In my free time, I enjoy digital painting and collecting vintage design books.",
    contact: {
      email: "ethan.smith@myvillage.com",
      phone: "(555) 567-8901"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&w=400&h=280&q=80",
        title: "Marketing Materials",
        description: "Complete design package for startup launch."
      }
    ]
  }
];
