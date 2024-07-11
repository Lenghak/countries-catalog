import { Skeleton } from "@/common/components/ui/skeleton";

import { cn } from "@/common/lib/utils";

import { Fragment, type HTMLAttributes, useState } from "react";

type ImageProps = HTMLAttributes<HTMLImageElement> & {
	src: string;
	alt: string;
};

export function Image({ className, alt, ...props }: ImageProps) {
	const [isImageLoaded, setImageLoaded] = useState<boolean>(false);

	return (
		<Fragment>
			<img
				className={cn(
					"transition-all",
					!isImageLoaded ? "invisible !max-h-0 !max-w-0" : "visible",
					className,
				)}
				{...props}
				alt={alt}
				onLoad={(e) => {
					setImageLoaded(true);
					props.onLoad?.(e);
				}}
			/>

			{!isImageLoaded && (
				<Skeleton className={cn("h-full w-full", className)} />
			)}
		</Fragment>
	);
}
