import React, { useState } from 'react'
import './Shapes.css'

const Shapes = () => {
    const [shapeClass, setShapeClass] = useState('box');
    
    // More than 2
    const myShapes = () => {
        const shapeDeterminant = Math.floor(Math.random() * 4);
        if(shapeDeterminant === 0) { setShapeClass("box") };
        if(shapeDeterminant === 1) { setShapeClass("circle") };
        if(shapeDeterminant === 2) { setShapeClass("cylinder") };
        if(shapeDeterminant === 3) { setShapeClass("triangle") };
    }

    return (
        <div className='shapes'>
            <span className={shapeClass}></span>
            <button onClick={myShapes}>Click Me!!!</button>
        </div>
    )
    
    
    
    // Just 2 shapes .....
    // const [toggleShape, setToggleShape] = useState(true);
    
    // const myShapes = () => {
    //     setToggleShape(!toggleShape)
    // }

    // return (
    //     <div className='shapes'>
    //         <span className={toggleShape ? "box" : "circle"}></span>
    //         <button onClick={myShapes}>Click Me!!!</button>
    //     </div>
    // )
}

export default Shapes
