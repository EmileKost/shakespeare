import { AuthorizationTemplate } from "@/templates/AuthorizationTemplate";
import { Register } from "@/components/Register";

export default function page() {
	return (
		<AuthorizationTemplate>
			<Register />
		</AuthorizationTemplate>
	);
}
