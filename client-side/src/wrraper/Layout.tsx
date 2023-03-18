import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../components/Container";
import Header from "../components/header/Header";

const Layout: FC = () => {
  return (
    <>
      <Container>
        <main>
          <Header />
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
