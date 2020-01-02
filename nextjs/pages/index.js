import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/LargeLayout';
import Banner from '../components/Banner';
import Section1Name from '../components/Section1';
import Section2Name from '../components/Section2';
import BgParallex from '../components/BgParallex';

export default function Index() {
  return (
    <Layout>
      <Banner/>
      <Container maxWidth="lg">
        <Section1Name/>
      </Container>
      <BgParallex/>
      <Container maxWidth="lg">
        <Section2Name/>
      </Container>
    </Layout>
  );
}
