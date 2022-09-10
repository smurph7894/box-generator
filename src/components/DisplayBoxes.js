import React, { useState } from 'react';

const DisplayBoxes = (props) => {
    const { boxes } = props;

    return (
        <>
            {boxes.map((box,index) => {
                const styles = { 
                    backgroundColor: box.color,
                    width: box.width,
                    height: box.height,
                    margin: "1rem",
                    display: "inline-block"
                };
                const iterator = [...Array(box.num)];
                // the above return, results in an array with num length filled with undefined values
                // console.log([...Array(4)])
                // [undefined, undefined, undefined, undefined]
                console.log(iterator)

                return iterator.map((_,index2) => {
                // underscore is a method for telling VS code that there is ment to be a argument there but you are not going to use it
                    return <div key={`${index}-${index2}`} style={styles}/>;
                });
            })}
        </>
    );
};

export default DisplayBoxes;