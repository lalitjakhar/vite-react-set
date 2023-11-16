import React from "react";
import Homecontent from "../../../src/assets/homecontent.avif";
import { Box, Button, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box>
        <img
          src={Homecontent}
          draggable="false"
          alt="Cafe"
          style={{ width: "100%", height: "692px" }}
        />
        <Box sx={{ padding: "1rem" }}>
          <Typography variant="h5">Grit Coffee Roasting Company</Typography>
          <Typography variant="subtitle2" paddingBlock={2}>
            Café Coffee Day, a part of Coffee Day Global Limited, is India’s
            favourite hangout for coffee and conversations. Popularly known as
            CCD, we strive to provide the best experience to our guests. Our
            coffees are sourced from thousands of small coffee planters, who
            made us who we are today and we're glad to be a part of their lives.
            We opened our first cafe in 1996 at Brigade Road in Bangalore – the
            youth and the young at heart immediately took to the cafe, and it
            continues to be one of the most happening places in the city. CCD to
            the youth is a “hangout” spot where they meet people, make
            conversations, and have a whole lot of fun over steaming cups of
            great coffee.It's been an exciting journey since then to becoming
            the largest organised retail cafe chain in the country.
          </Typography>
          <Button variant="contained" color="success">
            Check This
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
