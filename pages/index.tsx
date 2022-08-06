import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="Pending" />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
