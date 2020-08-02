import { Input, Menu, Container } from "semantic-ui-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Menu stackable fluid id="menu" inverted>
        <Container>
          <Menu.Item>
            <Link href="/">
              <a> Home </a>
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}
