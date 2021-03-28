import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CopyrightC from "../components/CopyrightC";
import BigBgC from "../components/BigBgC";
import { Typography, Divider, Link } from "@material-ui/core";
import ProductCardC from "../components/ProductCardC";
import StickersBarC from "../components/StickersBarC";
import SubscribeInputC from "../components/SubscribeInputC";
import SocialIconsC from "../components/SocialIconsC";

const bigBgC = {
  preTitle: "NEW",
  title: "Windows 10X",
  description:
    "Lightweight version of Windows 10 with unfied drivers, without support for Win32 applications",
};
const product = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHGAAhNSVNI5xm4aCDk0wBQgo9KuJmDsbWg&usqp=CAU",
    name: "Galaxy S21",
    price: "850$",
    company: "Samsung",
  },
  {
    image:
      "https://cdn.comparez-malin.fr/img/hp/2021/24614/hp-spectre-x360-14-2021-1.jpg",
    name: "HP SPECTRE X360",
    price: "900$",
    company: "Hp",
  },
  {
    image:
      "https://www.gizchina.com/mrf4u/statics/i/ps/www.gizchina.com/wp-content/uploads/images/2021/02/foldable-ip.jpg?width=1200&enable=upscale",
    name: "Iphone Flip",
    price: "1 050$",
    company: "Apple",
  },
];
export default function DashboardP() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <BigBgC infoBg={bigBgC} />
          {/* some products */}
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Typography
                component="h2"
                variant="h5"
                style={{ color: "#fff" }}
                align="center"
                noWrap>
                Special Offers
              </Typography>
              <Divider
                style={{
                  marginBottom: 25,
                  marginTop: 10,
                  height: 2,
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              />
              <Grid container spacing={4}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ProductCardC
                    key={item}
                    product={product[Math.floor(Math.random() * 3)]}
                  />
                ))}
              </Grid>
              <Link href="#" style={{ color: "#fff" }}>
                <Typography
                  component="p"
                  variant="h6"
                  style={{ color: "#fff", marginTop: 16 }}
                  align="center">
                  see more
                </Typography>
              </Link>
            </Container>
          </Grid>
          {/* brands */}
          <Grid item xs={12}>
            <Container maxWidth="md">
              <StickersBarC />
            </Container>
          </Grid>
          {/* subscribe */}
          <Grid item xs={12}>
            <Container align="center" maxWidth="md">
              <Typography
                component="h2"
                variant="h5"
                style={{ color: "#fff" }}
                align="center"
                noWrap>
                Subscribe For Any News
              </Typography>
              <Divider
                style={{
                  marginBottom: 25,
                  marginTop: 10,
                  height: 2,
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              />
              <SubscribeInputC />
              <SocialIconsC />
            </Container>
          </Grid>
        </main>
      </Container>
      <CopyrightC />
    </Fragment>
  );
}
