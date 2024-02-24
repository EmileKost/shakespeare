import { AuthorizationTemplate } from "@/app/templates/AuthorizationTemplate";
import { Register } from "@/components/Register";

export default function page() {
	return (
		<AuthorizationTemplate>
			<Register />
		</AuthorizationTemplate>
	);
}
