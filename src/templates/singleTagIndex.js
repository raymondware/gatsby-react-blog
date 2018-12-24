import React from "react"
import { graphql, Link } from 'gatsby'

const SingleTagTemplate = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      Tags here.
    </div>
  )
}

export default SingleTagTemplate
