import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import { Header } from "components";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subTitle="See your list of products." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4 , minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? undefined : "span 4",
            },
          }}
        >
          {data.map((item) => (
            <Product key={item._id} productInfo={item} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;

const Product = ({ productInfo }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textTransform: "capitalize" }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {productInfo.category}
        </Typography>
        <Typography component="div" variant="h5">
          {productInfo.name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(productInfo.price).toFixed(2)}
        </Typography>
        <Rating value={productInfo.rating} readOnly />
        <Typography variant="body2">{productInfo.description} </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>Id: {productInfo._id}</Typography>
          <Typography>Supply Left: {productInfo.supply}</Typography>
          <Typography>
            Yearly Sales This Year: {productInfo.stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {productInfo.stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
