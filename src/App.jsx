import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Terminal,
  ChevronRight,
  GraduationCap,
  Award,
  Menu,
  X,
  MessageCircle,
  Send,
} from "lucide-react";

const COLORS = {
  bg: "#0B0D10",
  surface: "#12151A",
  surfaceAlt: "#181C22",
  border: "#232830",
  text: "#EDEFF2",
  textDim: "#8B92A0",
  accent: "#6C8CFF",
  accent2: "#FFB86C",
};

const CONTACT = {
  email: "muazsaeed225@gmail.com",
  phone: "+923197011009",
  phoneDisplay: "+92 319 7011009",
  github: "https://github.com/muhammadmuazsaeed",
  linkedin: "https://www.linkedin.com/in/muaz-saeed-023369377",
  whatsapp: "https://wa.me/923197011009",
  formspree: "https://formspree.io/f/xeajknjk",
};

const NAV_LINKS = ["about", "skills", "pipeline", "projects", "education", "contact"];

const PROJECTS = [
  {
    stage: "01 · Clean",
    name: "AI Data Cleaning Engine",
    desc: "A hybrid data cleaning system with a web interface combining rule-based logic, Machine Learning (KNN imputation, Isolation Forest anomaly detection, fuzzy matching), and an optional Gemini LLM layer to auto-detect and fix messy CSV/Excel/database data — upload a messy file, download it clean in the same format.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Gemini API"],
    metric: "Rules + ML + LLM",
    url: "https://github.com/muhammadmuazsaeed/AI_Data_Cleaning_Engine",
  },
  {
    stage: "02 · Ingest",
    name: "AI Underwriting Assistant",
    desc: "Real-estate investment analysis tool. Computes NOI, cash flow, cap rate & ROI, layers a rule-based risk engine on top, and predicts prices with an ML model trained on 190,000+ Pakistan property listings from Zameen.com. Includes a Gemini-powered chat assistant, all wrapped in a Streamlit dashboard. Built during the Career Institute internship.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Gemini API"],
    metric: "190K+ listings",
    url: "https://github.com/muhammadmuazsaeed/AI_Underwriting_-Assistant",
  },
  {
    stage: "03 · Model",
    name: "Credit Scoring Model v2",
    desc: "Predicts loan default risk for 32,000+ applicants. Compared Logistic Regression, Decision Tree, and Random Forest — Random Forest came out on top. Built for the CodeAlpha ML internship.",
    tags: ["Python", "Random Forest", "Scikit-learn"],
    metric: "92% acc · 0.92 ROC-AUC",
    url: "https://github.com/muhammadmuazsaeed/Credit_Scoring_Model",
  },
  {
    stage: "04 · Diagnose",
    name: "Disease Prediction Project",
    desc: "Predicts the likelihood of diseases (heart disease, diabetes, breast cancer) from structured patient medical data — symptoms, age, blood test results — using classification models including SVM, Logistic Regression, Random Forest, and XGBoost.",
    tags: ["Python", "SVM", "XGBoost", "Random Forest"],
    metric: "Multi-disease classifier",
    url: "https://github.com/muhammadmuazsaeed/Disease_Prediction_Project",
  },
  {
    stage: "05 · Regress",
    name: "House Price Predictor",
    desc: "A Scikit-learn Linear Regression model that predicts house prices from bedrooms, bathrooms, floors, and city, served through a simple Streamlit frontend.",
    tags: ["Python", "Linear Regression", "Streamlit"],
    metric: "Live demo",
    url: "https://github.com/muhammadmuazsaeed/House_Price_Prediction",
  },
  {
    stage: "06 · Signal",
    name: "Emotion Recognition Model",
    desc: "A deep learning model that classifies human emotion directly from speech audio signals.",
    tags: ["Python", "Deep Learning", "Audio ML"],
    metric: "Speech → Emotion",
    url: "https://github.com/muhammadmuazsaeed/Emotion_Recognition_Model",
  },
];

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "C++", "HTML", "CSS"] },
  { group: "AI / ML", items: ["Machine Learning", "Deep Learning", "Data Science", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"] },
  { group: "Tools", items: ["Streamlit", "Git & GitHub", "VS Code", "Hugging Face", "Power BI", "Jupyter Notebook"] },
  { group: "Also exploring", items: ["Web Dev", "Android Dev", "Cybersecurity", "Databases"] },
];

const CERTS = [
  {
    name: "AI Automation",
    level: "Expert level",
    date: "Feb — May 2026",
    id: "ECIT-AI-0035",
  },
  {
    name: "Data Science",
    level: "Certificate of Completion",
    date: "Edify College of IT",
    id: null,
  },
];

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(CONTACT.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        name="name"
        required
        placeholder="Your name"
        className="font-mono text-sm px-4 py-3 rounded-lg bg-transparent outline-none"
        style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text }}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="font-mono text-sm px-4 py-3 rounded-lg bg-transparent outline-none"
        style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text }}
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Your message"
        className="font-mono text-sm px-4 py-3 rounded-lg bg-transparent outline-none resize-none"
        style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text }}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-mono text-sm px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: COLORS.accent, color: "#0B0D10" }}
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send message"}
        {status !== "sending" && status !== "sent" && <Send size={15} />}
      </button>
      {status === "sent" && (
        <p className="font-mono text-xs" style={{ color: "#5CE07B" }}>
          Thanks! Your message has been sent — I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-mono text-xs" style={{ color: "#FF6B6B" }}>
          Something went wrong. Try emailing directly instead.
        </p>
      )}
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const typed = useTypewriter([
    "AI / ML Engineer in training",
    "Python Developer",
    "Data Science Enthusiast",
  ]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ background: COLORS.bg, color: COLORS.text, fontFamily: "'Inter', system-ui, sans-serif" }}
      className="min-h-screen w-full"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .glow:hover { box-shadow: 0 0 0 1px ${COLORS.accent}55, 0 8px 30px -8px ${COLORS.accent}55; }
        .fade-up { animation: fadeUp .7s ease both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(14px);} to {opacity:1; transform:none;} }
        ::selection { background: ${COLORS.accent}55; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${COLORS.accent}; outline-offset: 3px; }
      `}</style>

      {/* NAV */}
      <header
        className="sticky top-0 z-50 backdrop-blur"
        style={{ background: `${COLORS.bg}CC`, borderBottom: `1px solid ${COLORS.border}` }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("top")} className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
            <span style={{ color: COLORS.accent }}>&lt;</span>MS<span style={{ color: COLORS.accent }}>/&gt;</span>
          </button>
          <nav className="hidden md:flex gap-7 font-mono text-sm" style={{ color: COLORS.textDim }}>
            {NAV_LINKS.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="hover:text-white transition-colors capitalize">
                {l}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 font-mono text-sm" style={{ color: COLORS.textDim }}>
            {NAV_LINKS.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-left capitalize">
                {l}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="fade-up">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full mb-6"
            style={{ border: `1px solid ${COLORS.border}`, color: COLORS.accent2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5CE07B" }} />
            open to AI/ML opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] mb-5">
            Muhammad Muaz Saeed
          </h1>

          <div className="font-mono text-lg sm:text-xl mb-6" style={{ color: COLORS.accent }}>
            <Terminal size={18} className="inline mr-2 mb-1" />
            {typed}
            <span className="animate-pulse">▌</span>
          </div>

          <p className="max-w-xl mb-8" style={{ color: COLORS.textDim }}>
            BS Computer Science student turning data into decisions. I build classification &
            prediction models end-to-end — from a messy dataset to a dashboard someone can
            actually use — on my way to becoming a full-time AI/ML Engineer.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="font-mono text-sm px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              style={{ background: COLORS.accent, color: "#0B0D10" }}
            >
              View projects <ChevronRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-mono text-sm px-5 py-2.5 rounded-lg glow transition-transform hover:-translate-y-0.5"
              style={{ border: `1px solid ${COLORS.border}` }}
            >
              Get in touch
            </button>
            <div className="flex items-center gap-3 ml-1">
              <a href={CONTACT.github} target="_blank" rel="noreferrer" style={{ color: COLORS.textDim }} className="hover:text-white">
                <Github size={19} />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" style={{ color: COLORS.textDim }} className="hover:text-white">
                <Linkedin size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
          <div
            className="w-40 h-40 md:w-full md:h-52 rounded-2xl overflow-hidden flex items-center justify-center font-display text-4xl font-semibold shrink-0"
            style={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.border}`, color: COLORS.accent }}
          >
            {/* Replace this block with: <img src="/profile.jpg" className="w-full h-full object-cover" /> */}
            <img src="/profile.jpg" className="w-full h-full object-cover" alt="Muhammad Muaz Saeed" />
          </div>
          <div>
            <p className="font-mono text-xs mb-3" style={{ color: COLORS.accent2 }}>$ whoami</p>
            <p className="mb-4" style={{ color: COLORS.textDim }}>
              I'm Muaz — a Computer Science undergrad at the University of Education, Lahore
              (Faisalabad Campus), based in Faisalabad, Punjab, Pakistan. Python is my strongest
              language, and I spend most of my time in the AI/ML and Data Science space, with
              side interests in web development, Android development, cybersecurity, and
              databases.
            </p>
            <p style={{ color: COLORS.textDim }}>
              I'm currently an AI/ML intern at Career Institute, where I've shipped an
              underwriting analysis tool and am building a second project. Outside of code, I'm
              into photography, movies, business, and exploring new places.
            </p>
            <div className="flex items-center gap-2 mt-5 font-mono text-sm" style={{ color: COLORS.textDim }}>
              <MapPin size={15} /> Faisalabad, Punjab, Pakistan
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <p className="font-mono text-xs mb-2" style={{ color: COLORS.accent2 }}>$ pip list</p>
        <h2 className="font-display text-2xl font-semibold mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-xl p-5" style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}>
              <p className="font-mono text-xs mb-3" style={{ color: COLORS.accent }}>{s.group}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded-md" style={{ background: COLORS.surfaceAlt, color: COLORS.textDim }}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="max-w-5xl mx-auto px-6 py-16" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <p className="font-mono text-xs mb-2" style={{ color: COLORS.accent2 }}>$ python train.py</p>
        <h2 className="font-display text-2xl font-semibold mb-2">How a project moves through my pipeline</h2>
        <p className="mb-8" style={{ color: COLORS.textDim }}>Every project below follows the same stages — data in, model out, shipped as something usable.</p>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
          {["Ingest data", "Train & validate", "Evaluate metrics", "Ship the app"].map((step, i) => (
            <div key={step} className="flex-1 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 py-3 sm:py-0 relative">
              <div className="flex items-center gap-3 sm:gap-0 sm:flex-col sm:items-start w-full">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: i === 0 ? COLORS.accent : COLORS.border, boxShadow: i === 0 ? `0 0 0 4px ${COLORS.accent}33` : "none" }}
                />
                <div className="hidden sm:block h-px flex-1 mt-1" style={{ background: COLORS.border }} />
                <p className="font-mono text-sm sm:mt-3">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <p className="font-mono text-xs mb-2" style={{ color: COLORS.accent2 }}>$ ls ./projects</p>
        <h2 className="font-display text-2xl font-semibold mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl p-5 flex flex-col glow transition-transform hover:-translate-y-1"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs" style={{ color: COLORS.accent }}>{p.stage}</span>
                <ExternalLink size={14} style={{ color: COLORS.textDim }} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-sm mb-4 flex-1" style={{ color: COLORS.textDim }}>{p.desc}</p>
              <p className="font-mono text-xs mb-3" style={{ color: COLORS.accent2 }}>{p.metric}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md" style={{ background: COLORS.surfaceAlt, color: COLORS.textDim }}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-16" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <div className="rounded-xl p-6 mb-5" style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}>
          <GraduationCap size={20} style={{ color: COLORS.accent }} className="mb-3" />
          <p className="font-mono text-xs mb-1" style={{ color: COLORS.textDim }}>2023 — Present</p>
          <h3 className="font-display font-semibold mb-1">BS Computer Science</h3>
          <p className="text-sm" style={{ color: COLORS.textDim }}>University of Education, Lahore — Faisalabad Campus</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {CERTS.map((c) => (
            <div key={c.name} className="rounded-xl p-6" style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}>
              <Award size={20} style={{ color: COLORS.accent2 }} className="mb-3" />
              <p className="font-mono text-xs mb-1" style={{ color: COLORS.textDim }}>{c.level} · {c.date}</p>
              <h3 className="font-display font-semibold mb-1">{c.name}</h3>
              <p className="text-sm" style={{ color: COLORS.textDim }}>
                Edify College of IT, Faisalabad{c.id ? ` · ID: ${c.id}` : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <p className="font-mono text-xs mb-2" style={{ color: COLORS.accent2 }}>$ echo $CONTACT</p>
        <h2 className="font-display text-3xl font-semibold mb-4">Let's build something.</h2>
        <p className="mb-10 max-w-md" style={{ color: COLORS.textDim }}>
          Open to AI/ML internships, collaborations, or just talking shop about models and data.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div>
            <p className="font-mono text-xs mb-4" style={{ color: COLORS.textDim }}>Or reach out directly</p>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: COLORS.textDim }}>
                <MessageCircle size={16} /> WhatsApp — {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: COLORS.textDim }}>
                <Mail size={16} /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: COLORS.textDim }}>
                <Phone size={16} /> {CONTACT.phoneDisplay}
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: COLORS.textDim }}>
                <Linkedin size={16} /> linkedin.com/in/muaz-saeed-023369377
              </a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: COLORS.textDim }}>
                <Github size={16} /> github.com/muhammadmuazsaeed
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 font-mono text-xs" style={{ color: COLORS.textDim, borderTop: `1px solid ${COLORS.border}` }}>
        © 2026 Muhammad Muaz Saeed — built with React
      </footer>
    </div>
  );
}
