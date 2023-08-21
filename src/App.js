import React from "react";
import "./App.css";
import Button from "./Components/Modal";
import PageNotFound from "./Components/NotFound";
import Delete from "./Components/HandleCard";
import CardDetail from "./Components/CardDetail";
import EditItem from "./Components/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentComponent from "./Components/EditDelete";
// import { useState } from "react";
// import axios from "axios";
// const url = "https://api.cloudinary.com/v1_1/dvdmubcjl/image/upload";

// export default function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const uploadFile = (e) => {
//     e.preventDefault();

//     let filesCopy = selectedFiles.slice();

//     console.log({ selectedFiles });

//     for (let i = 0; i < selectedFiles.length; i++) {
//       let formData = new FormData();
//       let file = selectedFiles[i];
//       console.log({ file });
//       formData.append("file", file);
//       formData.append("upload_preset", "fbl82nnu");

//       axios.post(url, formData).then((res) => {
//         console.log(res.data);
//         setSelectedFiles([]);
//       });
//     }
//   };

//   return (
//     <div className="App">
//       <Router>
//         {/* <Upload /> */}
//         <Routes>
//           <Route path="/" element={<Button />} />
//           <Route path="/NotFound" element={<PageNotFound />} />
//           <Route path="/Detail" element={<CardDetail />} />
//           <Route path="/Delete" element={<Delete />} />
//           <Route path="/Edit" element={<EditItem />} />
//           <Route path="/EditDelete" element={<ParentComponent />} />
//         </Routes>
//         <ParentComponent />
//       </Router>

//       <form onSubmit={uploadFile}>
//         <input
//           type="file"
//           onChange={(e) => {
//             let newFilesArray = [];
//             let { files } = e.target;

//             console.log(files);

//             let length = files.length;
//             for (let i = 0; i < length; i++) {
//               let currentFile = files[i];
//               newFilesArray.push(currentFile);
//               console.log({ currentFile });
//             }

//             setSelectedFiles(newFilesArray);
//           }}
//           multiple
//         />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/NotFound" element={<PageNotFound />} />
        <Route path="/Detail" element={<CardDetail />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Edit" element={<EditItem />} />
        <Route path="/EditDelete" element={<ParentComponent />} />
      </Routes>
      <ParentComponent />
    </Router>
  );
}

export default App;
