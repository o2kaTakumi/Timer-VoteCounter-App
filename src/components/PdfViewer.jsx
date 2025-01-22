// import React, { useState } from "react";

// import '../styles/PdfViewer.css';

// function PdfViewer() {
// 	const [pdf, setPdf] = useState(null);

// 	const handleUploadPdf = (e) => {
// 		const files = e.target.files;
// 		if (files.length > 0) {
// 			const file = files[0];
// 			const reader = new FileReader();
// 			reader.onload = (e) => {
// 				setPdf(e.target.result);
// 			};
// 			reader.readAsDataURL(file);
// 		} else {
// 			setPdf(null);
// 		}
// 	};

// 	return (
// 		<div className="pdfComponent">
// 			<input type="file" accept=".pdf" onInput={handleUploadPdf} />
// 			<div className="pdfViewer">
// 				<embed src={pdf} name={pdf} type="application/pdf" width="664" height="100%" />
// 			</div>
// 		</div>
// 	);
// }

// export default PdfViewer;