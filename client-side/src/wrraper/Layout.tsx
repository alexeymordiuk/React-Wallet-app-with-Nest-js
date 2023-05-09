import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../components/ui/Container";
import Header from "../components/header/Header";
import { Wrraper } from "../components/ui/Wrraper";


const Layout: FC = () => {
  return (
    <>
      <Container>
        <main>
          <Wrraper>
          <Outlet />
          <Header />
          </Wrraper>
        </main>
      </Container>
    </>
  );
};

export default Layout;
