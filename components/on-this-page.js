"use client";
import React, { useEffect, useState } from "react";

const headingLevels = {
  H2: "ml-0 font-semibold",
  H3: "ml-4 font-normal",
  H4: "ml-8 font-light",
};

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const selector = "h2, h3, h4";
    const headingElements = tempDiv.querySelectorAll(selector);
    const headingData = Array.from(headingElements)
      .filter((h) => h.id)
      .map((h) => ({
        text: h.textContent,
        id: h.id,
        level: h.tagName,
      }));
    setHeadings(headingData);
  }, [htmlContent]);

  if (!headings.length) return null;

  return (
    <nav
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-4"
      aria-label="On this page"
    >
      <h2 className="text-lg font-bold mb-3 tracking-tight text-zinc-800 dark:text-zinc-100">
        On This Page
      </h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.id}`}
              className={`block transition-colors duration-150 rounded px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:bg-blue-100 dark:focus:bg-blue-900 outline-none ${
                headingLevels[heading.level] || ""
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OnThisPage;