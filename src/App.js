import "./App.css";
import Nav from "./components/Nav";
import PermanentDrawerLeft from "./components/Sidebar";
import { Container, Grid, Paper } from "@mui/material";
import BasicCard from "./components/Card";

const styles = {
  paperContainer: {
    height: "20rem",
    backgroundColor: "#2b76d2",
    display: "flex",

    backgroundRepeat: "no-repeat",
  },
};

function App() {
  return (
    <div className="app">
      <Nav />
      <Paper style={styles.paperContainer}>
        <Container sx={{ display: "flex" }}>
          <PermanentDrawerLeft />{" "}
          <Grid
            container
            spacing={4}
            sx={{ mt: 20, gap: 2, flex: 1, mb: 3, ml: 5 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (index) => {
                return <BasicCard key={index} />;
              }
            )}
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default App;
