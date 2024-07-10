import Provider from "@/common/providers";
import React from "react";
import ReactDOM from "react-dom/client";

import AppModule from "./modules";

import "@/common/styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider>
			<AppModule />
		</Provider>
	</React.StrictMode>,
);
