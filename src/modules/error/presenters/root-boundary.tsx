import { ErrorSection } from "@/modules/error/composites/error-section";
import { ErrorLayout } from "@/modules/error/layouts/error-layout";

import { TypographyH2 } from "@/common/components/ui/h2";

import { isRouteErrorResponse, useRouteError } from "react-router";

const errorDisplay = {
	statusCode: 500,
	title: "Internal Server Error",
	description:
		"Oops! There was a problem on our end. The page will be back very soon!",
};

export function RootBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		errorDisplay.statusCode = error.status;

		if (error.status === 404) {
			errorDisplay.title = "Page Not Found";
			errorDisplay.description =
				"Oops! Looks like you have stumble across a page that does not exist in our universe.";
		}

		if (error.status === 401) {
			errorDisplay.title = "Unauthorized";
			errorDisplay.description = "You are not authorized to see this page!";
		}

		if (error.status === 503) {
			errorDisplay.title = "Service Unavilable";
			errorDisplay.description =
				"Looks like our service is not available at the moment.";
		}

		if (error.status === 418) {
			errorDisplay.title = "I am a teapot";
			errorDisplay.description =
				"Cannot brew your coffee! You might to have to ask for something else!";
		}
	}

	return (
		<ErrorLayout>
			<ErrorSection
				className="space-y-4"
				icon={
					<p className="text-[18rem] font-extrabold leading-none text-primary">
						{errorDisplay.statusCode}
					</p>
				}
				title={
					<TypographyH2 className="text-nowrap font-extrabold uppercase tracking-widest text-primary">
						{errorDisplay.title}
					</TypographyH2>
				}
				description={errorDisplay.description}
			/>
		</ErrorLayout>
	);
}
