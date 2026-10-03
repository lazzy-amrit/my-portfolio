// All portfolio content lives here. Edit this file to update the site.

export const aliases = ["Luffy", "Lazzy Luffy", "lazzy-amrit"];

export const skillGroups = [
  { title: "Backend", items: ["Python", "FastAPI", "REST APIs", "SQLite", "Peewee ORM", "S3-compatible storage (boto3)"] },
  { title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML & CSS"] },
  { title: "Bots & plugins", items: ["Discord bots (discord.py)", "AI chatbots (Gemini)", "Plugins (basic)", "Automation scripts"] },
  { title: "Mobile", items: ["Kotlin (basic)", "Capacitor"] },
  { title: "Linux & DevOps", items: ["Linux (Arch)", "Native Linux apps and testing", "Docker", "Git & GitHub", "Netlify", "Railway"] },
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

export const experienceSummary =
  "5 years in software development, including work for companies. Now freelancing and looking for my next big client.";

export const experience = [
  {
    title: "Linux developer, Flint Launcher",
    text: "Made the whole Flint Launcher native to Linux, backed by proper tests. Flint is a lightweight Minecraft launcher for Windows and Linux.",
    link: "https://flintlauncher.vercel.app/",
  },
  {
    title: "Staff and developer, Sudharshan Cloud",
    text: "Worked with the Sudharshan Cloud team as staff and as a developer.",
    link: null,
  },
  {
    title: "Developer, Krish MC",
    text: "Main developer of Krish MC, which is hosted by Sudharshan Cloud.",
    link: null,
  },
  {
    title: "Founder, Notely",
    text: "Started Notely and built its backend: FastAPI services spread across several nodes behind my own load balancer.",
    link: "https://notely-edu.pages.dev",
  },
  {
    title: "Community manager, Coding Karna Hai",
    text: "Run a Discord coding community with more than 2,000 members.",
    link: null,
  },
  {
    title: "Freelance developer",
    text: "Work for companies in the past, now taking on freelance websites, backends and bots.",
    link: null,
  },
];

// Minecraft server shown in the contact section. Only Survival is running.
export const minecraftServer = {
  name: "Lazzy Land Survival",
  edition: "Bedrock",
  address: "lazyland.mcsh.io",
  port: "19132",
};

// link: null shows "Private repository" instead of a button.
// role: optional line shown above the description.
export const projects = [
  {
    name: "Flint Launcher",
    role: "Linux developer",
    description:
      "A lightweight Minecraft launcher for Windows and Linux with isolated profiles, automatic Java management, Fabric support and Modrinth mod installs. I made the whole launcher native to Linux and wrote proper tests for it.",
    tags: "Linux • Minecraft • Fabric • Testing",
    link: "https://flintlauncher.vercel.app/",
  },
  {
    name: "Notely",
    role: "Founder and backend developer",
    description:
      "A notes platform for school students: take notes with the camera, organise them by class, chat, and get help from an AI-based helper. The FastAPI backend runs on several nodes behind my own load balancer. Live and working now.",
    tags: "FastAPI • Load balancing • AI • Live",
    link: "https://notely-edu.pages.dev",
  },
  {
    name: "Droply",
    description:
      "A private file-sharing app for friends. Upload, store and share files through a FastAPI backend with S3-compatible object storage.",
    tags: "FastAPI • Peewee • S3 storage",
    link: null, // TODO: add the Droply GitHub or live URL here
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
