import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import React, { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Meeting AI Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box mt={4}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
