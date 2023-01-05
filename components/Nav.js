import styled from "styled-components";
import { Logo } from "../icons";
import Link from "next/link";

export default function Nav() {
  return (
    <Container>
      <Link href="/">
        <DailyLogo />
      </Link>
      <List>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/goals">Goals</Link>
        </ListItem>
      </List>
    </Container>
  );
}

const Container = styled.nav`
  background: #333333;
  height: 80px;
  display: flex;
  align-items: center;
`;

const DailyLogo = styled(Logo)`
  height: 40px;
  padding-inline: 16px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  padding-inline: 16px;
  height: 100%;
`;

const ListItem = styled.li`
  font-size: 22px;
  font-weight: 800;
  padding: 8px;
`;
