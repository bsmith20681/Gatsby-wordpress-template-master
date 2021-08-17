import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />

      <div className="container" style={{ padding: "4vw 0" }}>
        <div className="row">
          {posts.map((post, index) => {
            return (
              <div key={index} className="col-md-4 col-sm-12 post-card">
                <Link className="post-card-link" to={post.uri}>
                  <img
                    className={"post-card-image"}
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText}
                  />
                  <h2 className="post-card-title">{post.title}</h2>
                  <div className="post-card-excerpt">{parse(post.excerpt)}</div>
                  <div className="post-card-author">
                    <img
                      className="post-card-author_image"
                      src={post.author.node.avatar.url}
                      alt="author"
                    />
                    <p className="post-card-author_name">
                      {post.author.node.name}
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  }
`
