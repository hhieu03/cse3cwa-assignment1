"use client"; // client use to set cookie menu

import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    // set cookie menu when user enter Home
    document.cookie = "activeTab=home; path=/";
    setActiveTab("home");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to A1 Tabs App - Home</h1>
      <p>This is a placeholder for your Home Page.</p>
    </div>
  );
}
