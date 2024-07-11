import { env } from "@/env";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: env.VITE_API_ENDPOINT,
});
