import React, {useState} from "react";
import { connect } from "react-redux";

function Buttons({editorRef}) {
    const [showContent, setShowContent] = useState(false);
    const [content, setContent] = useState({});

    const getHtml = () => {
        if(!editorRef.current) return; // bail early if no ref available
         const html = editorRef.current.innerHTML;
        //Note: check if you have to sanitize the html
        setContent({ __html : html });
        setShowContent(true);
    };

    const getText = () => {
        if(!editorRef.current) return; // bail early if no ref available
        const text = editorRef.current.textContent;
        //Note: check if you have a sanitize the text
        setContent({ __text: text });
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
                <button className="btn" onClick={getText}>GetText</button>
                <button className="btn" onClick={print}>Print</button>
            </div>

            <div className="center section-to-print">
                <section
                    className="displayContent"
                    style={{display: showContent ? "block" : "none"}}>
                    <span>
                        {content.__html || content.__text}
                    </span>
                </section>

            </div>

        </>
    )
}

export default connect(state => ({editor: state.editor}), {})(Buttons);