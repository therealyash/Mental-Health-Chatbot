'use client';
import ChatComponent from "./components/ChatComponent";

export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}></header>
      <div style={styles.navbar}>
        <h2 style={styles.navTitle}>Mental Health App</h2>
        <div style={styles.navButtons}>
          <button style={styles.navButton}>About</button>
          <button style={styles.navButton}>Contact</button>
        </div>
      </div>
      <main style={styles.main}>
        <ChatComponent />
      </main>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: "url('/bg.png')", // Correct relative path for files in the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
  },
  navbar: {
    width: "100%",
    backgroundColor: "rgba(255, 240, 221, 0.8)", // Soft transparent color
    backdropFilter: "blur(2px)", // Apply blur effect
    display: "flex", // Use flexbox for layout
    alignItems: "center",
    justifyContent: "space-between", // Space between title and buttons
    padding: "10px 20px",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    zIndex: 10,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
  },
  navTitle: {
    fontSize: "1.5rem",
    color: "#4B0082",
    fontWeight: "bold",
  },
  navButtons: {
    display: "flex",
    gap: "10px", // Add spacing between buttons
  },
  navButton: {
    backgroundColor: "#FFF",
    color: "#4B0082",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  main: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "100%",
    maxWidth: "295px",
    backgroundColor: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },
};
