import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function BandNews({ band }) {
  const [articles, setArticles] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    const fetchRSS = async () => {
      const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://news.google.com/rss/search?q=${band.replace(" ", "+")}`
      )}`;
      const res = await fetch(url);
      const data = await res.json();
      const parser = new DOMParser();
      const xml = parser.parseFromString(data.contents, "text/xml");
      const items = xml.querySelectorAll("item");

      const news = Array.from(items).slice(0, 2).map((item) => ({
        title: item.querySelector("title")?.textContent,
        link: item.querySelector("link")?.textContent,
        date: item.querySelector("pubDate")?.textContent,
      }));

      setArticles(news);
    };

    fetchRSS();
  }, [band]);

  useEffect(() => {
    if (articles.length > 0 && listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        }
      );
    }
  }, [articles]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{band} News</h2>
      <ul className="space-y-2" ref={listRef}>
        {articles.map((a, i) => (
          <li key={i}>
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              {a.title}
            </a>
            <p className="text-sm text-white/60">{a.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
