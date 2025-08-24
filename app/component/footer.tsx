export default function Footer() {
  const today = new Date().toLocaleDateString();
  return (
    <footer style={{ padding: "10px", background: "#eee", marginTop: "20px", textAlign: "center" }}>
      &copy; {today} — Your Name — MSSV: 12345678
    </footer>
  );
}
