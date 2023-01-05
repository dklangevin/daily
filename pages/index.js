import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Nav from "components/Nav";
import Grid from "components/Grid";

export default function Home() {
  return (
    <Container>
      <Nav />
      <Grid />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
