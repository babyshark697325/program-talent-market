
export interface StudentService {
  id: number;
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
  skills: string[];
  price: string;
}

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
  },
  {
    id: 3,
    name: "Morgan Lee",
    title: "Logo & Visual Design",
    description:
      "Let’s bring your ideas to life! Modern, professional graphics tailored to your needs.",
    avatarUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Design", "Branding", "Graphics"],
    price: "$45/hr",
  },
  {
    id: 4,
    name: "Samira Chen",
    title: "Social Media Growth Strategy",
    description:
      "I’ll analyze, plan and optimize your social profiles for maximum engagement and reach.",
    avatarUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
    skills: ["Social Media", "Marketing", "Consulting"],
    price: "$35/hr",
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
  },
];
