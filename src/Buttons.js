import React, {useState} from "react";
import { connect } from "react-redux";

function Buttons({editorRef}) {
    const [showContent, setShowContent] = useState(false);
    const [content, setContent] = useState({__html: ""});

    const getHtml = () => {
        if(!editorRef.current) return; // bail early if no ref available
        const html = editorRef.current.innerHTML;

        //Note: check if you have to sanitize the html
        setContent({__html: html});
        setShowContent(true);
    };

    const print = () => {
        if(window.confirm("Check your content before printing")) {
            const body = document.body;
            body.style.whiteSpace = "pre";
            window.print();
            window.location.reload();
        }
    };

    return (
        <>
            <div className="center">
                <button className="btn" onClick={getHtml}>GetHtml</button>
                <button className="btn" onClick={print}>Print</button>
            </div>

            <div className="center">
                <section
                    className="getcontent"
                    style={{display: showContent ? "block" : "none"}}
                    dangerouslySetInnerHTML={content}
                />
                <code>{content.__html}</code>
            </div>

        </>
    )
}

export default connect(state => ({editor: state.editor}), {})(Buttons);