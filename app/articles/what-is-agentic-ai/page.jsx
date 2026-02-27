/* eslint-disable react/no-unescaped-entities */
'use client';

// ── AFFILIATE LINKS ─────────────────────────────────────────────────────────
const AFFILIATE = {
  ghl: 'https://www.gohighlevel.com/?fp_ref=dvcb7',
  notion: 'https://affiliate.notion.so/YOUR_LINK',
  murf: 'https://murf.ai/?via=YOUR_LINK',
  lindy: 'https://www.lindy.ai/',
  crewai: 'https://crewai.com/',
};

// ── OPENMINDI DESIGN TOKENS ──────────────────────────────────────────────────
const C = {
  clay: '#C1622F',
  ochre: '#D4903A',
  dusk: '#1A0F0A',
  bark: '#2E1A0E',
  sand: '#F5EDD8',
  cream: '#FAF6EE',
  clayMuted: '#C1622F22',
  claylLight: '#C1622F15',
};

// ── REUSABLE COMPONENTS ──────────────────────────────────────────────────────

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

function Callout({ emoji, children, accent = C.clay }) {
  return (
    <div style={{
      background: accent + '0D',
      border: `1px solid ${accent}44`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: 12, padding: '16px 20px',
      display: 'flex', gap: 12, margin: '28px 0',
    }}>
      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{emoji}</span>
      <p style={{ color: C.bark, fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{children}</p>
    </div>
  );
}

function H2({ children, id }) {
  return (
    <h2 id={id} style={{
      fontFamily: 'Playfair Display, serif', fontWeight: 700,
      fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)',
      color: C.bark, letterSpacing: '-0.01em',
      lineHeight: 1.25, marginTop: 52, marginBottom: 16,
      paddingBottom: 12,
      borderBottom: `1px solid ${C.sand}`,
    }}>{children}</h2>
  );
}

function H3({ children }) {
  return (
    <h3 style={{
      fontFamily: 'Playfair Display, serif', fontWeight: 700,
      fontSize: '1.1rem', color: C.bark, fontStyle: 'italic',
      marginTop: 32, marginBottom: 10,
    }}>{children}</h3>
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

function CompareRow({ label, reactive, agentic }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, marginBottom: 1 }}>
      <div style={{ background: C.cream, padding: '12px 16px' }}>
        <span style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.78rem', color: '#7A5C44' }}>{label}</span>
      </div>
      <div style={{ background: C.sand, padding: '12px 16px' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#9A7A64' }}>{reactive}</span>
      </div>
      <div style={{ background: C.clay + '12', padding: '12px 16px' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: C.clay, fontWeight: 500 }}>{agentic}</span>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ArticlePage() {
  return (
    <main style={{ minHeight: '100vh', background: C.cream, fontFamily: "DM Sans, sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #C1622F33; }
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          color: ${C.bark};
          border-bottom: 1px solid ${C.sand};
          user-select: none;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] summary { color: ${C.clay}; }
        .faq-item p {
          padding: 16px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #7A5C44;
          line-height: 1.7;
          border-bottom: 1px solid ${C.sand};
        }
        .toc-link {
          color: #9A7A64;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
          padding: 5px 0;
          letter-spacing: 0.02em;
        }
        .toc-link:hover { color: ${C.clay}; }
        @media (max-width: 900px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .toc-sidebar { display: none !important; }
        }
        .kente-stripe {
          background-image: repeating-linear-gradient(
            -45deg,
            ${C.clay}18 0px,
            ${C.clay}18 2px,
            transparent 2px,
            transparent 10px,
            ${C.ochre}18 10px,
            ${C.ochre}18 12px,
            transparent 12px,
            transparent 20px
          );
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        borderBottom: `1px solid ${C.sand}`,
        padding: '0 max(24px,5vw)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0,
        background: 'rgba(250,246,238,0.95)', backdropFilter: 'blur(12px)', zIndex: 100,
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: C.clay,
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

      {/* ── HERO ── */}
      <header style={{
        background: C.dusk,
        borderBottom: `4px solid ${C.clay}`,
        padding: 'clamp(48px,8vw,80px) max(24px,5vw) clamp(40px,6vw,60px)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Kente accent strip */}
        <div className="kente-stripe" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, opacity: 0.6 }} />

        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb + tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <a href="/articles" style={{ color: '#7A5C44', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.04em' }}>ARTICLES</a>
            <span style={{ color: '#3A2518' }}>›</span>
            <span style={{
              background: C.clay + '33', color: C.ochre,
              fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700,
              padding: '3px 10px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>Agentic AI</span>
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
            What is Agentic AI?<br />
            <span style={{ color: C.ochre, fontStyle: 'italic' }}>The Plain-English Guide</span><br />
            for SMB Owners
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '1.1rem', color: '#A07858', lineHeight: 1.7, marginBottom: 28,
          }}>
            You've heard the buzz. "AI agents." "Autonomous workflows." "AI employees." But what does any of it actually mean for your small business — and can it save you time without a computer science degree?
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: C.clay,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem', color: C.sand,
              }}>AM</div>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: C.sand }}>Ali Mora</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#7A5C44' }}>OpenMindi Studio · Bloemfontein, SA</p>
              </div>
            </div>
            <div style={{ color: '#3A2518' }}>·</div>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#7A5C44', letterSpacing: '0.04em' }}>FEB 26, 2026</span>
            <div style={{ color: '#3A2518' }}>·</div>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#7A5C44', letterSpacing: '0.04em' }}>8 MIN READ</span>
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="article-layout" style={{
        maxWidth: 1080, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 260px',
        gap: 48, padding: 'clamp(40px,6vw,60px) max(24px,5vw)',
        alignItems: 'start',
      }}>

        {/* ── ARTICLE CONTENT ── */}
        <article>

          <P>Most small business owners have tried ChatGPT, Gemini, or Claude by now. You type a question, it gives you an answer. Maybe you use it to write emails or summarise documents. That's useful — but it's still <em>you</em> doing the work.</P>
          <P>That's called <strong style={{ color: C.bark }}>reactive AI</strong> — it waits for you to ask something, answers, and stops. <strong style={{ color: C.clay }}>Agentic AI is different.</strong> It doesn't just answer. It <em>acts.</em></P>

          <H2 id="what-is">So What Exactly Is Agentic AI?</H2>
          <P>Agentic AI refers to AI systems that can <strong style={{ color: C.bark }}>plan, make decisions, use tools, and complete multi-step tasks on their own</strong> — with minimal human input after the initial instruction.</P>

          {/* Difference in practice box */}
          <div style={{
            background: C.cream, border: `1px solid ${C.sand}`,
            borderLeft: `4px solid ${C.clay}`,
            borderRadius: 14, padding: '24px 28px', margin: '28px 0',
          }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: C.clay, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>— The Difference in Practice</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ background: C.sand, color: '#9A7A64', fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', borderRadius: 4, flexShrink: 0, marginTop: 4, textTransform: 'uppercase' }}>Reactive</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#7A5C44', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>"Write me a cold email for this prospect."</p>
              </div>
              <div style={{ borderTop: `1px solid ${C.sand}` }} />
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ background: C.clay + '22', color: C.clay, fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', borderRadius: 4, flexShrink: 0, marginTop: 4, textTransform: 'uppercase' }}>Agentic</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: C.bark, fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>"Here's my prospect list. Research each company, personalise an email for each one, send them on Tuesday morning, track who opened them, and follow up with non-responders on Friday."</p>
              </div>
            </div>
          </div>

          <P>You gave one instruction. The agent handled everything else. This is why people are calling it the <strong style={{ color: C.bark }}>"AI employee" moment</strong> — for the first time, AI can hold a job, not just answer questions.</P>

          <H2 id="how-works">How Does It Actually Work?</H2>
          <P>Agentic AI systems combine three things working together:</P>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, margin: '24px 0' }}>
            {[
              { n: '01', title: 'The Brain', desc: 'An LLM like Claude, GPT-4, or Gemini handles reasoning — deciding what to do next and when to ask for help.' },
              { n: '02', title: 'The Tools', desc: 'The agent can browse the web, send emails, update spreadsheets, post to social media, or call APIs.' },
              { n: '03', title: 'The Loop', desc: "It remembers what it's done, evaluates progress, and adjusts. This loop is what makes it a true agent." },
            ].map(item => (
              <div key={item.n} style={{
                background: C.cream, border: `1px solid ${C.sand}`,
                borderTop: `3px solid ${C.clay}`,
                borderRadius: 12, padding: '20px 20px',
              }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.6rem', color: C.sand + 'cc', marginBottom: 8, lineHeight: 1 }}>{item.n}</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.95rem', color: C.clay, marginBottom: 8, fontStyle: 'italic' }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#7A5C44', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2 id="examples">Real-World Examples for SMB Owners</H2>

          {[
            { icon: '📬', title: 'Customer Support Agent', desc: 'Instead of you (or a VA) answering the same 20 questions every day, an AI agent monitors your inbox, reads incoming emails, pulls answers from your FAQ document, and replies — escalating only the genuinely complex ones to you.' },
            { icon: '🔍', title: 'Lead Research Agent', desc: 'You give it a list of 50 company names. It browses each website, LinkedIn, and recent news, writes a one-paragraph summary of each, and drops everything into your CRM. What used to take a full day now takes 15 minutes while you sleep.' },
            { icon: '📱', title: 'Content Repurposing Agent', desc: 'You record one podcast episode. The agent transcribes it, writes a blog post, creates 5 social media captions, generates an email newsletter summary, and schedules everything. One piece of content becomes seven.' },
            { icon: '🧾', title: 'Invoicing & Collections Agent', desc: 'For South African freelancers dealing with late payments, an agent can monitor outstanding invoices, send polite follow-up reminders, flag overdue accounts, and generate VAT-compliant invoice documents — all without you lifting a finger.' },
          ].map(item => (
            <div key={item.title} style={{
              display: 'flex', gap: 16, marginBottom: 20,
              background: C.cream, border: `1px solid ${C.sand}`,
              borderLeft: `4px solid ${C.ochre}`,
              borderRadius: 12, padding: '18px 20px',
            }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.98rem', color: C.bark, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#7A5C44', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <H2 id="tools">The Two Tools Leading the Charge</H2>
          <P>If you want to start experimenting with agentic AI today, two platforms are worth knowing about:</P>

          <H3>CrewAI</H3>
          <P>CrewAI is an open-source framework that lets you build teams of AI agents — each with a specific role — that collaborate to complete complex tasks. Think of it like hiring a crew: one agent does research, another writes, a third edits and publishes. Slightly more technical (Python-based), but incredibly powerful for multi-step workflows.</P>

          <H3>Lindy</H3>
          <P>Lindy is the more accessible option — a no-code platform where you build AI agents through a visual interface. You can create a "Lindy" that monitors your email, books meetings, handles customer queries, or manages your schedule. Connects to Gmail, Slack, Notion, HubSpot, and dozens of other tools out of the box.</P>

          <Callout emoji="💡">
            Pricing context for South African owners: Lindy's entry-level plan starts at around $49/month (approximately R900 at current rates). If that agent saves you just 5 hours of admin per month at even R200/hour, you're already ahead.
          </Callout>

          {/* ── COMPARISON TABLE ── */}
          <H2 id="compare">Reactive AI vs Agentic AI</H2>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.sand}`, margin: '24px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: C.sand }}>
              <div style={{ background: C.cream, padding: '12px 16px' }}>
                <span style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem', color: '#9A7A64', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dimension</span>
              </div>
              <div style={{ background: C.sand, padding: '12px 16px' }}>
                <span style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem', color: '#9A7A64', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reactive AI</span>
              </div>
              <div style={{ background: C.clay + '22', padding: '12px 16px' }}>
                <span style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem', color: C.clay, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Agentic AI</span>
              </div>
            </div>
            <div style={{ background: C.sand, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <CompareRow label="Interaction" reactive="You ask, it answers" agentic="You set a goal, it acts" />
              <CompareRow label="Steps" reactive="One prompt, one output" agentic="Multi-step plans" />
              <CompareRow label="Tools" reactive="Text only" agentic="Email, browser, CRM, APIs" />
              <CompareRow label="Memory" reactive="Forgets each session" agentic="Tracks progress over time" />
              <CompareRow label="Supervision" reactive="Constant" agentic="Minimal once set up" />
            </div>
          </div>

          <H2 id="hype">Is This Just Hype?</H2>
          <P>Fair question. The AI space is full of overpromising. Here's the answer: <strong style={{ color: C.bark }}>Agentic AI is real and working today, but it's not magic yet.</strong></P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '20px 0' }}>
            {[
              'Agents make mistakes. They can misread context or take a wrong turn. Human oversight is still important for customer-facing or financial tasks.',
              'Setup takes time. A reliable agent workflow takes more effort than a single ChatGPT prompt — expect a few hours to a day or two.',
              'Costs can creep. If your agent is running hundreds of tasks daily, monitor your API usage carefully in the first month.',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: C.ochre + '12', border: `1px solid ${C.ochre}33`, borderRadius: 10 }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>⚠️</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#7A5C44', lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <P>That said, for repetitive, rule-based tasks? The ROI is already compelling. Early adopters in the SMB space are reporting <strong style={{ color: C.bark }}>10–20 hours saved per week</strong> on administrative work alone.</P>

          <H2 id="start">Where to Start</H2>
          <P>Don't try to automate your entire business in week one. Start with one painful, repetitive task and build an agent for that.</P>

          <Callout emoji="🚀" accent={C.ochre}>
            Suggested first step: Sign up for a free Lindy trial, connect it to your Gmail, and build a simple agent that auto-labels and summarises incoming emails by category. You'll have it running in under an hour.
          </Callout>

          {/* ── RECOMMENDED TOOLS ── */}
          <H2>Recommended Tools to Try</H2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <AffCard emoji="🤖" name="GoHighLevel" desc="All-in-one CRM with powerful AI automation. 40% recurring commission for affiliates. Excellent for agencies and SMBs." tag="40% RECURRING" href={AFFILIATE.ghl} tagColor={C.clay} />
            <AffCard emoji="🧑‍💼" name="Lindy" desc="No-code agentic AI platform. Build your first agent in under an hour. Free trial available." tag="FREE TRIAL" href={AFFILIATE.lindy} tagColor={C.ochre} />
            <AffCard emoji="⚙️" name="CrewAI" desc="Open-source multi-agent framework for power users. Best for technical SMB owners building custom workflows." tag="OPEN SOURCE" href={AFFILIATE.crewai} tagColor="#7A5C44" />
          </div>

          {/* ── FAQ ── */}
          <H2 id="faq">Frequently Asked Questions</H2>
          <div>
            {[
              { q: 'Do I need to know how to code to use agentic AI?', a: 'Not necessarily. Platforms like Lindy are fully no-code. CrewAI requires basic Python knowledge, but many tutorials make it accessible. Start with no-code and grow from there.' },
              { q: 'How is this different from automation tools like Zapier?', a: "Zapier follows fixed rules: IF this happens, THEN do that. Agentic AI can reason — it handles exceptions, makes judgement calls, and adapts to situations Zapier's rigid rules would break on. Think of Zapier as a conveyor belt and an AI agent as a junior employee." },
              { q: 'Is my data safe with these tools?', a: 'This varies by platform. For sensitive business data, look for tools with SOC 2 compliance and clear data retention policies. For privacy-first operations, local LLM hosting — running AI on your own hardware — is an emerging alternative we cover in depth on this site.' },
              { q: "What's a realistic budget for a small business?", a: "You can start experimenting for as little as $0–$20/month using free tiers. A meaningful automation setup typically runs $50–$150/month (R900–R2,700). The question is always: what's your time worth per hour?" },
              { q: 'Will this replace my staff?', a: 'For most SMBs, the realistic answer is no — not yet. What it will do is eliminate the repetitive, low-value parts of jobs, freeing your team to focus on work that actually requires human judgement, creativity, and relationships.' },
            ].map(item => (
              <details key={item.q} className="faq-item">
                <summary>{item.q} <span style={{ color: C.clay, fontSize: '1.1rem' }}>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{
            background: C.dusk,
            borderRadius: 16, padding: '36px 32px',
            marginTop: 48, textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div className="kente-stripe" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, opacity: 0.5 }} />
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.4rem', color: C.sand, marginBottom: 10, fontStyle: 'italic' }}>
              Ready to hire your first AI employee?
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#7A5C44', fontSize: '0.95rem', marginBottom: 28 }}>
              Read our next guide: a step-by-step walkthrough of building your first agentic workflow from scratch.
            </p>
            <a href="/articles/hire-first-ai-employee" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: C.clay, color: C.sand,
              fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.8rem',
              padding: '12px 24px', borderRadius: 999, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>
              Read: Hire Your First AI Employee →
            </a>
          </div>

          {/* ── DISCLOSURE ── */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem',
            color: '#9A7A64', lineHeight: 1.6,
            borderTop: `1px solid ${C.sand}`, paddingTop: 24, marginTop: 40,
          }}>
            <strong style={{ color: '#7A5C44' }}>Affiliate Disclosure:</strong> This article contains affiliate links. If you sign up for a tool through our links, OpenMindi may earn a commission at no extra cost to you. We only recommend tools we've tested and believe in.
          </p>

        </article>

        {/* ── SIDEBAR ── */}
        <aside className="toc-sidebar" style={{ position: 'sticky', top: 88 }}>
          <div style={{ background: C.cream, border: `1px solid ${C.sand}`, borderTop: `3px solid ${C.clay}`, borderRadius: 14, padding: '20px' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.68rem', color: C.clay, letterSpacing: '0.1em', marginBottom: 14, textTransform: 'uppercase' }}>— In This Article</p>
            {[
              ['#what-is', 'What Is Agentic AI?'],
              ['#how-works', 'How Does It Work?'],
              ['#examples', 'Real-World Examples'],
              ['#tools', 'CrewAI vs Lindy'],
              ['#compare', 'Comparison Table'],
              ['#hype', 'Is This Just Hype?'],
              ['#start', 'Where to Start'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="toc-link">{label}</a>
            ))}
          </div>

          <div style={{ background: C.cream, border: `1px solid ${C.sand}`, borderTop: `3px solid ${C.ochre}`, borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.68rem', color: C.ochre, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>— Top Pick</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.95rem', color: C.bark, marginBottom: 8 }}>GoHighLevel</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#7A5C44', lineHeight: 1.5, marginBottom: 14 }}>AI-powered CRM & automation. 40% recurring commission — our highest-earning recommendation.</p>
            <a href={AFFILIATE.ghl} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center',
              background: C.clay, color: C.sand,
              fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.75rem',
              padding: '10px', borderRadius: 999, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>Try Free → Earn 40%</a>
          </div>

          {/* Roaster CTA */}
          <div style={{ background: C.dusk, borderRadius: 14, padding: '20px', marginTop: 16, textAlign: 'center' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', color: C.ochre, letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase' }}>— Free Tool</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem', color: C.sand, marginBottom: 8 }}>🔥 Score Your Website</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#7A5C44', lineHeight: 1.5, marginBottom: 12 }}>Find out in 60 seconds why your site isn't converting.</p>
            <a href="https://mywork.namka.cloud/demos/website-roaster" target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center',
              background: C.clay, color: C.sand,
              fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: '0.72rem',
              padding: '9px', borderRadius: 999, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>Get Free Audit →</a>
          </div>
        </aside>

      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        background: C.dusk,
        borderTop: `3px solid ${C.clay}`,
        padding: '24px max(24px,5vw)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ color: '#5A3E2B', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.04em' }}>© 2026 OPENMINDI · BLOEMFONTEIN, SA</span>
        <span style={{ color: '#3A2518', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem' }}>This site contains affiliate links.</span>
      </footer>

    </main>
  );
}
