import axios from "axios";
import { Env } from "@stencil/core";
const apiUrl = Env.API_URL;
export async function fetchWidgetDetails(id) {
    const response = await axios.get(`${apiUrl}/elements/${id}`);
    return response.data;
}
export async function createPaymentIntent({ amount, elementId }) {
    const response = await axios.post(`${apiUrl}/payment/intent`, { amount, elementId });
    return response.data;
}
//# sourceMappingURL=services.js.map
