/* eslint-disable react/no-unescaped-entities */
'use client';

// ── AFFILIATE LINKS ─────────────────────────────────────────────────────────
const AFFILIATE = {
  ghl: 'https://www.gohighlevel.com/?fp_ref=dvcb7',
  notion: 'https://affiliate.notion.so/YOUR_LINK',
  murf: 'https://murf.ai/?via=YOUR_LINK',
  lindy: 'https://www.lindy.ai/',
  crewai: 'https://crewai.com/',
  instantly: 'https://instantly.ai/',
};

// ── OPENMINDI DESIGN TOKENS ──────────────────────────────────────────────────
const C = {
  clay: '#C1622F',
  ochre: '#D4903A',
  dusk: '#1A0F0A',
  bark: '#2E1A0E',
  sand: '#F5EDD8',
  cream: '#FAF6EE',
};

// ── BASE COMPONENTS ──────────────────────────────────────────────────────────
function H2({ children, id }) {
  return (
    <h2 id={id} style={{
      fontFamily: 'Playfair Display, serif', fontWeight: 700,
      fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)',
      color: C.bark, letterSpacing: '-0.01em',
      lineHeight: 1.25, marginTop: 52, marginBottom: 16,
      paddingBottom: 12, borderBottom: `1px solid ${C.sand}`,
    }}>{children}</h2>
  );
}

function P({ children }) {
  return (
    <p style={{
      fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
      fontSize: '1.05rem', color: '#5A3E2B',
      lineHeight: 1.8, marginBottom: 20,
    }}>{children}</p>
  );
}

