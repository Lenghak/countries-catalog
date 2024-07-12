import { Catalog } from "@/modules/catalog/presenters";
import { RootBoundary } from "@/modules/error/presenters";

import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/countries-catalog",
		element: <Catalog />,
		errorElement: <RootBoundary />,
		children: [
			{
				path: "/countries-catalog/countries/*",
				element: <Navigate to={"/countries-catalog"} />,
			},
		],
	},
]);

export function AppModule() {
	return <RouterProvider router={router} />;
}
