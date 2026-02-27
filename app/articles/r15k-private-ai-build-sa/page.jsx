'use client';
import { useState } from 'react';

// ── AFFILIATE LINKS ────────────────────────────────────────────────────────
const AFFILIATE = {
  ghl:     'https://www.gohighlevel.com/?fp_ref=dvcb7',
  notion:  'https://affiliate.notion.so/YOUR_LINK',
  murf:    'https://murf.ai/?via=YOUR_LINK',
  surfer:  'https://surferseo.com/?via=YOUR_LINK',
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

// ── PART COMPONENT ─────────────────────────────────────────────────────────
function Part({ icon, name, role, price, where, recommended, accent = '#60A5FA' }) {
  return (
    <div style={{
      background: '#111827', border: `1px solid ${recommended ? accent + '44' : '#1F2937'}`,
      borderRadius: 14, padding: '20px 22px', marginBottom: 14,
      position: 'relative', overflow: 'hidden',
    }}>
      {recommended && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          background: accent, color: '#0A0F1E',
          fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700,
          padding: '3px 10px', borderRadius: '0 14px 0 8px', letterSpacing: '0.06em',
        }}>BEST VALUE</div>
      )}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{icon}</span>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F1F5F9', margin: 0 }}>{name}</p>
            <span style={{ background: '#1F2937', color: '#6B7280', fontFamily: 'Syne, sans-serif', fontSize: '0.68rem', fontWeight: 600, padding: '2px 8px', borderRadius: 4 }}>{role}</span>
          </div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#4B5563', margin: 0 }}>Where to buy: {where}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: accent, margin: 0 }}>{price}</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#374151', margin: 0 }}>approx.</p>
        </div>
      </div>
    </div>
  );
}

// ── MODEL CARD ─────────────────────────────────────────────────────────────
function ModelCard({ name, size, use, speed, quality, privacy }) {
  const bar = (val, color) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 4, background: '#1F2937', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ width: `${val}%`, height: '100%', background: color, borderRadius: 99 }}/>
      </div>
      <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, color, width: 28, textAlign: 'right' }}>{val}%</span>
    </div>
  );
  return (
    <div style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 14, padding: '20px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F1F5F9', margin: 0 }}>{name}</p>
        <span style={{ background: '#1F2937', color: '#6B7280', fontFamily: 'Syne, sans-serif', fontSize: '0.68rem', fontWeight: 600, padding: '3px 10px', borderRadius: 6 }}>{size}</span>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#4B5563', marginBottom: 14, lineHeight: 1.5 }}>{use}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#4B5563', width: 52 }}>Speed</span>
          {bar(speed, '#60A5FA')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#4B5563', width: 52 }}>Quality</span>
          {bar(quality, '#A78BFA')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#4B5563', width: 52 }}>Privacy</span>
          {bar(privacy, '#10B981')}
        </div>
      </div>
    </div>
  );
}

