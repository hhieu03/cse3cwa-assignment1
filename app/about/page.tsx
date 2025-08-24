"use client"; // client để set cookie menu

import React, { useEffect } from "react";

const STUDENT_NAME = "Minh Hieu Hoang";
const STUDENT_NUMBER = "21929088";

export default function AboutPage() {
  useEffect(() => {
    // set cookie menu khi user vào About
    document.cookie = "activeTab=about; path=/";
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>
      <p>Name: {STUDENT_NAME}</p>
      <p>Student Number: {STUDENT_NUMBER}</p>
      <p>Video Tutorial Placeholder:</p>
      <div
        style={{
          width: "560px",
          height: "315px",
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Video Here
      </div>
    </div>
  );
}