function Callout({ emoji, children, accent = C.clay }) {
  return (
    <div style={{
      background: accent + '0D', border: `1px solid ${accent}44`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: 12, padding: '16px 20px',
      display: 'flex', gap: 12, margin: '28px 0',
    }}>
      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{emoji}</span>
      <p style={{ color: C.bark, fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{children}</p>
    </div>
  );
}

function AffCard({ emoji, name, desc, tag, href, tagColor = C.clay }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'flex', gap: 14, alignItems: 'flex-start',
      background: C.cream, border: `1px solid ${C.sand}`,
      borderLeft: `4px solid ${C.clay}`,
      borderRadius: 16, padding: '16px 18px',
      textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${C.clay}18`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{emoji}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: C.bark, fontSize: '0.95rem' }}>{name}</span>
          <span style={{ background: tagColor + '22', color: tagColor, fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', fontWeight: 700, padding: '2px 8px', borderRadius: 999, letterSpacing: '0.06em' }}>{tag}</span>
        </div>
        <p style={{ color: '#7A5C44', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>{desc}</p>
      </div>
      <span style={{ color: C.clay, fontSize: '1rem', alignSelf: 'center' }}>→</span>
    </a>
  );
}

// ── STEP COMPONENT ───────────────────────────────────────────────────────────
function Step({ number, title, time, children }) {
  return (
    <div style={{
      display: 'flex', gap: 20, marginBottom: 36,
      paddingBottom: 36, borderBottom: `1px solid ${C.sand}`,
    }}>
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: C.clay + '22', border: `2px solid ${C.clay}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Space Mono, monospace', fontWeight: 700,
          fontSize: '1rem', color: C.clay,
        }}>{number}</div>
        <div style={{ width: 1, flex: 1, background: C.sand, minHeight: 20 }} />
      </div>
      <div style={{ flex: 1, paddingTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', color: C.bark, margin: 0 }}>{title}</h3>
          {time && (
            <span style={{ background: C.sand, color: '#9A7A64', fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.04em' }}>
              {String.fromCodePoint(0x23F1)} {time}
            </span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

// ── COST BADGE ───────────────────────────────────────────────────────────────
function CostBadge({ usd, zar }) {
  return (
    <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', margin: '16px 0' }}>
      <span style={{ background: C.clay + '22', color: C.clay, fontFamily: 'Space Mono, monospace', fontSize: '0.78rem', fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>{usd}/month</span>
      <span style={{ color: '#9A7A64', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem' }}>approx.</span>
      <span style={{ background: C.sand, color: '#7A5C44', fontFamily: 'Space Mono, monospace', fontSize: '0.78rem', fontWeight: 600, padding: '4px 12px', borderRadius: 999 }}>{zar} ZAR</span>
    </div>
  );
}

// ── AGENT CARD ───────────────────────────────────────────────────────────────
function AgentCard({ emoji, role, tool, cost, saves, tasks }) {
  return (
    <div style={{
      background: C.cream, border: `1px solid ${C.sand}`,
      borderTop: `3px solid ${C.clay}`,
      borderRadius: 14, padding: '22px', marginBottom: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: '1.6rem' }}>{emoji}</span>
          <div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.98rem', color: C.bark, margin: 0 }}>{role}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#9A7A64', margin: 0 }}>Powered by {tool}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ background: C.clay + '22', color: C.clay, fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>{cost}</span>
          <span style={{ background: C.ochre + '22', color: C.ochre, fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>Saves {saves}/wk</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {tasks.map((task, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ color: C.clay, fontSize: '0.7rem', marginTop: 5, flexShrink: 0 }}>✦</span>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#7A5C44', lineHeight: 1.5, margin: 0 }}>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Article2Page() {
  return (
    <main style={{ minHeight: '100vh', background: C.cream }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #C1622F33; }
        .faq-item summary {
          list-style: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 0;
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.95rem; color: #2E1A0E;
          border-bottom: 1px solid #F5EDD8; user-select: none;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] summary { color: #C1622F; }
        .faq-item p {
          padding: 16px 0; font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
          color: #7A5C44; line-height: 1.7; border-bottom: 1px solid #F5EDD8;
        }
        .toc-link {
          color: #9A7A64; font-family: 'Space Mono', monospace;
          font-size: 0.75rem; text-decoration: none;
          transition: color 0.2s; display: block; padding: 5px 0; letter-spacing: 0.02em;
        }
        .toc-link:hover { color: #C1622F; }
        @media (max-width: 900px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .toc-sidebar { display: none !important; }
        }
        .kente-stripe {
          background-image: repeating-linear-gradient(
            -45deg,
            #C1622F18 0px, #C1622F18 2px,
            transparent 2px, transparent 10px,
            #D4903A18 10px, #D4903A18 12px,
            transparent 12px, transparent 20px
          );
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        borderBottom: `1px solid ${C.sand}`,
        padding: '0 max(24px,5vw)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0,
        background: 'rgba(250,246,238,0.95)', backdropFilter: 'blur(12px)', zIndex: 100,
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: C.clay,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.75rem', fontWeight: 700, color: C.sand,
            fontFamily: 'Space Mono, monospace', letterSpacing: '-0.02em',
          }}>OM</div>
          <span style={{ color: C.bark, fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem' }}>OpenMindi</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/articles" style={{ color: '#9A7A64', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Articles</a>
          <a href="/#contact" style={{
            background: C.clay, color: C.sand, padding: '7px 18px',
            borderRadius: 999, fontSize: '0.78rem', fontWeight: 700,
            textDecoration: 'none', fontFamily: 'Space Mono, monospace',
            letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>Hire Us</a>
        </div>
      </nav>

      {/* HERO */}
      <header style={{
        background: C.dusk,
        borderBottom: `4px solid ${C.clay}`,
        padding: 'clamp(48px,8vw,80px) max(24px,5vw) clamp(40px,6vw,60px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="kente-stripe" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, opacity: 0.6 }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <a href="/articles" style={{ color: '#7A5C44', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.04em' }}>ARTICLES</a>
            <span style={{ color: '#3A2518' }}>›</span>
            <span style={{ background: C.clay + '33', color: C.ochre, fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999, letterSpacing: '0.08em' }}>AGENTIC AI</span>
            <span style={{ marginLeft: 'auto' }}>
              <span style={{ background: C.clay, color: C.sand, fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999, letterSpacing: '0.08em' }}>NEW</span>
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 800,
            fontSize: 'clamp(1.9rem, 5vw, 3rem)',
            color: C.sand, lineHeight: 1.15,
            letterSpacing: '-0.02em', marginBottom: 20,
          }}>
            How to Hire Your First<br />
            <span style={{ color: C.ochre, fontStyle: 'italic' }}>AI Employee</span><br />
            for $20/Month
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '1.1rem', color: '#A07858', lineHeight: 1.7, marginBottom: 28,
          }}>
            A step-by-step walkthrough of building your first agentic workflow from scratch. No coding required. Just one repetitive problem, the right tool, and about an hour of your time.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: C.clay,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem', color: C.sand,
              }}>AM</div>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: C.sand }}>Ali Mora</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#7A5C44' }}>OpenMindi Studio · Bloemfontein, SA</p>
              </div>
            </div>
            <span style={{ color: '#3A2518' }}>·</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#7A5C44', letterSpacing: '0.04em' }}>FEB 27, 2026</span>
            <span style={{ color: '#3A2518' }}>·</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#7A5C44', letterSpacing: '0.04em' }}>10 MIN READ</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="article-layout" style={{
        maxWidth: 1080, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 260px',
        gap: 48, padding: 'clamp(40px,6vw,60px) max(24px,5vw)',
        alignItems: 'start',
      }}>

        <article>
          <P>In the previous article, we explained what agentic AI is. Now lets actually build one — a real, working AI agent that handles a repetitive task in your business, starting today.</P>
          <P>We are going to use <strong style={{ color: C.bark }}>Lindy</strong> — the no-code agentic AI platform — because it requires zero coding, connects to the tools you already use, and has a free tier generous enough to get your first agent running without spending anything.</P>
          <P>By the end of this guide you will have a live AI agent managing a real workflow in your business. Total cost: <strong style={{ color: C.clay }}>$0 to start, $20-$49/month</strong> when ready to scale.</P>

          <Callout emoji="⚡" accent={C.ochre}>
            If you have not read Part 1 yet, start with{' '}
            <a href="/articles/what-is-agentic-ai" style={{ color: C.clay, textDecoration: 'underline' }}>What is Agentic AI?</a>
            {' '}— it explains the core concepts this guide builds on.
          </Callout>

          <H2 id="what-is">What We Mean by "AI Employee"</H2>
          <P>An AI employee is not a chatbot that answers questions. It is an agent that holds a specific job in your business — with defined responsibilities, tools it can use, and tasks it completes without you supervising each step.</P>

          <div style={{
            background: C.cream, border: `1px solid ${C.sand}`,
            borderLeft: `4px solid ${C.clay}`,
            borderRadius: 14, padding: '24px 28px', margin: '24px 0',
          }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: C.clay, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>— Think of it like this</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Traditional VA', items: ['Costs R8,000-R15,000/month', 'Works 8 hours/day', 'Needs breaks, sick days', 'Learns slowly'], accent: '#9A7A64' },
                { label: 'AI Employee', items: ['Costs $20-$49/month (~R360-R880)', 'Works 24/7/365', 'Never gets tired or sick', 'Improves as you train it'], accent: C.clay },
              ].map(col => (
                <div key={col.label} style={{ background: col.accent + '12', border: `1px solid ${col.accent}33`, borderRadius: 10, padding: '16px' }}>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.75rem', color: col.accent, marginBottom: 10, letterSpacing: '0.04em' }}>{col.label}</p>
                  {col.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: col.accent, fontSize: '0.7rem', marginTop: 4 }}>•</span>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#5A3E2B', margin: 0, lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <P>Obviously a human VA brings things an AI cannot — creativity, emotional intelligence, complex problem solving. But for the repetitive, rule-based work that eats your time? An AI employee wins on every metric.</P>

          <H2 id="roles">The 4 Best First AI Employees for SMB Owners</H2>
          <P>Do not try to automate everything at once. Pick one role, build one agent, get it running reliably — then expand. Here are the four highest-ROI starting points:</P>

          <AgentCard emoji="📬" role="The Inbox Manager" tool="Lindy + Gmail"
            cost="Free tier" saves="5-8 hrs"
            tasks={[
              'Reads every incoming email and categorises it (urgent, client, spam, newsletter, invoice)',
              'Drafts reply suggestions for common questions based on your FAQ doc',
              'Flags emails that need your personal attention and summarises the rest in a daily digest',
              'Automatically unsubscribes from marketing lists you specify',
            ]}
          />
          <AgentCard emoji="🔍" role="The Lead Researcher" tool="Lindy + CRM"
            cost="$20/mo" saves="8-12 hrs"
            tasks={[
              'Takes a list of company names and researches each one automatically',
              'Pulls website info, LinkedIn data, recent news, and funding status',
              'Writes a one-paragraph brief on each prospect and drops it into your CRM or Notion',
              'Scores leads based on criteria you define (size, industry, location)',
            ]}
          />
          <AgentCard emoji="📱" role="The Content Repurposer" tool="Lindy + Notion"
            cost="$20/mo" saves="6-10 hrs"
            tasks={[
              'Takes your long-form content (article, podcast, video transcript) as input',
              'Generates 5 social media captions adapted for LinkedIn, Twitter, and WhatsApp',
              'Writes a short email newsletter version with a clear CTA',
              'Creates a bullet-point summary for your Notion knowledge base',
            ]}
          />
          <AgentCard emoji="🧾" role="The Follow-Up Agent" tool="Lindy + Gmail/WhatsApp"
            cost="$20/mo" saves="4-6 hrs"
            tasks={[
              'Monitors your outstanding invoices and client proposals',
              'Sends polite, personalised follow-up messages at intervals you define (3 days, 7 days, 14 days)',
              'Tracks responses and marks leads as replied, ignored, or converted',
              'Escalates overdue accounts to you with a summary of all communication history',
            ]}
          />

          <H2 id="step-by-step">Step-by-Step: Build Your Inbox Manager in 60 Minutes</H2>
          <P>We are going to build the Inbox Manager — the easiest first agent and the one with immediate, visible impact. Here is exactly how to do it:</P>

          <div style={{ marginTop: 32 }}>
            <Step number="1" title="Create your free Lindy account" time="5 min">
              <P>Go to <a href={AFFILIATE.lindy} target="_blank" rel="noopener noreferrer" style={{ color: C.clay }}>lindy.ai</a> and sign up with your Google account. The free tier gives you enough to build and run your first agent without entering a credit card.</P>
              <Callout emoji="💡">
                Use the same Google account connected to your primary business Gmail. This makes the integration seamless in the next step.
              </Callout>
            </Step>

            <Step number="2" title="Connect Gmail" time="3 min">
              <P>In your Lindy dashboard, go to <strong style={{ color: C.bark }}>Integrations</strong> and connect your Gmail account. Lindy will ask for permission to read, label, and draft emails on your behalf. Grant all permissions — without these, your agent can only observe, not act.</P>
              <div style={{ background: C.ochre + '10', border: `1px solid ${C.ochre}33`, borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 10 }}>
                <span>⚠️</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#7A5C44', margin: 0, lineHeight: 1.6 }}>
                  Lindy uses OAuth — it never sees or stores your password. Your data stays in Google's infrastructure. If you are concerned about sensitive emails, you can limit access to specific labels only.
                </p>
              </div>
            </Step>

            <Step number="3" title="Create a new Lindy (your agent)" time="5 min">
              <P>Click <strong style={{ color: C.bark }}>+ New Lindy</strong> and choose <strong style={{ color: C.bark }}>Start from scratch</strong>. Give it a name like "Inbox Manager" or "Email Assistant." This is your agent's identity inside the system.</P>
            </Step>

            <Step number="4" title="Write your agent's instructions" time="15 min">
              <P>This is the most important step. Paste the following prompt into the instructions field, then customise the parts in brackets for your specific business:</P>
              <div style={{
                background: C.dusk, border: `1px solid ${C.clay}33`,
                borderRadius: 12, padding: '20px 24px', margin: '16px 0',
              }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: C.clay, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>— Copy this prompt into Lindy</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: C.sand, lineHeight: 1.9, margin: 0, opacity: 0.85, whiteSpace: 'pre-line' }}>{[
                  "You are my Inbox Manager. Your job is to help me process emails efficiently.",
                  "",
                  "When a new email arrives, do the following:",
                  "",
                  "1. CATEGORISE it: URGENT / CLIENT / INVOICE / NEWSLETTER / ADMIN / SPAM",
                  "",
                  "2. DRAFT a reply for CLIENT or URGENT emails. Keep it professional, warm, under 100 words. Sign off as [YOUR NAME] from [YOUR COMPANY].",
                  "",
                  "3. Every day at 8am, send me a DIGEST to [YOUR EMAIL] summarising:",
                  "   - Number of emails received",
                  "   - Any URGENT items needing attention",
                  "   - One-line summary of each CLIENT email",
                  "",
                  "My business is [BRIEF DESCRIPTION].",
                  "My tone is [professional / friendly / formal].",
                  "Never send a reply without my approval — only draft it."
                ].join("\n")}</p>
              </div>
              <Callout emoji="🎯">
                The last line is critical for safety — Never send a reply without my approval. Keep this in until you have tested the agent for at least 2 weeks and trust its output consistently.
              </Callout>
            </Step>

            <Step number="5" title="Set your triggers" time="5 min">
              <P>In Lindy's workflow builder, set two triggers:</P>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '8px 0' }}>
                {[
                  { trigger: 'New email received', action: 'Categorise and draft reply immediately' },
                  { trigger: 'Daily at 8:00am SAST', action: 'Send digest summary to your inbox' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{ background: C.cream, border: `1px solid ${C.sand}`, padding: '10px 14px' }}>
                      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: '#9A7A64', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Trigger</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: C.bark, margin: '4px 0 0' }}>{item.trigger}</p>
                    </div>
                    <div style={{ background: C.clay + '10', border: `1px solid ${C.clay}22`, padding: '10px 14px' }}>
                      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: C.clay, margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Action</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: C.bark, margin: '4px 0 0' }}>{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Step>

            <Step number="6" title="Test with 10 real emails" time="10 min">
              <P>Before activating your agent fully, run it against 10 real emails from your inbox. Check that the categorisation is accurate and the drafted replies sound like you. Tweak your instructions prompt if needed — most people do 2-3 iterations. This is normal. The prompt is your agent's training manual.</P>
            </Step>

            <Step number="7" title="Activate and monitor" time="Ongoing">
              <P>Turn your Lindy on. For the first week, review every draft reply before anything goes out. After 7 days you will have a clear picture of where the agent excels. After 2 weeks of consistent good performance, you can selectively enable auto-send for low-stakes categories.</P>
              <CostBadge usd="$0-$49" zar="R0-R880" />
            </Step>
          </div>

          <H2 id="scaling">What to Do After Week 1</H2>
          <P>Once your Inbox Manager is running reliably, here is how to expand your AI team systematically:</P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '20px 0' }}>
            {[
              { week: 'Week 2', title: 'Add a second agent', desc: 'Build the Follow-Up Agent for invoices. Connect it to the same Gmail. Your two agents now work as a team — the Inbox Manager categorises, the Follow-Up Agent handles collections.' },
              { week: 'Week 3', title: 'Connect your CRM', desc: 'Integrate Lindy with Notion or HubSpot. When the Inbox Manager identifies a CLIENT email, it can automatically create or update a contact record without you touching anything.' },
              { week: 'Week 4', title: 'Add GoHighLevel', desc: 'GoHighLevel is the most powerful CRM + automation platform for agencies and SMBs. Your Lindy agents can feed data directly into GHL pipelines, automating your entire sales follow-up sequence.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16,
                background: C.cream, border: `1px solid ${C.sand}`,
                borderLeft: `4px solid ${C.ochre}`,
                borderRadius: 12, padding: '18px 20px',
              }}>
                <span style={{ background: C.ochre + '22', color: C.ochre, fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, padding: '4px 10px', borderRadius: 999, flexShrink: 0, height: 'fit-content', marginTop: 2 }}>{item.week}</span>
                <div>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.95rem', color: C.bark, marginBottom: 6 }}>{item.title}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#7A5C44', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* GHL SPOTLIGHT */}
          <div style={{ background: C.dusk, borderRadius: 16, padding: '28px', margin: '36px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="kente-stripe" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, opacity: 0.5 }} />
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: C.ochre, letterSpacing: '0.1em', marginBottom: 10, textTransform: 'uppercase' }}>— Recommended Tool</p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.2rem', color: C.sand, marginBottom: 10, fontStyle: 'italic' }}>GoHighLevel — The AI Command Centre</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#A07858', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 20 }}>
              Once your Lindy agents are running, GoHighLevel is the natural next step. It combines CRM, email marketing, SMS automation, pipeline management, and AI workflows in one platform. For SMB owners and agencies, it replaces 5-7 separate tools. Plans start at $97/month — and it pays for itself within weeks for most businesses.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={AFFILIATE.ghl} target="_blank" rel="noopener noreferrer" style={{
                background: C.clay, color: C.sand, fontFamily: 'Space Mono, monospace', fontWeight: 700,
                fontSize: '0.8rem', padding: '11px 22px', borderRadius: 999,
                textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>Try GoHighLevel Free →</a>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#5A3E2B' }}>14-day free trial · 40% recurring commission</span>
            </div>
          </div>

          <H2 id="honest">The Honest Truth About AI Employees</H2>
          <P>Building your first agent is exciting — but here is what to expect in the first month:</P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '20px 0' }}>
            {[
              'Week 1 will feel rough. Your agent will misclassify some emails, draft replies that are slightly off-tone, and need constant tweaking. This is normal. Stick with it.',
              'Week 2 gets better. As you refine the prompt and correct mistakes, the agent learns your patterns. By Day 14, most people are genuinely impressed.',
              'Month 2 is where it compounds. You stop thinking about email management. It just happens. That mental bandwidth goes somewhere better — like client work.',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 16px', background: C.clay + '0A', border: `1px solid ${C.clay}22`, borderRadius: 10 }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>✅</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#5A3E2B', lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <H2 id="tools">Tools Referenced in This Article</H2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <AffCard emoji="🤖" name="GoHighLevel" desc="All-in-one CRM + AI automation. The natural upgrade once your agents are running. 40% recurring commission — our top earner." tag="40% RECURRING" href={AFFILIATE.ghl} tagColor={C.clay} />
            <AffCard emoji="🧑‍💼" name="Lindy" desc="The no-code agentic AI platform used in this guide. Free tier available. Build your first agent in under an hour." tag="FREE TIER" href={AFFILIATE.lindy} tagColor={C.ochre} />
            <AffCard emoji="📬" name="Instantly.ai" desc="AI-powered cold email outreach platform. Perfect for the Lead Researcher agent workflow — automates prospecting at scale." tag="30% RECURRING" href={AFFILIATE.instantly} tagColor="#7A5C44" />
          </div>

          <H2 id="faq">Frequently Asked Questions</H2>
          <div>
            {[
              { q: 'How long does it take to set up the first agent?', a: 'Most people get their Inbox Manager running in 45-90 minutes on their first attempt. The setup itself is quick — the time goes into writing good instructions and testing against real emails.' },
              { q: 'Will the agent ever send emails without my permission?', a: 'Not unless you explicitly enable auto-send. By default, Lindy only drafts replies — you approve and send each one. We strongly recommend keeping it this way for at least the first two weeks.' },
              { q: 'What if my business email is not Gmail?', a: 'Lindy also integrates with Outlook/Microsoft 365. The setup process is identical — just connect your Microsoft account instead of Google in Step 2.' },
              { q: 'Can I build these agents in GoHighLevel directly?', a: 'Yes — GoHighLevel has its own AI workflow builder and is more powerful for sales and CRM automation specifically. For general task automation across multiple apps, Lindy is more flexible as a starting point.' },
              { q: 'Is this suitable for a one-person business in South Africa?', a: 'Absolutely — this guide was written with exactly that in mind. The $20/month cost translates to roughly R360/month. If your agent saves you even 3 hours of admin per month, you have already paid for it many times over.' },
            ].map(item => (
              <details key={item.q} className="faq-item">
                <summary>{item.q} <span style={{ color: C.clay, fontSize: '1.1rem' }}>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          {/* NEXT ARTICLE CTA */}
          <div style={{ background: C.dusk, borderRadius: 16, padding: '36px 32px', marginTop: 48, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="kente-stripe" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, opacity: 0.5 }} />
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.4rem', color: C.sand, marginBottom: 10, fontStyle: 'italic' }}>
              Want to run AI privately on your own machine?
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#A07858', fontSize: '0.95rem', marginBottom: 28 }}>
              Next up: The exact R15,000 PC build for running private AI in South Africa — no API costs, no data leaving your machine.
            </p>
            <a href="/articles/r15k-private-ai-build-sa" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: C.clay, color: C.sand, fontFamily: 'Space Mono, monospace', fontWeight: 700,
              fontSize: '0.8rem', padding: '12px 24px', borderRadius: 999, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>Read: The R15k Private AI Build →</a>
          </div>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#9A7A64', lineHeight: 1.6, borderTop: `1px solid ${C.sand}`, paddingTop: 24, marginTop: 40 }}>
            <strong style={{ color: '#7A5C44' }}>Affiliate Disclosure:</strong> This article contains affiliate links. If you sign up for a tool through our links, OpenMindi may earn a commission at no extra cost to you. We only recommend tools we have tested and believe in.
          </p>

        </article>

        {/* SIDEBAR */}
        <aside className="toc-sidebar" style={{ position: 'sticky', top: 88 }}>
          <div style={{ background: C.cream, border: `1px solid ${C.sand}`, borderTop: `3px solid ${C.clay}`, borderRadius: 14, padding: '20px' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.68rem', color: C.clay, letterSpacing: '0.1em', marginBottom: 14, textTransform: 'uppercase' }}>— In This Article</p>
            {[
              ['#what-is', 'AI Employee vs VA'],
              ['#roles', '4 Best First Agents'],
              ['#step-by-step', 'Step-by-Step Build'],
              ['#scaling', 'Scaling Week by Week'],
              ['#honest', 'Honest Expectations'],
              ['#tools', 'Tools Used'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="toc-link">{label}</a>
            ))}
          </div>

          <div style={{ background: C.cream, border: `1px solid ${C.sand}`, borderTop: `3px solid ${C.ochre}`, borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.68rem', color: C.ochre, letterSpacing: '0.1em', marginBottom: 14, textTransform: 'uppercase' }}>— Cost Summary</p>
            {[
              { label: 'Lindy (free tier)', cost: '$0' },
              { label: 'Lindy (paid)', cost: '$49/mo' },
              { label: 'GoHighLevel', cost: '$97/mo' },
              { label: 'Your time', cost: '~1 hr setup' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `1px solid ${C.sand}` }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#7A5C44' }}>{item.label}</span>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.78rem', fontWeight: 700, color: C.clay }}>{item.cost}</span>
              </div>
            ))}
          </div>

          <div style={{ background: C.cream, border: `1px solid ${C.sand}`, borderTop: `3px solid ${C.clay}`, borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.68rem', color: C.clay, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>— Top Pick</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.95rem', color: C.bark, marginBottom: 8 }}>GoHighLevel</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#7A5C44', lineHeight: 1.5, marginBottom: 14 }}>CRM + AI automation in one. The upgrade path after Lindy — and our highest-earning affiliate program.</p>
            <a href={AFFILIATE.ghl} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center', background: C.clay, color: C.sand,
              fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.75rem',
              padding: '10px', borderRadius: 999, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>Try Free → 40% Recurring</a>
          </div>

          <div style={{ background: C.dusk, borderRadius: 14, padding: '20px', marginTop: 16, textAlign: 'center' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', color: C.ochre, letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase' }}>— Free Tool</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem', color: C.sand, marginBottom: 8 }}>🔥 Score Your Website</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#7A5C44', lineHeight: 1.5, marginBottom: 12 }}>Find out in 60 seconds why your site is not converting.</p>
            <a href="https://mywork.namka.cloud/demos/website-roaster" target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center', background: C.clay, color: C.sand,
              fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem',
              padding: '9px', borderRadius: 999, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>Get Free Audit →</a>
          </div>
        </aside>

      </div>

      {/* FOOTER */}
      <footer style={{
        background: C.dusk, borderTop: `3px solid ${C.clay}`,
        padding: '24px max(24px,5vw)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ color: '#5A3E2B', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.04em' }}>© 2026 OPENMINDI · BLOEMFONTEIN, SA</span>
        <span style={{ color: '#3A2518', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem' }}>This site contains affiliate links.</span>
      </footer>

    </main>
  );
}
