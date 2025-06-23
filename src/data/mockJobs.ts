
export interface JobPosting {
  id: number;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  budget: string;
  duration: string;
  postedDate: string;
  contactEmail: string;
  skills: string[];
  location: string;
  type: string;
  experienceLevel: string;
}

export const mockJobs: JobPosting[] = [
  {
    id: 1,
    title: "Build E-commerce Website",
    company: "Local Boutique",
    description: "Looking for a developer to create a modern e-commerce website with payment integration and inventory management.",
    requirements: ["React", "Node.js", "Payment Integration"],
    budget: "$2,000 - $3,500",
    duration: "4-6 weeks",
    postedDate: "2024-01-15",
    contactEmail: "contact@localboutique.com",
    skills: ["React", "Node.js", "E-commerce"],
    location: "Remote",
    type: "Project",
    experienceLevel: "Intermediate"
  },
  {
    id: 2,
    title: "Social Media Graphics Package",
    company: "Fitness Studio",
    description: "Need a complete social media graphics package including Instagram posts, stories, and promotional materials.",
    requirements: ["Adobe Creative Suite", "Social Media Design", "Brand Guidelines"],
    budget: "$800 - $1,200",
    duration: "2-3 weeks",
    postedDate: "2024-01-18",
    contactEmail: "marketing@fitnessstudio.com",
    skills: ["Design", "Branding", "Social Media"],
    location: "New York, NY",
    type: "Contract",
    experienceLevel: "Beginner"
  }
];
