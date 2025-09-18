import React from "react";

const ContentCard = ({ title, description, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <button style={styles.button}>Read More</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "20px",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ContentCard;