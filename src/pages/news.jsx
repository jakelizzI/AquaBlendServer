import React from 'react';
import { graphql } from 'gatsby';
import { Divider, Grid, Header } from 'semantic-ui-react';

import Layout from '../components/Layout';

export default ({ data }) => (
  <Layout>
    <Divider />
    <Grid divided centered>
      <Grid.Row>
        <Grid.Column width="10">
          <Header as="h1">Aqua Blend Server's News</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="3" textAlign="right">
          {data.allMarkdownRemark.edges[0].node.frontmatter.date}
          <br />
          {data.allMarkdownRemark.edges[0].node.frontmatter.type}
        </Grid.Column>
        <Grid.Column width="7">
          {data.allMarkdownRemark.edges[0].node.rawMarkdownBody.split('\n').map(row => (
            <p>
              {row}
              <br />
            </p>
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            date
            type
          }
          rawMarkdownBody
        }
      }
    }
  }
`;