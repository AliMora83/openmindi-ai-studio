export const services = [
    {
        featured: true,  // spans 2 rows · dark bark background
        icon: "⚡",
        name: "AI-Powered Landing Pages",
        desc: "Your homepage is your first pitch. We use AI to research your market, write your copy, design your layout, and ship a React-built page that converts. Delivered in 3–5 days.",
        price: "From $150 · 3–5 day delivery"
    },
    {
        icon: "🎨",
        name: "Brand Identity Systems",
        desc: "Logo, colour palette, typography, and a complete brand guide. Built for digital-first businesses. AI-assisted concept generation, human-directed final execution.",
        price: "From $300 · 5–7 days"
    },
    {
        icon: "🚀",
        name: "SaaS & App Interfaces",
        desc: "React dashboards, admin panels, and SaaS frontends that look and feel premium from day one. We handle architecture, design system, and deploy.",
        price: "From $600 · 1–2 weeks"
    },
    {
        icon: "🤖",
        name: "AI Chatbot Integration",
        desc: "Add an intelligent AI assistant to your website or app. We build the React UI, connect the API, and deploy on your server.",
        price: "From $500 · 1 week"
    },
    {
        icon: "🌐",
        name: "Web3 & NFT Platforms",
        desc: "NFT marketplaces, DAO tools, and Web3 UIs built with React and ThirdWeb. Bloemfontein's first NFT marketplace was ours.",
        price: "From $800 · Custom"
    }
];

export const steps = [
    { num: "01", name: "Brief & Research", desc: "You tell us about your business. We use Kimi and Gemini to research your industry, competitors, and audience — in hours, not days.", ai: "Kimi · Gemini" },
    { num: "02", name: "Design & Copy", desc: "Claude writes your copy. We design the layout and visual direction. You review. We iterate fast — usually 1 round of revisions, not 5.", ai: "Claude · Figma" },
    { num: "03", name: "Build & Ship", desc: "We build in React and Next.js. AI helps scaffold components and write tests. You get production-ready code deployed to your domain.", ai: "React · Next.js" },
    { num: "04", name: "Grow & Optimise", desc: "Post-launch, we monitor, update, and grow with you. Most clients stay with us for years — because we're invested in their success.", ai: "Ongoing" }
];

export const clients = [
    { initials: "MC", name: "Micassa Suites", location: "Kampala, Uganda", since: "Oct 2024", services: ["Full-stack Dev", "Brand/CI", "SEO & Security"] },
    { initials: "SF", name: "Sifinet Connect", location: "Bloemfontein · National", since: "Feb 2022", services: ["Full-stack Dev", "Brand/CI", "Graphic Design"] },
    { initials: "IB", name: "IDBS Online Learning", location: "Cape Town · International", since: "Feb 2020", services: ["Full-stack Dev", "Web3 Education", "Presentations"] },
    { initials: "DI", name: "Digital Information Systems", location: "Cape Town · National", since: "Feb 2021", services: ["Full-stack Dev", "Graphic Design"] },
    { initials: "UD", name: "UDYNET Wireless Wi-Fi", location: "Bloemfontein · National", since: "Feb 2019", services: ["Full-stack Dev", "Graphic Design", "Video/Animated Promos"] },
    { initials: "OM", name: "Open Mind Industries", location: "Bloemfontein · International", since: "Feb 2017", services: ["Business Consultation", "Brand/CI", "Full-stack Dev"] }
];

export const projects = [
    { gradient: "linear-gradient(135deg, #1a0f0a, #c1622f)", emoji: "🏪", tag: "Web3 · NFT", title: "NAMKA NFT Marketplace", desc: "Free State's first NFT marketplace for local digital collectibles. Built with React, ThirdWeb and Tailwind.", url: "https://namka-marketplace.netlify.app/" },
    { gradient: "linear-gradient(135deg, #0d2b45, #3d5a3e)", emoji: "🎓", tag: "Platform · Design", title: "DevelopMe Mentorship", desc: "A platform connecting junior developers with experienced mentors for real-world project experience.", url: "https://www.behance.net/gallery/173247639/Develop-Me" },
    { gradient: "linear-gradient(135deg, #2e1a0e, #6c5ce7)", emoji: "🔗", tag: "SaaS · React", title: "DevConnect Platform", desc: "Connecting junior developers and clients for cost-effective software. Mutual growth through real projects.", url: "https://devconnect-v2.netlify.app/" },
    { gradient: "linear-gradient(135deg, #1a3c5e, #00b8a9)", emoji: "🌤", tag: "API · JavaScript", title: "Weather App", desc: "Real-time weather with dynamic city backgrounds. Auto-updating UI built with vanilla JavaScript.", url: "https://namka-weather-app.netlify.app/" },
    { gradient: "linear-gradient(135deg, #3d5a3e, #d4903a)", emoji: "🍲", tag: "API · React", title: "Food Recipes API", desc: "Search by ingredients. Get instant recipe suggestions. Built with React and a public meals API.", url: "https://foodrecipes-api.netlify.app/" }
];

export const tools = [
    { emoji: "🧠", name: "Claude", use: "Copy, code review, strategy, proposals" },
    { emoji: "🔍", name: "Gemini", use: "Research, image analysis, content ideas" },
    { emoji: "📄", name: "Kimi", use: "Long-doc analysis, competitor research" },
    { emoji: "⚙️", name: "OpenClaw", use: "Workflow automation, AI orchestration" },
    { emoji: "☁️", name: "Hostinger VPS", use: "Deployment, hosting, custom domains" }
];
