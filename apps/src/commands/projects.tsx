import { NavigableList } from "../components/NavigableList";
import { Command } from "../shell/types";

const projectsList = [
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform",
    preview: "A scalable online shopping platform with real-time inventory",
    details: `Full-stack e-commerce solution built with React, Node.js, and PostgreSQL.

Features:
• Real-time inventory management
• Payment gateway integration
• Admin dashboard with analytics
• Responsive design for all devices

Tech Stack: React, TypeScript, Node.js, PostgreSQL, Redis, Docker`,
  },
  {
    id: "ai-chatbot",
    name: "AI-Powered Chatbot",
    preview: "Intelligent chatbot using natural language processing",
    details: `Customer support chatbot with AI-driven responses and learning capabilities.

Features:
• Natural language understanding
• Context-aware conversations
• Multi-language support
• Analytics and reporting dashboard

Tech Stack: Python, TensorFlow, FastAPI, React, MongoDB`,
  },
];

export const projects: Command = {
  name: "projects",
  description: "View my projects",
  execute() {
    return <NavigableList items={projectsList} />;
  },
};