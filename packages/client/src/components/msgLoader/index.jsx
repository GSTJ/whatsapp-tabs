import React from "react"
import ContentLoader from "react-content-loader"

export default props => (
    <ContentLoader
        speed={2}
        height={40}
        style={{
            height: 40,
            width: "100%",
            marginLeft: -8
        }}
        rtl
        preserveAspectRatio='xMinYMin meet'
        primaryColor="#a3ead0"
        secondaryColor="#57e0ae"
        {...props}
    >
        <rect x="48" y="2" rx="3" ry="3" width="41" height="6" />
        <rect x="95" y="2" rx="3" ry="3" width="59" height="6" />
        <rect x="161" y="2" rx="3" ry="3" width="6" height="6" />
        <rect x="57" y="14" rx="3" ry="3" width="77" height="6" />
        <rect x="140" y="14" rx="3" ry="3" width="77" height="6" />
        <rect x="57" y="26" rx="3" ry="3" width="53" height="6" />
        <rect x="116" y="26" rx="3" ry="3" width="35" height="6" />
        <rect x="158" y="26" rx="3" ry="3" width="35" height="6" />
        <circle cx="20" cy="20" r="20" />
        <circle cx="100" cy="49" r="0" />
    </ContentLoader>
)