// All portfolio content lives here. Edit this file to update the site.

export const skillGroups = [
  { title: "Backend", items: ["Python", "FastAPI", "REST APIs", "SQLite", "Peewee ORM", "S3-compatible storage (boto3)"] },
  { title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML & CSS"] },
  { title: "Bots & plugins", items: ["Discord bots (discord.py)", "AI chatbots (Gemini)", "Plugins (basic)", "Automation scripts"] },
  { title: "Mobile", items: ["Kotlin (basic)", "Capacitor"] },
  { title: "DevOps & tools", items: ["Docker", "Linux (Arch)", "Git & GitHub", "Netlify", "Railway"] },
];

export const services = [
  {
    title: "Websites and web apps",
    text: "Fast, responsive sites and full stack apps built with React and FastAPI, from landing pages to dashboards.",
  },
  {
    title: "Backends and APIs",
    text: "Clean REST APIs in Python with databases, authentication, file storage and real-time features.",
  },
  {
    title: "Bots and automation",
    text: "Discord bots, AI chatbots and scripts that take repetitive work off your hands.",
  },
  {
    title: "Deployment",
    text: "Dockerized apps running on Linux servers or cloud platforms, set up so they stay up.",
  },
];

// link: null shows "Private repository" instead of a button.
export const projects = [
  {
    name: "Droply",
    description:
      "A private file-sharing app for friends. Upload, store and share files through a FastAPI backend with S3-compatible object storage.",
    tags: "FastAPI • Peewee • S3 storage",
    link: null, // TODO: add the Droply GitHub or live URL here
  },
  {
    name: "Notely",
    description:
      "A notes storage platform with an AI-based helper for students, built on a FastAPI backend with real-time communication. Currently under development.",
    tags: "FastAPI • AI • In development",
    link: "https://getnotely.netlify.app",
  },
  {
    name: "Luna",
    description:
      "A funny AI chatbot for Discord with a chaotic personality, built with discord.py and Google Gemini. Talks, jokes around, and answers questions right in your server.",
    tags: "Python • discord.py • Gemini",
    link: "https://github.com/lazzy-amrit/luna",
  },
  {
    name: "Mukio",
    description:
      "A tiny tty-based music player for Linux. Search, stream, and queue tracks from YouTube or Spotify links straight from the terminal, with a live audio visualizer and Discord Rich Presence built in.",
    tags: "Python • Linux",
    link: "https://github.com/lazzy-amrit/mukio",
  },
  {
    name: "Urban Pulse",
    description:
      "A smart infrastructure detector that uses sensors to flag problem areas in a city for future repair. Working, but still under development and not yet shared publicly.",
    tags: "Python • In development",
    link: "https://github.com/lazzy-amrit/Urban-Pulse",
  },
  {
    name: "Lightweight Emoji Picker",
    description: "Fast and minimal emoji picker built using Python, focused on performance and simplicity.",
    tags: "Python",
    link: "https://github.com/lazzy-amrit/light-weight_emoji-picker",
  },
];
