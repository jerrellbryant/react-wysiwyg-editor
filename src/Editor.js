import React, {useState, useRef} from "react";
import Toolbar from "./Toolbar";
import Buttons from "./Buttons";
import { connect } from "react-redux";


function Editor(props) {
    const editorRef = useRef(props.editor);

    const [introText] = useState("Simple React Editor");
    const [subText] = useState("Good to start");
    const [images, setImages] = useState([]);

    const getStyles = () => {
        const BLACK = "#000000";
        const VW = "vw";
        const VH = "vh";
        const REM = "rem";

        return {
            width: `70${VW}`,
            height: `50${VH}`,
            margin: `2${REM}`,
            padding: `1${REM}`,
            fontSize: `1.2${REM}`,
            boxShadow: `0 .1${REM} .4rem ${BLACK}`,
            border: `1px solid ${BLACK}`,
            overflowY: `auto`
        };
    };

    const editorStyle = getStyles();

        return (
            <>
                <Toolbar onImgAdd={img => setImages(images => images.concat(img))}/>

                <div className="center section-to-print">
                    <div
                        ref={editorRef}
                        style={editorStyle}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                    >
                        <h1>{introText}</h1>
                        <p>{subText}</p>
                        {images.map((img) => <div>{img}</div>)}
                    </div>
                </div>

                <Buttons editorRef={editorRef}/>
            </>
        )
    }

export default connect(state => ({editor: state.editor}), {})(Editor)