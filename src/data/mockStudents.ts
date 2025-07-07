
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
  identityTags: string[];
  portfolio?: StudentPortfolioItem[];
  aboutMe?: string;
  contact?: StudentContact;
}

export const identityTagsConfig = {
  "🧠 First Gen": { emoji: "🧠", label: "First Gen", color: "bg-purple-100 text-purple-800" },
  "🎓 High School Grad": { emoji: "🎓", label: "High School Grad", color: "bg-blue-100 text-blue-800" },
  "💡 Career Switcher": { emoji: "💡", label: "Career Switcher", color: "bg-yellow-100 text-yellow-800" },
  "🌟 Rising Star": { emoji: "🌟", label: "Rising Star", color: "bg-amber-100 text-amber-800" },
  "🔥 Top Performer": { emoji: "🔥", label: "Top Performer", color: "bg-red-100 text-red-800" },
  "🌱 New to Field": { emoji: "🌱", label: "New to Field", color: "bg-green-100 text-green-800" },
  "💪 Self-Taught": { emoji: "💪", label: "Self-Taught", color: "bg-orange-100 text-orange-800" },
  "🎯 Specialist": { emoji: "🎯", label: "Specialist", color: "bg-indigo-100 text-indigo-800" }
};

export const mockStudents: StudentService[] = [
  {
    id: 1,
    name: "Alex Rivera",
    title: "Resume Review & Editing",
    description:
      "I help transform resumes and cover letters into powerful career tools—quickly and professionally.",
    avatarUrl:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Career", "Writing", "Editing"],
    price: "$25/hr",
    identityTags: ["🧠 First Gen", "🌟 Rising Star"],
    aboutMe: "I am passionate about helping students land their dream jobs. With 5 years of experience in career development and a background in professional writing, I've worked with dozens of clients worldwide. In my spare time, I enjoy hiking and reading sci-fi novels.",
    contact: {
      email: "alex.rivera@myvillage.com",
      phone: "(555) 123-4567"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=400&h=280&q=80",
        title: "Resume Makeover Example",
        description: "Before and after resume transformation."
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=facearea&w=400&h=280&q=80",
        title: "Cover Letter Success",
        description: "Client got hired after edits."
      }
    ]
  },
  {
    id: 2,
    name: "Jamie Patel",
    title: "One-on-One Python Tutoring",
    description:
      "Friendly, step-by-step guidance for all skill levels. Flexible schedule available.",
    avatarUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Programming", "Python", "Tutoring"],
    price: "$20/hr",
    identityTags: ["🎓 High School Grad", "💪 Self-Taught"],
    aboutMe: "I'm a Computer Science major with a love for teaching and sharing knowledge. My tutoring style is patient and encouraging—no question is too small! When I'm not coding, you'll find me baking bread or playing guitar.",
    contact: {
      email: "jamie.patel@myvillage.com",
      phone: "(555) 234-5678"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=400&h=280&q=80",
        title: "Beginner Python Crash Course",
        description: "Example slides & resources."
      }
    ]
  },
  {
    id: 3,
    name: "Morgan Lee",
    title: "Logo & Visual Design",
    description:
      "Let's bring your ideas to life! Modern, professional graphics tailored to your needs.",
    avatarUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Design", "Branding", "Graphics"],
    price: "$45/hr",
    identityTags: ["💡 Career Switcher", "🎯 Specialist"],
    aboutMe: "Design isn't just my career—it's my passion. I specialize in minimal, memorable visuals and love collaborating on fresh ideas. Outside of design, I enjoy photography and practicing yoga.",
    contact: {
      email: "morgan.lee@myvillage.com",
      phone: "(555) 345-6789"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=400&h=280&q=80",
        title: "Brand Logo",
        description: "Minimalist rebrand for local business."
      }
    ]
  },
  {
    id: 4,
    name: "Samira Chen",
    title: "Social Media Growth Strategy",
    description:
      "I'll analyze, plan and optimize your social profiles for maximum engagement and reach.",
    avatarUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Social Media", "Marketing", "Consulting"],
    price: "$35/hr",
    identityTags: ["🔥 Top Performer", "🌟 Rising Star"],
    aboutMe: "From launching campaigns to boosting engagement, I love all things social! I have a knack for turning analytics into actionable strategies. Off the clock, I'm traveling or mastering new recipes.",
    contact: {
      email: "samira.chen@myvillage.com",
      phone: "(555) 456-7890"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&h=280&q=80",
        title: "Instagram Growth",
        description: "Doubled follower count for a client."
      }
    ]
  },
  {
    id: 5,
    name: "Ethan Smith",
    title: "WordPress Website Setup",
    description:
      "Professional website installation, theme setup, and troubleshooting for businesses or personal use.",
    avatarUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Web Development", "WordPress", "Tech Support"],
    price: "$30/hr",
    identityTags: ["🌱 New to Field", "💪 Self-Taught"],
    aboutMe: "I'm a web enthusiast with a focus on usability and performance. Helping small businesses get online is what motivates me every day! In my downtime, I'm tinkering with open-source or mountain biking.",
    contact: {
      email: "ethan.smith@myvillage.com",
      phone: "(555) 567-8901"
    },
    portfolio: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&h=280&q=80",
        title: "WordPress Demo Site",
        description: "Small business site build."
      }
    ]
  }
];
