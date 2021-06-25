import React from 'react'

const ErrorSpan : React.FC<{content:string}> = ({content}) => {
    const errorStyle = {
        color : "red",
        font : "bold",
        marginTop:"15px",
        border:"1px solid black"
    }
    return (
        <div>
             <span style={errorStyle}>{content}</span>
        </div>
    )
}

export default ErrorSpan
