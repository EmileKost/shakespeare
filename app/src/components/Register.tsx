export const Register = () => {
	return (
		<div className="mx-4 md:mx-2 w-full px-4 py-10 bg-black-default rounded-lg">
			<form
				action="POST"
				className="flex flex-col gap-4">
				<div>
					<label
						htmlFor="email"
						className="block text-white-default text-lg ml-2">
						Email
					</label>
					<input
						placeholder="@"
						className="w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
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
						className="w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
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
						className="w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
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
						className="w-full bg-transparent border border-white-default rounded-sm h-10 mt-1.5 placeholder:text-white-default placeholder:opacity-50 placeholder:translate-x-2"
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
