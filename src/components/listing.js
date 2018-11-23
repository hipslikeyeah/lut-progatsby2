import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

import Image from '../components/image'

const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, .05);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;

    a {
        color: black;
        text-decoration: none;
    }

    a.read-more {
        font-family: Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524763;
    }

    a.read-more:hover {
        text-decoration: none;
    }

    h2 {
        margin-bottom: 0;
    }

    p {
        font-size: 0.8rem;
    }
`;

const LISTING_QUERY = graphql`
query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: {
          order:DESC,
          fields: [frontmatter___date]
      }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(({node}) => (
            <Post key={node.frontmatter.slug}>
                <Link to={`/posts${node.frontmatter.slug}`}>
                    <h2>{node.frontmatter.title}</h2>
                </Link>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>Read More</Link>
            </Post>
        ))
    )}
  />
)

export default Listing
