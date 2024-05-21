// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { Notice, Plugin } from "obsidian";

export default class samplePlugin extends Plugin {
	onload(): void {
		new Notice("Sample plugin loaded");
	}

	unload(): void {
		new Notice("Sample plugin disabled");
	}

	// renderRoot() {
	// 	ReactDOM.createRoot(document.getElementById("root")!).render(
	// 		<React.StrictMode>
	// 			<App />
	// 		</React.StrictMode>
	// 	);
	// }
}
