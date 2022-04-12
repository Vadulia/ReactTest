import "./App.css";
import TourCards from "./componerts/TourCards";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




function App () {
  return (
    <div className='App'>
        <Container sx={{marginY:15}}>
         <Grid container spacing={4}>
      <TourCards />
      <TourCards />
      <TourCards />
      <TourCards />
      </Grid>
      </Container>
    </div>
  );
}

export default App;