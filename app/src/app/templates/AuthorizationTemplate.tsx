import { TheHeader } from "@/components/TheHeader";

export const AuthorizationTemplate = ({ children }: any) => {
	return (
		<>
			<TheHeader />
			<div className="h-screen w-full flex justify-center items-center bg-white-default p-4">
				{children}
			</div>
		</>
	);
};
