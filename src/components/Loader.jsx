function Loader() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh"
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #ddd",
    borderTop: "6px solid #333",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
}

export default Loader