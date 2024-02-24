import { API_ENDPOINTS } from "@/constants/apiEndpoints";

export const HomeTemplate = () => {
	// Test connection with Server
	fetch(`${API_ENDPOINTS.LOCAL}/getUser`)
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));

	return <div>Check it matey</div>;
};
