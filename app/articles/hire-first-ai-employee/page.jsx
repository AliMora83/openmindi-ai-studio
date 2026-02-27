'use client';

// ── AFFILIATE LINKS ────────────────────────────────────────────────────────
const AFFILIATE = {
  ghl:      'https://www.gohighlevel.com/?fp_ref=dvcb7',
  notion:   'https://affiliate.notion.so/YOUR_LINK',
  murf:     'https://murf.ai/?via=YOUR_LINK',
  lindy:    'https://www.lindy.ai/',
  crewai:   'https://crewai.com/',
  instantly: 'https://instantly.ai/',
};

// ── REUSABLE COMPONENTS ────────────────────────────────────────────────────
function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: 'Syne, sans-serif', fontWeight: 800,
      fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
      color: '#F8FAFC', letterSpacing: '-0.02em',
      lineHeight: 1.25, marginTop: 52, marginBottom: 16,
      paddingBottom: 12, borderBottom: '1px solid #1F2937',
    }}>{children}</h2>
  );
}

function H3({ children, color = '#E2E8F0' }) {
  return (
    <h3 style={{
      fontFamily: 'Syne, sans-serif', fontWeight: 700,
      fontSize: '1.1rem', color,
      marginTop: 32, marginBottom: 10,
    }}>{children}</h3>
  );
}

function P({ children }) {
  return (
    <p style={{
      fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
      fontSize: '1.05rem', color: '#94A3B8',
      lineHeight: 1.8, marginBottom: 20,
    }}>{children}</p>
  );
}

