import React from "react"
import ContentLoader from "react-content-loader"

const JobListingLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={640}
    height={458}
    viewBox="0 0 640 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="35" rx="3" ry="3" width="584" height="26" /> 
    <rect x="0" y="0" rx="2" ry="2" width="62" height="15" /> 
    <rect x="0" y="66" rx="3" ry="3" width="247" height="26" /> 
    <rect x="0" y="116" rx="2" ry="2" width="124" height="15" /> 
    <rect x="133" y="116" rx="2" ry="2" width="108" height="15" /> 
    <rect x="250" y="116" rx="2" ry="2" width="179" height="15" /> 
    <rect x="0" y="181" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="293" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="424" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="201" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="313" rx="2" ry="2" width="569" height="14" /> 
    <rect x="0" y="444" rx="2" ry="2" width="569" height="14" /> 
    <rect x="0" y="221" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="352" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="333" rx="2" ry="2" width="640" height="14" /> 
    <rect x="0" y="240" rx="2" ry="2" width="443" height="15" /> 
    <rect x="0" y="371" rx="2" ry="2" width="443" height="15" />
  </ContentLoader>
)

export default JobListingLoader

