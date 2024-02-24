"use client";

import { redirect } from "next/navigation";

import { API_ENDPOINTS } from "@/constants/apiEndpoints";

export const Register = () => {
	// TODO: Handle correct From submit to server and redirect to /login
	//       - What is going wrong is that just using action lets the user also
	//         get redirected. We need to update this with this function -->

	// async function handleSignUp(event: any) {
	// 	event.preventDefault();

	// 	console.log({ event });

	// 	const data = new FormData();

	// 	console.log({ data });

	// 	try {
	// 		const response = await fetch(API_ENDPOINTS.CREATE_USER, {
	// 			method: "POST",
	// 			body: data,
	// 		});

	// 		if (response.ok) redirect("/login");
	// 	} catch (error) {
	// 		console.log(`An error occurred: ${error}`);
	// 	}
	// }

	return (
		<div className="mx-4 md:mx-2 w-full px-4 py-10 bg-black-default rounded-lg">
			<form
				// onSubmit={(event) => handleSignUp(event)}
				method="get"
				action={API_ENDPOINTS.CREATE_USER}
				className="flex flex-col gap-4">
				<div>
					<label
						htmlFor="email"
						className="block text-white-default text-lg ml-2">
						Email
					</label>
					<input
						placeholder="@"
						className="text-white-default w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2 "
						type="email"
						name="email"
					/>
				</div>
				<div>
					<label
						htmlFor="firstName"
						className="block text-white-default text-lg ml-2">
						First name
					</label>
					<input
						placeholder="John"
						type="text"
						name="firstName"
						className="text-white-default w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
					/>
				</div>
				<div>
					<label
						htmlFor="lastName"
						className="block text-white-default text-lg ml-2">
						Last name
					</label>
					<input
						placeholder="Johnson"
						type="text"
						name="lastName"
						className="text-white-default w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block text-white-default text-lg ml-2">
						Password
					</label>
					<input
						type="password"
						name="password"
						className="text-white-default w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
					/>
				</div>
				<button
					type="submit"
					className="mt-4 text-white-default bg-ctaGreen p-4 rounded-sm transition-all hover:rounded-lg">
					Sign up
				</button>
			</form>
		</div>
	);
};
