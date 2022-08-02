import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components";

const HomePage: NextPage = () => {
  return (
    <Layout title="OpenJira - Dashboard">
      <Typography variant="h1">Hola Mundo</Typography>;
    </Layout>
  );
};

export default HomePage;