function Callout({ emoji, children, color = '#1E3A5F', textColor = '#93C5FD' }) {
  return (
    <div style={{
      background: color + '33', border: `1px solid ${color}`,
      borderRadius: 12, padding: '16px 20px',
      display: 'flex', gap: 12, margin: '28px 0',
    }}>
      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{emoji}</span>
      <p style={{ color: textColor, fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{children}</p>
    </div>
  );
}

function AffCard({ emoji, name, desc, tag, href, tagColor = '#10B981' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'flex', gap: 14, alignItems: 'flex-start',
      background: '#111827', border: '1px solid #1F2937',
      borderRadius: 12, padding: '16px 18px',
      textDecoration: 'none', transition: 'all 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1F2937'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{emoji}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#F1F5F9', fontSize: '0.95rem' }}>{name}</span>
          <span style={{ background: tagColor + '22', color: tagColor, fontFamily: 'Syne, sans-serif', fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.06em' }}>{tag}</span>
        </div>
        <p style={{ color: '#6B7280', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>{desc}</p>
      </div>
      <span style={{ color: '#60A5FA', fontSize: '1rem', alignSelf: 'center' }}>→</span>
    </a>
  );
}

// ── STEP COMPONENT ─────────────────────────────────────────────────────────
function Step({ number, title, time, children, accent = '#60A5FA' }) {
  return (
    <div style={{
      display: 'flex', gap: 20, marginBottom: 36,
      paddingBottom: 36, borderBottom: '1px solid #1F2937',
    }}>
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: accent + '22', border: `2px solid ${accent}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: '1rem', color: accent,
        }}>{number}</div>
        <div style={{ width: 1, flex: 1, background: '#1F2937', minHeight: 20 }}/>
      </div>
      <div style={{ flex: 1, paddingTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F1F5F9', margin: 0 }}>{title}</h3>
          {time && (
            <span style={{ background: '#1F2937', color: '#6B7280', fontFamily: 'Syne, sans-serif', fontSize: '0.68rem', fontWeight: 600, padding: '2px 8px', borderRadius: 4 }}>⏱ {time}</span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

// ── COST PILL ──────────────────────────────────────────────────────────────
function CostBadge({ usd, zar }) {
  return (
    <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', margin: '16px 0' }}>
      <span style={{ background: '#10B98122', color: '#10B981', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 700, padding: '4px 12px', borderRadius: 6 }}>{usd}/month</span>
      <span style={{ color: '#4B5563', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem' }}>≈</span>
      <span style={{ background: '#1F2937', color: '#6B7280', fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 600, padding: '4px 12px', borderRadius: 6 }}>{zar} ZAR</span>
    </div>
  );
}

// ── AGENT CARD ─────────────────────────────────────────────────────────────
function AgentCard({ emoji, role, tool, cost, saves, tasks }) {
  return (
    <div style={{
      background: '#111827', border: '1px solid #1F2937',
      borderRadius: 14, padding: '22px 22px', marginBottom: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: '1.6rem' }}>{emoji}</span>
          <div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F1F5F9', margin: 0 }}>{role}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#4B5563', margin: 0 }}>Powered by {tool}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ background: '#10B98122', color: '#10B981', fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: 6 }}>{cost}</span>
          <span style={{ background: '#60A5FA22', color: '#60A5FA', fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: 6 }}>Saves {saves}/wk</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {tasks.map((task, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ color: '#10B981', fontSize: '0.7rem', marginTop: 5, flexShrink: 0 }}>✦</span>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.5, margin: 0 }}>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function Article2Page() {
  return (
    <main style={{ minHeight: '100vh', background: '#0A0F1E' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #60A5FA33; }
        .faq-item summary {
          list-style: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 0;
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.95rem; color: #E2E8F0;
          border-bottom: 1px solid #1F2937; user-select: none;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] summary { color: #60A5FA; }
        .faq-item p { padding: 16px 0; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; color: #6B7280; line-height: 1.7; border-bottom: 1px solid #1F2937; }
        .toc-link { color: #4B5563; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; text-decoration: none; transition: color 0.2s; display: block; padding: 4px 0; }
        .toc-link:hover { color: #60A5FA; }
        @media (max-width: 900px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .toc-sidebar { display: none !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        borderBottom: '1px solid #1F2937', padding: '0 max(24px,5vw)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0,
        background: 'rgba(10,15,30,0.95)', backdropFilter: 'blur(12px)', zIndex: 100,
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 800, color: '#0A0F1E', fontFamily: 'Syne, sans-serif',
          }}>OM</div>
          <span style={{ color: '#F8FAFC', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem' }}>OpenMindi</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/blog" style={{ color: '#9CA3AF', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>← Blog</a>
          <a href="/#contact" style={{
            background: '#60A5FA', color: '#0A0F1E', padding: '7px 16px',
            borderRadius: 7, fontSize: '0.82rem', fontWeight: 700,
            textDecoration: 'none', fontFamily: 'Syne, sans-serif',
          }}>Hire Us</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #0A0F1E 100%)',
        borderBottom: '1px solid #1F2937',
        padding: 'clamp(48px,8vw,80px) max(24px,5vw) clamp(40px,6vw,60px)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <a href="/blog" style={{ color: '#4B5563', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', textDecoration: 'none' }}>Blog</a>
            <span style={{ color: '#1F2937' }}>›</span>
            <span style={{ background: '#EFF6FF22', color: '#60A5FA', fontFamily: 'Syne, sans-serif', fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>Agentic AI</span>
            <span style={{ marginLeft: 'auto' }}>
              <span style={{ background: '#10B98122', color: '#10B981', fontFamily: 'Syne, sans-serif', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.06em' }}>NEW</span>
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.9rem, 5vw, 3rem)',
            color: '#F8FAFC', lineHeight: 1.15,
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            How to Hire Your First<br/>
            <span style={{ color: '#10B981' }}>AI Employee</span><br/>
            for $20/Month
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 28,
          }}>
            A step-by-step walkthrough of building your first agentic workflow from scratch. No coding required. Just one repetitive problem, the right tool, and about an hour of your time.
          </p>

          {/* META ROW */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.75rem', color: '#0A0F1E',
              }}>AM</div>
              <div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#E2E8F0' }}>Ali Mora</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#4B5563' }}>OpenMindi Studio · Bloemfontein, SA</p>
              </div>
            </div>
            <span style={{ color: '#1F2937' }}>·</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#4B5563' }}>Feb 27, 2026</span>
            <span style={{ color: '#1F2937' }}>·</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#4B5563' }}>10 min read</span>
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

        <article>

          {/* ── INTRO ── */}
          <P>In the previous article, we explained what agentic AI is. Now let's actually build one — a real, working AI agent that handles a repetitive task in your business, starting today.</P>
          <P>We're going to use <strong style={{ color: '#E2E8F0' }}>Lindy</strong> — the no-code agentic AI platform — because it requires zero coding, connects to the tools you already use, and has a free tier generous enough to get your first agent running without spending anything.</P>
          <P>By the end of this guide you'll have a live AI agent managing a real workflow in your business. Total cost: <strong style={{ color: '#10B981' }}>$0 to start, $20–$49/month</strong> when you're ready to scale it up.</P>

          <Callout emoji="⚡" color="#064E3B" textColor="#6EE7B7">
            If you haven't read Part 1 yet, start with <a href="/blog/what-is-agentic-ai" style={{ color: '#34D399', textDecoration: 'underline' }}>What is Agentic AI?</a> — it explains the core concepts this guide builds on.
          </Callout>

          {/* ── WHAT IS AN AI EMPLOYEE ── */}
          <H2>What We Mean by "AI Employee"</H2>
          <P>An AI employee is not a chatbot that answers questions. It's an agent that holds a specific job in your business — with defined responsibilities, tools it can use, and tasks it completes without you supervising each step.</P>

          <div style={{
            background: '#0F172A', border: '1px solid #1E3A5F',
            borderRadius: 14, padding: '24px 28px', margin: '24px 0',
          }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#60A5FA', letterSpacing: '0.08em', marginBottom: 16 }}>THINK OF IT LIKE THIS</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Traditional VA', items: ['Costs R8,000–R15,000/month', 'Works 8 hours/day', 'Needs breaks, sick days', 'Learns slowly'], color: '#374151', textColor: '#6B7280' },
                { label: 'AI Employee', items: ['Costs $20–$49/month (~R360–R880)', 'Works 24/7/365', 'Never gets tired or sick', 'Improves as you train it'], color: '#064E3B', textColor: '#6EE7B7' },
              ].map(col => (
                <div key={col.label} style={{ background: col.color + '33', border: `1px solid ${col.color}`, borderRadius: 10, padding: '16px' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: col.textColor, marginBottom: 10 }}>{col.label}</p>
                  {col.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: col.textColor, fontSize: '0.7rem', marginTop: 4 }}>•</span>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: col.textColor, margin: 0, lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <P>Obviously a human VA brings things an AI can't — creativity, emotional intelligence, complex problem solving. But for the repetitive, rule-based work that eats your time? An AI employee wins on every metric.</P>

          {/* ── 4 ROLES ── */}
          <H2>The 4 Best First AI Employees for SMB Owners</H2>
          <P>Don't try to automate everything at once. Pick one role, build one agent, get it running reliably — then expand. Here are the four highest-ROI starting points:</P>

          <AgentCard
            emoji="📬" role="The Inbox Manager" tool="Lindy + Gmail"
            cost="Free tier" saves="5–8 hrs"
            tasks={[
              'Reads every incoming email and categorises it (urgent, client, spam, newsletter, invoice)',
              'Drafts reply suggestions for common questions based on your FAQ doc',
              'Flags emails that need your personal attention and summarises the rest in a daily digest',
              'Automatically unsubscribes from marketing lists you specify',
            ]}
          />
          <AgentCard
            emoji="🔍" role="The Lead Researcher" tool="Lindy + CRM"
            cost="$20/mo" saves="8–12 hrs"
            tasks={[
              'Takes a list of company names and researches each one automatically',
              'Pulls website info, LinkedIn data, recent news, and funding status',
              'Writes a one-paragraph brief on each prospect and drops it into your CRM or Notion',
              'Scores leads based on criteria you define (size, industry, location)',
            ]}
          />
          <AgentCard
            emoji="📱" role="The Content Repurposer" tool="Lindy + Notion"
            cost="$20/mo" saves="6–10 hrs"
            tasks={[
              'Takes your long-form content (article, podcast, video transcript) as input',
              'Generates 5 social media captions adapted for LinkedIn, Twitter, and WhatsApp',
              'Writes a short email newsletter version with a clear CTA',
              'Creates a bullet-point summary for your Notion knowledge base',
            ]}
          />
          <AgentCard
            emoji="🧾" role="The Follow-Up Agent" tool="Lindy + Gmail/WhatsApp"
            cost="$20/mo" saves="4–6 hrs"
            tasks={[
              'Monitors your outstanding invoices and client proposals',
              'Sends polite, personalised follow-up messages at intervals you define (3 days, 7 days, 14 days)',
              'Tracks responses and marks leads as replied, ignored, or converted',
              'Escalates overdue accounts to you with a summary of all communication history',
            ]}
          />

          {/* ── STEP BY STEP ── */}
          <H2>Step-by-Step: Build Your Inbox Manager in 60 Minutes</H2>
          <P>We're going to build the Inbox Manager — the easiest first agent and the one with immediate, visible impact. Here's exactly how to do it:</P>

          <div style={{ marginTop: 32 }}>
            <Step number="1" title="Create your free Lindy account" time="5 min">
              <P>Go to <a href={AFFILIATE.lindy} target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA' }}>lindy.ai</a> and sign up with your Google account. The free tier gives you enough to build and run your first agent without entering a credit card.</P>
              <Callout emoji="💡" color="#1E3A5F" textColor="#93C5FD">
                Use the same Google account that's connected to your primary business Gmail. This makes the Gmail integration seamless in the next step.
              </Callout>
            </Step>

            <Step number="2" title="Connect Gmail" time="3 min">
              <P>In your Lindy dashboard, go to <strong style={{ color: '#E2E8F0' }}>Integrations</strong> and connect your Gmail account. Lindy will ask for permission to read, label, and draft emails on your behalf. Grant all permissions — without these, your agent can only observe, not act.</P>
              <div style={{ background: '#110C00', border: '1px solid #44260022', borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 10 }}>
                <span>⚠️</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#92400E', margin: 0, lineHeight: 1.6 }}>
                  Lindy uses OAuth — it never sees or stores your password. Your data stays in Google's infrastructure. If you're concerned about sensitive emails, you can limit access to specific labels only.
                </p>
              </div>
            </Step>

            <Step number="3" title="Create a new Lindy (your agent)" time="5 min">
              <P>Click <strong style={{ color: '#E2E8F0' }}>+ New Lindy</strong> and choose <strong style={{ color: '#E2E8F0' }}>Start from scratch</strong>. Give it a name — something like "Inbox Manager" or "Email Assistant." This is your agent's identity inside the system.</P>
            </Step>

            <Step number="4" title="Write your agent's instructions" time="15 min" accent="#10B981">
              <P>This is the most important step. Paste the following prompt into the instructions field — then customise the parts in brackets for your specific business:</P>

              <div style={{
                background: '#0D1117', border: '1px solid #1F2937',
                borderRadius: 12, padding: '20px 24px', margin: '16px 0',
                position: 'relative',
              }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#4B5563', letterSpacing: '0.08em', marginBottom: 12 }}>COPY THIS PROMPT INTO LINDY</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#86EFAC', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-line' }}>
{`You are my Inbox Manager. Your job is to help me process emails efficiently.

When a new email arrives, do the following:

1. CATEGORISE it with one of these labels:
   - URGENT: needs my response within 24 hours
   - CLIENT: from an existing client or active prospect
   - INVOICE: payment-related or financial
   - NEWSLETTER: marketing emails and subscriptions
   - ADMIN: receipts, confirmations, notifications
   - SPAM: unsolicited or irrelevant

2. DRAFT a reply for any email in the CLIENT or URGENT category. Keep it professional, warm, and under 100 words. Sign off as [YOUR NAME] from [YOUR COMPANY].

3. Every day at 8am, send me a DIGEST to [YOUR EMAIL] summarising:
   - Number of emails received
   - Any URGENT items needing my attention
   - A one-line summary of each CLIENT email

My business is [BRIEF DESCRIPTION — e.g. "a web development studio in South Africa serving SMB clients"].
My tone is [professional / friendly / formal — choose one].
Never send a reply without my approval — only draft it.`}
                </p>
              </div>

              <Callout emoji="🎯" color="#064E3B" textColor="#6EE7B7">
                The last line is critical for safety — "Never send a reply without my approval." Keep this in until you've tested the agent for at least 2 weeks and trust its output consistently.
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
                    <div style={{ background: '#111827', border: '1px solid #1F2937', padding: '10px 14px' }}>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#60A5FA', margin: 0 }}>TRIGGER</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#E2E8F0', margin: '4px 0 0' }}>{item.trigger}</p>
                    </div>
                    <div style={{ background: '#0F1F12', border: '1px solid #1F2937', padding: '10px 14px' }}>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#10B981', margin: 0 }}>ACTION</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#86EFAC', margin: '4px 0 0' }}>{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Step>

            <Step number="6" title="Test with 10 real emails" time="10 min" accent="#A78BFA">
              <P>Before activating your agent fully, run it against 10 real emails from your inbox. In Lindy, you can test the agent manually against specific messages. Check that the categorisation is accurate and the drafted replies sound like you.</P>
              <P>Tweak your instructions prompt if needed — most people do 2–3 iterations before they're happy. This is normal. The prompt is your agent's training manual.</P>
            </Step>

            <Step number="7" title="Activate and monitor" time="Ongoing">
              <P>Turn your Lindy on. For the first week, review every draft reply before anything goes out. After 7 days, you'll have a clear picture of where the agent excels and where it needs refinement. After 2 weeks of consistent good performance, you can selectively enable auto-send for low-stakes categories like newsletter unsubscribes.</P>
              <CostBadge usd="$0–$49" zar="R0–R880" />
            </Step>
          </div>

          {/* ── SCALING ── */}
          <H2>What to Do After Week 1</H2>
          <P>Once your Inbox Manager is running reliably, here's how to expand your AI team systematically:</P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '20px 0' }}>
            {[
              { week: 'Week 2', title: 'Add a second agent', desc: 'Build the Follow-Up Agent for invoices. Connect it to the same Gmail. Your two agents now work as a team — the Inbox Manager categorises, the Follow-Up Agent handles collections.' },
              { week: 'Week 3', title: 'Connect your CRM', desc: 'Integrate Lindy with Notion or HubSpot. Now when the Inbox Manager identifies a CLIENT email, it can automatically create or update a contact record without you touching anything.' },
              { week: 'Week 4', title: 'Add GoHighLevel', desc: 'GoHighLevel is the most powerful CRM + automation platform for agencies and SMBs. Your Lindy agents can feed data directly into GHL pipelines, automating your entire sales follow-up sequence.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16,
                background: '#111827', border: '1px solid #1F2937',
                borderRadius: 12, padding: '18px 20px',
              }}>
                <span style={{
                  background: '#60A5FA22', color: '#60A5FA',
                  fontFamily: 'Syne, sans-serif', fontSize: '0.72rem', fontWeight: 700,
                  padding: '4px 10px', borderRadius: 6, flexShrink: 0, height: 'fit-content',
                  marginTop: 2,
                }}>{item.week}</span>
                <div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#F1F5F9', marginBottom: 6 }}>{item.title}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── GHL SPOTLIGHT ── */}
          <div style={{
            background: 'linear-gradient(135deg, #0F172A, #111827)',
            border: '1px solid #1E3A5F', borderRadius: 16, padding: '28px',
            margin: '36px 0',
          }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#60A5FA', letterSpacing: '0.08em', marginBottom: 10 }}>⭐ RECOMMENDED TOOL</p>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#F8FAFC', marginBottom: 10 }}>GoHighLevel — The AI Command Centre</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 20 }}>
              Once your Lindy agents are running, GoHighLevel is the natural next step. It combines CRM, email marketing, SMS automation, pipeline management, and AI workflows in one platform. For SMB owners and agencies, it replaces 5–7 separate tools. Plans start at $97/month — and it pays for itself within weeks for most businesses that use it properly.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={AFFILIATE.ghl} target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
                color: '#0A0F1E', fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: '0.88rem', padding: '11px 22px', borderRadius: 8,
                textDecoration: 'none', display: 'inline-block',
              }}>Try GoHighLevel Free →</a>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#374151', alignSelf: 'center' }}>14-day free trial · 40% recurring commission</span>
            </div>
          </div>

          {/* ── HONEST TALK ── */}
          <H2>The Honest Truth About AI Employees</H2>
          <P>Building your first agent is exciting — but let's be real about what to expect in the first month:</P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '20px 0' }}>
            {[
              { icon: '✅', text: 'Week 1 will feel rough. Your agent will misclassify some emails, draft replies that are slightly off-tone, and need constant tweaking. This is normal. Stick with it.' },
              { icon: '✅', text: 'Week 2 gets better. As you refine the prompt and correct mistakes, the agent learns your patterns. By Day 14, most people are genuinely impressed.' },
              { icon: '✅', text: 'Month 2 is where it compounds. You stop thinking about email management. It just happens. That mental bandwidth goes somewhere better — like client work or building your next article.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 16px', background: '#0F1F12', border: '1px solid #06402044', borderRadius: 10 }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#6EE7B7', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* ── RECOMMENDED TOOLS ── */}
          <H2>Tools Referenced in This Article</H2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <AffCard emoji="🤖" name="GoHighLevel" desc="All-in-one CRM + AI automation. The natural upgrade once your agents are running. 40% recurring commission — our top earner." tag="40% RECURRING" href={AFFILIATE.ghl} tagColor="#10B981" />
            <AffCard emoji="🧑‍💼" name="Lindy" desc="The no-code agentic AI platform used in this guide. Free tier available. Build your first agent in under an hour." tag="FREE TIER" href={AFFILIATE.lindy} tagColor="#60A5FA" />
            <AffCard emoji="📬" name="Instantly.ai" desc="AI-powered cold email outreach platform. Perfect for the Lead Researcher agent workflow — automates prospecting at scale." tag="30% RECURRING" href={AFFILIATE.instantly} tagColor="#A78BFA" />
          </div>

          {/* ── FAQ ── */}
          <H2>Frequently Asked Questions</H2>
          <div>
            {[
              { q: 'How long does it take to set up the first agent?', a: 'Most people get their Inbox Manager running in 45–90 minutes on their first attempt. The setup itself is quick — the time goes into writing good instructions and testing against real emails.' },
              { q: 'Will the agent ever send emails without my permission?', a: 'Not unless you explicitly enable auto-send. By default, Lindy only drafts replies — you approve and send each one. We strongly recommend keeping it this way for at least the first two weeks.' },
              { q: 'What if my business email is not Gmail?', a: 'Lindy also integrates with Outlook/Microsoft 365. The setup process is identical — just connect your Microsoft account instead of Google in Step 2.' },
              { q: 'Can I build these agents in GoHighLevel directly?', a: 'Yes — GoHighLevel has its own AI workflow builder and is more powerful for sales and CRM automation specifically. For general task automation across multiple apps, Lindy is more flexible as a starting point.' },
              { q: 'Is this suitable for a one-person business in South Africa?', a: 'Absolutely — this guide was written with exactly that in mind. The $20/month cost translates to roughly R360/month. If your agent saves you even 3 hours of admin per month, you\'ve already paid for it many times over.' },
            ].map(item => (
              <details key={item.q} className="faq-item">
                <summary>{item.q} <span style={{ color: '#374151', fontSize: '1.1rem' }}>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          {/* ── NEXT ARTICLE CTA ── */}
          <div style={{
            background: 'linear-gradient(135deg, #0F172A, #111827)',
            border: '1px solid #1E3A5F', borderRadius: 16, padding: '32px',
            marginTop: 48, textAlign: 'center',
          }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#F8FAFC', marginBottom: 10 }}>
              Want to run AI privately on your own machine?
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '0.95rem', marginBottom: 24 }}>
              Next up: The exact R15,000 PC build for running private AI in South Africa — no API costs, no data leaving your machine.
            </p>
            <a href="/blog/local-llm-sa" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#10B981', color: '#0A0F1E',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem',
              padding: '12px 24px', borderRadius: 8, textDecoration: 'none',
            }}>
              Read: The R15k Private AI Build →
            </a>
          </div>

          {/* ── DISCLOSURE ── */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#374151',
            lineHeight: 1.6, borderTop: '1px solid #1F2937', paddingTop: 24, marginTop: 40,
          }}>
            <strong style={{ color: '#4B5563' }}>Affiliate Disclosure:</strong> This article contains affiliate links. If you sign up for a tool through our links, OpenMindi may earn a commission at no extra cost to you. We only recommend tools we've tested and believe in.
          </p>

        </article>

        {/* ── SIDEBAR ── */}
        <aside className="toc-sidebar" style={{ position: 'sticky', top: 88 }}>
          <div style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 14, padding: '20px' }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#4B5563', letterSpacing: '0.08em', marginBottom: 14 }}>IN THIS ARTICLE</p>
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

          {/* COST SUMMARY */}
          <div style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 14 }}>TOTAL COST SUMMARY</p>
            {[
              { label: 'Lindy (free tier)', cost: '$0' },
              { label: 'Lindy (paid)', cost: '$49/mo' },
              { label: 'GoHighLevel', cost: '$97/mo' },
              { label: 'Your time', cost: '~1 hour setup' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1F2937' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B7280' }}>{item.label}</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#10B981' }}>{item.cost}</span>
              </div>
            ))}
          </div>

          {/* GHL CTA */}
          <div style={{ background: '#111827', border: '1px solid #1E3A5F', borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#60A5FA', letterSpacing: '0.08em', marginBottom: 12 }}>TOP PICK</p>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F1F5F9', marginBottom: 8 }}>GoHighLevel</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.5, marginBottom: 14 }}>CRM + AI automation in one. The upgrade path after Lindy — and our highest-earning affiliate program.</p>
            <a href={AFFILIATE.ghl} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center',
              background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
              color: '#0A0F1E', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.82rem',
              padding: '10px', borderRadius: 8, textDecoration: 'none',
            }}>Try Free → 40% Recurring</a>
          </div>
        </aside>

      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid #1F2937', padding: '24px max(24px,5vw)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ color: '#374151', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem' }}>© 2026 OpenMindi · Bloemfontein, SA</span>
        <span style={{ color: '#374151', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem' }}>This site contains affiliate links.</span>
      </footer>

    </main>
  );
}
