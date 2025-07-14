import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const LazyApp = lazy(() => import("./App"))

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading</div>}>
			<LazyApp />
		</Suspense>
	</React.StrictMode>
);
