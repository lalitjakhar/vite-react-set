import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      <Box sx={{ margin: "2rem" }}>
        <Grid container spacing={2}>
          {data?.map((product, index) => {
            return (
              <Grid item xs key={index}>
                <img src={product.image} alt="" width={250} height={250} />
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      {product.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h6">{product.category}</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: "600" }}>
                    ${product.price}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="contained" color="success">
                      Add To Cart
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => navigate("/" + product?.id)}
                    >
                      Buy Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
