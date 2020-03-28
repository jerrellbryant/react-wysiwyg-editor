import React, {useRef} from "react";
import { connect } from "react-redux";
import {
    underline,
    italic,
    bold,
    createLink,
    cut,
    changeColor,
    undo,
    redo,
    strike,
    trash,
    selectAll,
    center,
    left,
    right,
    copy
} from "./redux";

function Toolbar(props) {
    const imgUploader = useRef(null);

    const style = {
        inputStyle: {
            "display": "none"
        }
    };

    const handleChange = e => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = React.createElement("img",{src: reader.result});
            props.onImgAdd(img);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <>
            <div className="toolbar">
                <button className="tool-items fa fa-underline" onClick={props.underline}/>
                <button className="tool-items fa fa-italic" onClick={props.italic}/>
                <button className="tool-items fa fa-bold" onClick={props.bold}/>
                <button className="tool-items fa fa-link" onClick={props.createLink}/>
                <button className="tool-items fa fa-scissors" onClick={props.cut}/>

                <input style={style.inputStyle} type="file" id={imgUploader} onChange={handleChange} />
                <label htmlFor={imgUploader} className="tool-items fa fa-file-image-o"/>

                <button className="tool-items fa fa-undo" onClick={props.undo}/>
                <button className="tool-items fa fa-repeat" onClick={props.redo}/>
                <button className="tool-items fa fa-tint" onClick={props.changeColor}/>
                <button className="tool-items fa fa-strikethrough" onClick={props.strike}/>
                <button className="tool-items fa fa-trash" onClick={props.trash}/>
                <button className="tool-items fa fa-scribd" onClick={props.selectAll}/>
                <button className="tool-items fa fa-clone" onClick={props.copy}/>
                {/*<button className="tool-items fa fa-paste" onClick={() => dispatch(paste())}/>*/}

                {/*Justify*/}

                <button className="tool-items fa fa-align-center" onClick={props.center}/>
                <button className="tool-items fa fa-align-left" onClick={props.left}/>
                <button className="tool-items fa fa-align-right" onClick={props.right}/>

            </div>
        </>
    )
}

export default connect(null,
    // state => ({editor: state.refs}),
    {
        underline,
        italic,
        bold,
        createLink,
        cut,
        undo,
        redo,
        changeColor,
        strike,
        trash,
        selectAll,
        copy,
        center,
        left,
        right
    })(Toolbar)