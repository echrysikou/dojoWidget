import axios from "axios";
import { Env } from "@stencil/core";
export async function fetchWidgetDetails(id) {
    const apiUrl = Env.API_URL;
    const response = await axios.get(`${apiUrl}/elements/${id}`);
    return response.data;
}
//# sourceMappingURL=services.js.map
