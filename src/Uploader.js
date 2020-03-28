// import React from "react"
//
// function Uploader(props) {
//     const imgChangeHandler = e => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const img = React.createElement("img",{src: reader.result});
//             props.onImgAdd(img);
//         };
//         reader.readAsDataURL(e.target.files[0]);
//     };
//     return <input type="file" onChange={imgChangeHandler} />;
// }
//
// export default Uploader;