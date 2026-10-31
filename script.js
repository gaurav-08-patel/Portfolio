let projects = [
  {
    title: "Link Shortener",
    type: "Full-stack / DevOps",
    summary:
      "A full-stack URL shortening application that lets users create and manage short links with authentication and real-time functionality. It combines user-facing product work with practical deployment learning, including Docker, Redis, Nginx, and multi-container orchestration.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Redis", "Docker", "Nginx"],
    project_link: "https://github.com/gaurav-08-patel/Link-Shortener",
  },
  {
    title: "LuckyStrike",
    type: "Full-stack product",
    summary:
      "A full-stack TypeScript app with a React frontend and Express + MySQL backend, built to explore end-to-end application flow with authentication, cloud media handling, scheduled jobs, and email automation.",
    tags: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "MySQL", "Cloudinary", "JWT"],
    project_link: "https://github.com/gaurav-08-patel/LuckyStrike",
  },
  {
    title: "sanity-next-devblog",
    type: "CMS blog",
    summary:
      "A fast, statically generated developer blog built with Next.js, Sanity CMS, Tailwind CSS, and fuzzy search, designed around content publishing, SEO, and clean developer-focused UI.",
    tags: ["Next.js", "Sanity", "Tailwind CSS", "SEO", "Fuse.js"],
    project_link: "https://github.com/gaurav-08-patel/sanity-next-devblog",
  },
  {
    title: "SAJAG AI",
    type: "Disaster response system",
    summary:
      "A smart disaster response and rescue coordination platform built for a hackathon, focused on emergency management, disaster alerts, and quicker coordination for public safety.",
    tags: ["React", "Node.js", "JavaScript", "Maps", "Emergency Systems"],
    project_link: "https://github.com/gaurav-08-patel/Hack4Safety-Hackathon",
  },
  {
    title: "Booking App",
    type: "MERN stack",
    summary:
      "A hotel booking application with secure user authentication, hotel management, image uploads, search and filtering, and Stripe-based payments.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "MERN"],
    project_link: "https://github.com/gaurav-08-patel/booking_app",
  },
  {
    title: "CIT Events Portal",
    type: "College platform",
    summary:
      "A campus events portal designed to help students discover workshops, hackathons, and academic events in one place, with event management and participant engagement in mind.",
    tags: ["React", "Node.js", "JavaScript", "Events", "Campus Platform"],
    project_link: "https://github.com/gaurav-08-patel/CIT_Events_Portal",
  },
  {
    title: "Expense Tracker",
    type: "Mobile app",
    summary:
      "A mobile-first expense tracking app that helps users monitor spending and keep their personal finance records organized.",
    tags: ["React Native", "Expo", "JavaScript", "Mobile UI"],
    project_link: "https://github.com/gaurav-08-patel/Expense-Tracker",
  },
  {
    title: "GitHub Profile Finder",
    type: "Frontend tool",
    summary:
      "A lightweight GitHub profile explorer that brings together public profile information and project visibility in a simple interface.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub API"],
    project_link: "https://github.com/gaurav-08-patel/GitHub-Profile-Finder",
  },
];

const workContainer = document.querySelector(".work__container");

window.addEventListener("DOMContentLoaded", () => {
  displayProjects();
});

function displayProjects() {
  if (!workContainer) return;

  const cards = projects
    .map((project) => {
      const projectLink = project.project_link && project.project_link !== "#" ? project.project_link : "#";
      const isExternalLink = /^https?:\/\//.test(projectLink);
      const tagMarkup = project.tags
        .map((tag) => `<span class="project-card__tag">${tag}</span>`)
        .join("");

      return `
        <article class="project-card">
          <div class="project-card__header">
            <span class="project-card__type">${project.type}</span>
            <a href="${projectLink}" target="${isExternalLink ? "_blank" : "_self"}" rel="noreferrer" class="project-card__link">
              ${isExternalLink ? "View" : "Concept"}
            </a>
          </div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-card__tags">${tagMarkup}</div>
        </article>
      `;
    })
    .join("");

  workContainer.innerHTML = cards;
}
