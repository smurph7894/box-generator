import React, { useState } from "react";

const AddBox = (props) => {
    const { onNewBox } = props;
    const[boxColor, setBoxColor] = useState("");
    const[boxWidth, setBoxWidth] = useState("");
    const[boxHeight, setBoxHeight] = useState("");
    const[boxNum, setBoxNum] = useState("");

    const handleAddBox = (e) => {
        onNewBox({ 
            color: boxColor || "blue",
            width: boxWidth || "100px",
            height: boxHeight || "100px",
            num: Number(boxNum) || 1
        });
        e.preventDefault();
        console.log("it works");
        setBoxColor("")
        setBoxWidth("")
        setBoxHeight("")
        setBoxNum("")
        // if you have setBoxColor at the end of the function being called from the onSubmit it will reset the value after the data has been submitted, making the input section blank or whatever argument you put in
    }

    return (
        <form onSubmit={handleAddBox}>
            <div>
                <label>Color: </label>
                <input
                    onChange={ (e) => setBoxColor(e.target.value)}
                    value={boxColor}
                    style={{ width: "250px", margin: "1rem 0rem" }}
                    placeholder={"i.e. blue, red, green"}
                />
            </div>
            <div>
                <label>Width: </label>
                <input
                    onChange={ (e) => setBoxWidth(e.target.value)}
                    value={boxWidth}
                    style={{ width: "250px", margin: "1rem 0rem" }}
                    placeholder={"i.e. 100px, 100em, 100rem, 100vw, 10%"}
                />
            </div>
            <div>
                <label>Height: </label>
                <input
                    onChange={ (e) => setBoxHeight(e.target.value)}
                    value={boxHeight}
                    style={{ width: "250px", margin: "1rem 0rem" }}
                    placeholder={"i.e. 100px, 100em, 100rem, 100vh, 10%"}
                />
            </div>
            <div>
                <label>Number of Boxes: </label>
                <input
                    onChange={ (e) => setBoxNum(e.target.value)}
                    value={boxNum}
                    style={{ width: "250px", margin: "1rem 0rem" }}
                    type={"number"}
                />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
};

export default AddBox;