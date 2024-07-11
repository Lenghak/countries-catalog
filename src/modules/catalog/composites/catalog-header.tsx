import { cn } from "@/common/lib/utils";

import { buttonVariants } from "@ui/button";
import { Separator } from "@ui/separator";

import { Logo } from "@custom/logo";
import { ThemeToggle } from "@custom/theme-toggle";

import type { HTMLAttributes } from "react";
import { IoLogoGithub } from "react-icons/io5";

type Props = HTMLAttributes<HTMLDivElement>;

export function CatalogHeader({ className, ...props }: Props) {
	return (
		<header
			className={cn(
				"flex w-full items-center justify-between gap-4 p-4",
				className,
			)}
			{...props}
		>
			<nav className="flex w-fit items-center justify-center">
				<Logo />
			</nav>

			<div className="flex w-fit items-center justify-center gap-4">
				<a
					href="https://github.com/Lenghak/countries-catalog"
					className={cn(
						buttonVariants({ variant: "ghost", size: "icon" }),
						"rounded-full",
					)}
					target="_blank"
				>
					<IoLogoGithub className="size-8" />
					<span className="sr-only">Github Link</span>
				</a>

				<Separator
					className="h-8"
					orientation="vertical"
				/>
				<ThemeToggle />
			</div>
		</header>
	);
}
