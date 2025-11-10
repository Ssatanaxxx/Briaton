import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClietnt = new QueryClient()

const LazyApp = lazy(() => import("./App"))

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClietnt}>
			<Suspense fallback={<div>Loading</div>}>
				<LazyApp />
			</Suspense>
		</QueryClientProvider>
	</React.StrictMode>
);
