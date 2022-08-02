import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui/Navbar";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({
  title = "OpenJira",
  children,
}) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar></Navbar>
      <Box sx={{ padding: "10px 20 px" }}>{children}</Box>
    </Box>
  );
};
