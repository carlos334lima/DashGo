import axios from "axios";

//@utils
import { dashGo } from "@/utils/constants";

export const api = axios.create({
  baseURL: `${dashGo.baseUrl}/api`,
});
