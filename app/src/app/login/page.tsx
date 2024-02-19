import { AuthorizationTemplate } from "@/templates/AuthorizationTemplate";
import { Login } from "@/components/Login";

export default function page() {
	return (
		<AuthorizationTemplate>
			<Login />
		</AuthorizationTemplate>
	);
}
