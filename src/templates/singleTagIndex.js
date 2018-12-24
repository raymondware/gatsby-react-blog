import React from "react"
import { graphql, Link } from 'gatsby'

const AllTagsTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <div>
      <h1>Posts about {`${tagName}`}</h1>
      <div>
          <ul>
              {posts.map((post, index) => {
                  return (
                      <li key={index}>
                        <Link to={post.frontmatter.path}>
                            {post.frontmatter.title}
                        </Link>
                      </li>
                  )
              })}
          </ul>
      </div>
    </div>
  )
}

export default AllTagsTemplate