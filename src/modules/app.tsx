import { Catalog } from "@/modules/catalog/presenters";
import { RootBoundary } from "@/modules/error/presenters";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Catalog />,
		errorElement: <RootBoundary />,
	},
]);

export function AppModule() {
	return <RouterProvider router={router} />;
}
