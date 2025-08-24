"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const saved = localStorage.getItem("activeTab");
    if (saved) setActiveTab(saved);
  }, []);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };

  return (
    <header style={{ padding: "10px", background: "#eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>Logo / Title</div>
      <nav>
        <button onClick={() => setOpen(!open)}>☰</button>
        {open && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Home","About","Escape Room","Coding Races","Court Room"].map(tab => (
              <li key={tab}>
                <button
                  style={{ fontWeight: activeTab===tab ? "bold":"normal" }}
                  onClick={() => handleClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
