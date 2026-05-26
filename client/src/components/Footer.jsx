import React, { useState } from 'react';
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiHeartFill } from 'react-icons/ri';

function EmailContact() {
  const [copied, setCopied] = useState(false);
  const email = 'vivekgeddala@gmail.com';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        const el = document.createElement('textarea');
        el.value = email;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleCopy}
        title={`Copy ${email}`}
        aria-label="Copy email"
        className="text-white/50 hover:text-[#00d4ff] text-2xl transition-colors"
      >
        <RiMailLine />
      </button>

      {
        // Direct anchor reduces chance of popup blocking and works cross-platform
      }
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(email)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/60 hover:text-white/80 hidden sm:inline"
      >
        Compose in Gmail
      </a>
      <a
        href={`mailto:${email}`}
        className="text-sm text-white/60 hover:text-white/80 sm:hidden"
        aria-label="Open native mail client"
      >
        {email}
      </a>

      {copied && <span className="text-sm text-green-400">Copied!</span>}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            &lt;Vivek /&gt;
          </p>
          <p className="text-white/50 text-sm mt-1">Aspiring AI Engineer · MERN Stack Developer</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Vivek-Geddala"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-[#00d4ff] text-2xl transition-colors"
          >
            <RiGithubFill />
          </a>
          <a
            href="http://www.linkedin.com/in/vivek-geddala"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-[#00d4ff] text-2xl transition-colors"
          >
            <RiLinkedinBoxFill />
          </a>
          <EmailContact />
        </div>

        <p className="text-white/40 text-sm flex items-center gap-1">
          Built with <RiHeartFill className="text-[#a855f7]" /> by Geddala Vivek © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
