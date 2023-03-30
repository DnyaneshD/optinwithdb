import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={320}
    viewBox="0 0 300 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <path d="M 10 0 h 248 c 23.196 0 42 18.804 42 42 v 268 c 0 5.523 -4.477 10 -10 10 H 42 c -23.196 0 -42 -18.804 -42 -42 V 10 C 0 4.477 4.477 0 10 0 z" />
  </ContentLoader>
)

export default MyLoader

