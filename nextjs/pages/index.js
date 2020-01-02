import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/LargeLayout';
import Banner from '../components/Banner';
import Section1Name from '../components/Section1';
import Section2Name from '../components/Section2';

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Banner/>
        <Section1Name/>
        <Section2Name/>
      </Container>
    </Layout>
  );
}
