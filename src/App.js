import "./App.css";
import Nav from "./components/Nav";
import PermanentDrawerLeft from "./components/Sidebar";
import { Container, Grid, Paper } from "@mui/material";
import BasicCard from "./components/Card";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://images.unsplash.com/photo-1638398877139-fe9caae20f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"})`,
    height: "auto",

    display: "flex",
    width: "100%",
    backgroundRepeat: "no-repeat",
  },
};

function App() {
  return (
    <div className="app">
      <Nav />
      <Container sx={{ display: "flex" }}>
        <Paper style={styles.paperContainer}>
          <PermanentDrawerLeft />{" "}
          <Grid
            container
            spacing={4}
            sx={{ mt: 10, gap: 2, flex: 1, mb: 3, ml: 3 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return <BasicCard key={index} />;
              }
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