// ── TOTAL ROW ──────────────────────────────────────────────────────────────
function TotalRow({ label, amount, highlight = false }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 16px',
      background: highlight ? '#064E3B33' : '#111827',
      borderBottom: '1px solid #1F2937',
    }}>
      <span style={{ fontFamily: highlight ? 'Syne' : 'DM Sans', fontWeight: highlight ? 700 : 400, fontSize: highlight ? '0.95rem' : '0.88rem', color: highlight ? '#F1F5F9' : '#6B7280', fontFamily: 'DM Sans, sans-serif' }}>{label}</span>
      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: highlight ? '1.1rem' : '0.9rem', color: highlight ? '#10B981' : '#94A3B8' }}>{amount}</span>
    </div>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function Article3Page() {
  const [buildTier, setBuildTier] = useState('balanced');

  const builds = {
    budget: {
      label: 'Budget Build',
      total: '~R11,500',
      color: '#6B7280',
      parts: [
        { icon: '🧠', name: 'AMD Ryzen 5 5600X', role: 'CPU', price: 'R2,200', where: 'Evetech / Wootware', recommended: false },
        { icon: '⚡', name: 'NVIDIA RTX 3060 12GB', role: 'GPU', price: 'R5,500', where: 'Pricecheck.co.za', recommended: false },
        { icon: '💾', name: '32GB DDR4 RAM', role: 'Memory', price: 'R1,400', where: 'Evetech', recommended: false },
        { icon: '💿', name: '1TB NVMe SSD', role: 'Storage', price: 'R800', where: 'Wootware', recommended: false },
        { icon: '🔌', name: '650W PSU (80+ Bronze)', role: 'Power', price: 'R900', where: 'Evetech', recommended: false },
        { icon: '📦', name: 'Mid-Tower ATX Case', role: 'Case', price: 'R700', where: 'Takealot', recommended: false },
      ],
    },
    balanced: {
      label: 'Balanced Build ⭐',
      total: '~R15,800',
      color: '#60A5FA',
      parts: [
        { icon: '🧠', name: 'AMD Ryzen 7 7700X', role: 'CPU', price: 'R3,800', where: 'Evetech / Wootware', recommended: true },
        { icon: '⚡', name: 'NVIDIA RTX 4070 12GB', role: 'GPU', price: 'R7,200', where: 'Evetech / Micro Center', recommended: true },
        { icon: '💾', name: '64GB DDR5 RAM', role: 'Memory', price: 'R2,600', where: 'Evetech', recommended: true },
        { icon: '💿', name: '2TB NVMe SSD', role: 'Storage', price: 'R1,400', where: 'Wootware', recommended: false },
        { icon: '🔌', name: '750W PSU (80+ Gold)', role: 'Power', price: 'R1,200', where: 'Wootware', recommended: false },
        { icon: '📦', name: 'ATX Tower with good airflow', role: 'Case', price: 'R900', where: 'Takealot / Evetech', recommended: false },
      ],
    },
    power: {
      label: 'Power Build',
      total: '~R28,000',
      color: '#A78BFA',
      parts: [
        { icon: '🧠', name: 'AMD Ryzen 9 7950X', role: 'CPU', price: 'R7,500', where: 'Wootware', recommended: false },
        { icon: '⚡', name: 'NVIDIA RTX 4090 24GB', role: 'GPU', price: 'R22,000', where: 'Evetech (limited stock)', recommended: true },
        { icon: '💾', name: '128GB DDR5 RAM', role: 'Memory', price: 'R5,200', where: 'Wootware', recommended: false },
        { icon: '💿', name: '4TB NVMe SSD', role: 'Storage', price: 'R2,800', where: 'Evetech', recommended: false },
        { icon: '🔌', name: '1000W PSU (80+ Platinum)', role: 'Power', price: 'R2,200', where: 'Wootware', recommended: false },
        { icon: '📦', name: 'Full Tower with liquid cooling', role: 'Case', price: 'R2,500', where: 'Evetech / Custom', recommended: false },
      ],
    },
  };

  const active = builds[buildTier];

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
        .tier-btn { cursor: pointer; border: 1px solid #1F2937; border-radius: 8px; padding: 10px 18px; background: #111827; font-family: 'Syne', sans-serif; font-size: 0.82rem; font-weight: 600; color: #6B7280; transition: all 0.2s; }
        .tier-btn:hover { border-color: #374151; color: #E2E8F0; }
        .tier-btn.active { color: #0A0F1E; }
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
            <span style={{ background: '#F0FDF422', color: '#22C55E', fontFamily: 'Syne, sans-serif', fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>Local LLM</span>
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
            The <span style={{ color: '#10B981' }}>R15,000 PC Build</span><br/>
            for Running Private AI<br/>
            in South Africa
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
            fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 28,
          }}>
            Run Llama 3, Mistral, and Qwen locally. No API costs. No data leaving your machine. No load-shedding interruptions to your workflow. Here's the exact hardware, where to buy it in SA, and how to get it running.
          </p>

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
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#4B5563' }}>12 min read</span>
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

          <P>API costs add up fast. If you're running Claude, GPT-4, or Gemini at scale — processing documents, running agents, summarising research — you're spending $50–$300/month on tokens alone. Multiply that by the rand exchange rate and it stings.</P>
          <P>There's a better way. <strong style={{ color: '#E2E8F0' }}>Local LLM hosting</strong> means running an open-source AI model directly on your own hardware. Your data never leaves your machine. There are no API costs. And unlike cloud services, it works perfectly during load-shedding — because it's running on your UPS-backed home server, not a data centre in Virginia.</P>
          <P>This guide gives you the exact build optimised for South African pricing, local suppliers, and the specific challenges of running AI hardware in a country with unstable power.</P>

          <Callout emoji="📖" color="#1E3A5F" textColor="#93C5FD">
            New to AI agents? Read <a href="/blog/what-is-agentic-ai" style={{ color: '#60A5FA', textDecoration: 'underline' }}>What is Agentic AI?</a> first — it explains how local LLMs fit into a broader AI workflow strategy.
          </Callout>

          {/* ── WHY LOCAL ── */}
          <H2>Why Run AI Locally? The SA Case</H2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, margin: '24px 0' }}>
            {[
              { icon: '💸', title: 'Zero API Costs', desc: 'Run millions of tokens per month at no marginal cost. Your only expense is electricity — roughly R80–R150/month.' },
              { icon: '🔒', title: 'Total Privacy', desc: 'Client contracts, financial data, personal documents — none of it touches a foreign server. 100% POPIA-safe.' },
              { icon: '⚡', title: 'Load-Shedding Proof', desc: 'Pair your build with a 1500VA UPS and your AI keeps running through Stage 4. Cloud services go down. Yours doesn\'t.' },
              { icon: '🌍', title: 'No Dollar Exposure', desc: 'API pricing in USD hurts as the rand weakens. Local hardware is a once-off rand cost that never inflates.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 12, padding: '18px 18px' }}>
                <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: 8 }}>{item.icon}</span>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#E2E8F0', marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ── COST COMPARISON ── */}
          <H2>Cloud API vs Local: The 12-Month Cost Comparison</H2>
          <P>Let's run the real numbers for a South African power user running AI daily:</P>

          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #1F2937', margin: '20px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: '#1F2937', gap: 1 }}>
              {['', 'Cloud API', 'Local Build'].map((h, i) => (
                <div key={i} style={{ background: i === 2 ? '#064E3B' : '#111827', padding: '12px 16px' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: i === 2 ? '#10B981' : '#4B5563' }}>{h}</span>
                </div>
              ))}
            </div>
            {[
              ['Setup cost', '$0', 'R15,800 once'],
              ['Monthly cost', '$80–$200/mo (R1,440–R3,600)', 'R80–R150 (electricity only)'],
              ['12-month total', 'R17,280–R43,200', 'R16,760–R17,600'],
              ['Month 13 onward', 'R1,440–R3,600/mo ongoing', 'R80–R150/mo forever'],
              ['Data privacy', '❌ Foreign servers', '✅ Your machine only'],
              ['Load-shedding safe', '❌ Depends on cloud uptime', '✅ With UPS backup'],
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: '#1F2937', gap: 1 }}>
                <div style={{ background: '#111827', padding: '11px 16px' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#94A3B8' }}>{row[0]}</span>
                </div>
                <div style={{ background: i % 2 === 0 ? '#0F172A' : '#0D1117', padding: '11px 16px' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#6B7280' }}>{row[1]}</span>
                </div>
                <div style={{ background: i % 2 === 0 ? '#0F1F12' : '#0D1A0F', padding: '11px 16px' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#86EFAC' }}>{row[2]}</span>
                </div>
              </div>
            ))}
          </div>

          <P>The break-even point for a moderate API user is <strong style={{ color: '#10B981' }}>around month 6–8.</strong> After that, every month you run local AI is pure saving. After 12 months, most users are R15,000–R25,000 ahead.</P>

          {/* ── INTERACTIVE BUILD ── */}
          <H2>The Build: Choose Your Tier</H2>
          <P>All three builds run modern open-source models comfortably. The difference is which models you can run and at what speed. For most SA users, the Balanced Build is the sweet spot.</P>

          {/* TIER SELECTOR */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            {Object.entries(builds).map(([key, val]) => (
              <button
                key={key}
                className={`tier-btn ${buildTier === key ? 'active' : ''}`}
                onClick={() => setBuildTier(key)}
                style={buildTier === key ? { background: val.color, borderColor: val.color, color: '#0A0F1E' } : {}}
              >
                {val.label}
              </button>
            ))}
          </div>

          {/* PARTS LIST */}
          <div>
            {active.parts.map((part, i) => (
              <Part key={i} {...part} accent={active.color} />
            ))}
          </div>

          {/* TOTAL */}
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #1F2937', marginTop: 8, marginBottom: 32 }}>
            <TotalRow label="Assembly (DIY or local PC shop)" amount="R0–R800" />
            <TotalRow label="UPS 1500VA (load-shedding protection)" amount="R1,800–R2,500" />
            <TotalRow label={`Estimated Total — ${active.label}`} amount={active.total} highlight />
          </div>

          <Callout emoji="🛒" color="#064E3B" textColor="#6EE7B7">
            Best SA suppliers: <strong>Wootware.co.za</strong> for GPUs and CPUs (excellent stock, fast Bloemfontein delivery), <strong>Evetech.co.za</strong> for bundles and peripherals, <strong>Takealot</strong> for cases and PSUs. Always check Pricecheck.co.za to compare across all three before buying.
          </Callout>

          {/* ── MODELS ── */}
          <H2>Which AI Models to Run</H2>
          <P>Once your build is ready, these are the best open-source models for different use cases — all tested and confirmed to run well on the Balanced Build:</P>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, margin: '20px 0' }}>
            <ModelCard name="Llama 3.1 8B" size="~5GB VRAM" use="Best all-rounder for writing, coding, summarisation, and chat. Fast enough for real-time use on the Balanced Build." speed={90} quality={72} privacy={100} />
            <ModelCard name="Mistral 7B" size="~5GB VRAM" use="Excellent for structured tasks, JSON extraction, and following complex instructions. Slightly more focused than Llama." speed={88} quality={74} privacy={100} />
            <ModelCard name="Qwen2.5 14B" size="~10GB VRAM" use="Multilingual powerhouse — strong on Afrikaans, Zulu, and Xhosa. Ideal for SA-specific content and local language tasks." speed={65} quality={85} privacy={100} />
            <ModelCard name="DeepSeek-R1 7B" size="~5GB VRAM" use="Best for reasoning, mathematics, and structured analysis. Use it when you need careful step-by-step thinking." speed={60} quality={88} privacy={100} />
          </div>

          <Callout emoji="🌍" color="#1E3A5F" textColor="#93C5FD">
            <strong>SA-specific tip:</strong> Qwen2.5 14B has surprisingly strong performance on South African languages including Afrikaans, Zulu, Xhosa, and Sotho. If you're creating content for local audiences, this model gives you a significant edge that cloud models lack.
          </Callout>

          {/* ── SOFTWARE SETUP ── */}
          <H2>Software Setup: Get Running in 30 Minutes</H2>
          <P>The hardware is the hard part. The software is surprisingly simple. Here's everything you need:</P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '20px 0' }}>
            {[
              { step: '1', name: 'Ollama', desc: 'The easiest way to run local LLMs. One install, then pull any model with a single command: ollama pull llama3. Free, open-source, runs on Linux, Mac, and Windows.', cmd: 'curl -fsSL https://ollama.com/install.sh | sh', color: '#60A5FA' },
              { step: '2', name: 'Open WebUI', desc: 'A ChatGPT-like interface that connects to your local Ollama. Runs in your browser, supports multiple models, conversation history, and file uploads. Completely offline.', cmd: 'docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main', color: '#A78BFA' },
              { step: '3', name: 'LM Studio (optional)', desc: 'A beautiful desktop app for discovering and running models. Better for non-technical users who prefer a GUI over terminal commands.', cmd: '# Download from lmstudio.ai — no terminal needed', color: '#10B981' },
            ].map(item => (
              <div key={item.step} style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: item.color + '22', border: `1px solid ${item.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.78rem', color: item.color,
                    flexShrink: 0,
                  }}>{item.step}</span>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#F1F5F9', marginBottom: 4 }}>{item.name}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
                <div style={{ background: '#0D1117', borderRadius: 8, padding: '10px 14px' }}>
                  <code style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#86EFAC', wordBreak: 'break-all' }}>{item.cmd}</code>
                </div>
              </div>
            ))}
          </div>

          {/* ── LOAD SHEDDING ── */}
          <H2>Load-Shedding Proof: Your Power Strategy</H2>
          <P>This is the section no international AI guide will ever write. Load-shedding is a real operational risk for SA-based AI infrastructure. Here's how to handle it:</P>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '20px 0' }}>
            {[
              { icon: '🔋', title: 'UPS 1500VA minimum', desc: 'Keeps your PC, monitor, and router running through a 2.5-hour Stage 4 slot. Recommended: APC Back-UPS 1500VA (~R2,200 at Takealot). Budget for this from day one.' },
              { icon: '⚡', title: 'Suspend heavy jobs during Stage warnings', desc: 'Check the EskomSePush API or app. If a 2.5-hour slot starts in 30 minutes, don\'t start a 3-hour model training job. Schedule long tasks overnight during green windows.' },
              { icon: '💾', title: 'Use quantised models', desc: 'Q4 and Q8 quantised model versions use less VRAM and power while maintaining 90%+ of full-precision quality. Ollama handles quantisation automatically — just specify the quantisation level when pulling a model.' },
              { icon: '🌐', title: 'Keep a cloud fallback', desc: 'For mission-critical tasks, maintain a free or low-cost API account (Claude free tier, Gemini free tier) as backup. Your local LLM is primary. Cloud is the safety net.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 14, background: '#0D1117', border: '1px solid #1F2937', borderRadius: 12, padding: '16px 18px' }}>
                <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#E2E8F0', marginBottom: 5 }}>{item.title}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.84rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── WHAT TO DO WITH IT ── */}
          <H2>What to Actually Do With Your Local LLM</H2>
          <P>Having a local AI is powerful — but only if you put it to work. Here are the highest-ROI use cases for SA entrepreneurs and creators:</P>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, margin: '20px 0' }}>
            {[
              { icon: '📝', title: 'Content Drafting', desc: 'Draft all your blog articles, social posts, and email newsletters locally. Feed the output to your live site via the OpenMindi workflow.' },
              { icon: '📄', title: 'Document Analysis', desc: 'Upload client contracts, RFPs, financial statements, or research papers. Your local model reads and summarises them privately — no data ever leaves your machine.' },
              { icon: '🧾', title: 'Invoice Processing', desc: 'Feed invoice PDFs to your local LLM and have it extract line items, totals, and due dates into structured JSON for your accounting system.' },
              { icon: '🌍', title: 'SA Language Translation', desc: 'Use Qwen2.5 to translate between English, Afrikaans, Zulu, and Xhosa — for free, offline, with far better local context than Google Translate.' },
              { icon: '💻', title: 'Code Generation', desc: 'Ask your local Mistral or Llama to write, review, and debug code. Same quality as cloud models for most tasks — and your proprietary codebase never leaves your server.' },
              { icon: '🤖', title: 'Power Your Agents', desc: 'Connect your local LLM to n8n or LangChain to build fully private agentic workflows. Your AI employees from Article 2 can run entirely on your hardware.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 12, padding: '18px' }}>
                <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: 8 }}>{item.icon}</span>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0', marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ── AFFILIATE TOOLS ── */}
          <H2>Recommended Companion Tools</H2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <AffCard emoji="🤖" name="GoHighLevel" desc="Pair your local LLM with GHL's CRM and automation pipelines. Your private AI generates content; GHL distributes it to your clients automatically." tag="40% RECURRING" href={AFFILIATE.ghl} tagColor="#10B981" />
            <AffCard emoji="📊" name="Surfer SEO" desc="Use your local AI to draft articles, then run them through Surfer SEO to optimise for ranking. The perfect local + cloud content workflow." tag="25% RECURRING" href={AFFILIATE.surfer} tagColor="#60A5FA" />
            <AffCard emoji="🗒️" name="Notion" desc="Store your local AI outputs, research, and workflows in Notion. Build your own private knowledge base that compounds over time." tag="50% RECURRING" href={AFFILIATE.notion} tagColor="#A78BFA" />
          </div>

          {/* ── FAQ ── */}
          <H2>Frequently Asked Questions</H2>
          <div>
            {[
              { q: 'Do I need to be technical to set this up?', a: 'Basic comfort with a terminal is helpful, but not required if you use LM Studio — it\'s a fully graphical app. The Ollama + Open WebUI path requires two commands total. Most non-technical users have everything running within an hour.' },
              { q: 'Can I use an existing PC instead of building new?', a: 'Yes — if your existing PC has a GPU with 8GB+ VRAM (like an RTX 3060 or better), you can install Ollama on it today. The most important component is the GPU, not the CPU or RAM.' },
              { q: 'How does this compare to Claude or GPT-4 in quality?', a: 'For general tasks, Llama 3.1 70B (which needs the Power Build) approaches GPT-3.5 quality. The 8B models are excellent for most everyday tasks but won\'t match GPT-4. The tradeoff is privacy and zero cost — for many use cases, 80% of the quality at 0% of the cost is a very good deal.' },
              { q: 'What happens to my data if Eskom cuts power mid-task?', a: 'Ollama saves conversation state locally, so most tasks resume cleanly after a restart. For long document processing jobs, build in checkpointing — process in chunks and save results incrementally rather than trying to process a 500-page PDF in one shot.' },
              { q: 'Is this legal in South Africa?', a: 'Absolutely. Running open-source AI models on your own hardware is completely legal. The models mentioned (Llama, Mistral, Qwen, DeepSeek) are all released under open-source licenses that permit commercial use.' },
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
            border: '1px solid #EA580C44', borderRadius: 16, padding: '32px',
            marginTop: 48, textAlign: 'center',
          }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#F8FAFC', marginBottom: 10 }}>
              Ready to monetise your AI setup?
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#6B7280', fontSize: '0.95rem', marginBottom: 24 }}>
              Next: Automate VAT-compliant invoicing for South African freelancers using the tools from this series.
            </p>
            <a href="/blog/ai-invoicing-sa-freelancers" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#EA580C', color: '#FFFFFF',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem',
              padding: '12px 24px', borderRadius: 8, textDecoration: 'none',
            }}>
              Read: AI Invoicing for SA Freelancers →
            </a>
          </div>

          {/* ── DISCLOSURE ── */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#374151',
            lineHeight: 1.6, borderTop: '1px solid #1F2937', paddingTop: 24, marginTop: 40,
          }}>
            <strong style={{ color: '#4B5563' }}>Affiliate Disclosure:</strong> This article contains affiliate links. If you sign up for a tool through our links, OpenMindi may earn a commission at no extra cost to you. Hardware prices are approximate and based on SA market pricing as of February 2026 — check current prices before purchasing.
          </p>

        </article>

        {/* ── SIDEBAR ── */}
        <aside className="toc-sidebar" style={{ position: 'sticky', top: 88 }}>
          <div style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 14, padding: '20px' }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#4B5563', letterSpacing: '0.08em', marginBottom: 14 }}>IN THIS ARTICLE</p>
            {[
              ['#why', 'Why Build Local?'],
              ['#cost', 'Cost Comparison'],
              ['#build', 'The Hardware Build'],
              ['#models', 'Which Models to Run'],
              ['#software', 'Software Setup'],
              ['#loadshedding', 'Load-Shedding Strategy'],
              ['#use-cases', 'What to Build With It'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="toc-link">{label}</a>
            ))}
          </div>

          {/* BUILD SUMMARY */}
          <div style={{ background: '#111827', border: '1px solid #1F2937', borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#10B981', letterSpacing: '0.08em', marginBottom: 14 }}>BALANCED BUILD SUMMARY</p>
            {[
              { label: 'GPU (RTX 4070 12GB)', cost: 'R7,200' },
              { label: 'CPU (Ryzen 7 7700X)', cost: 'R3,800' },
              { label: 'RAM (64GB DDR5)', cost: 'R2,600' },
              { label: 'Storage + PSU + Case', cost: 'R3,500' },
              { label: 'UPS (1500VA)', cost: 'R2,200' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1F2937' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#6B7280' }}>{item.label}</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#10B981' }}>{item.cost}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 0' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#F1F5F9' }}>TOTAL</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.88rem', fontWeight: 800, color: '#10B981' }}>~R19,300</span>
            </div>
          </div>

          {/* GHL CTA */}
          <div style={{ background: '#111827', border: '1px solid #1E3A5F', borderRadius: 14, padding: '20px', marginTop: 16 }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#60A5FA', letterSpacing: '0.08em', marginBottom: 12 }}>TOP PICK</p>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F1F5F9', marginBottom: 8 }}>GoHighLevel</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.5, marginBottom: 14 }}>Connect your local LLM to GHL's automation engine. The most powerful combo for SA agencies.</p>
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
        <span style={{ color: '#374151', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem' }}>Hardware prices approximate as of Feb 2026. This site contains affiliate links.</span>
      </footer>

    </main>
  );
}
