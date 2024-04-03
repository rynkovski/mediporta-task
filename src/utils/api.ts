import { toast } from "@/components/ui/use-toast";
import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api.stackexchange.com/2.3/",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast({
      title: `Error ${error.response.data.error_id}`,
      description: error.response?.data.error_message || "An error occurred",
      variant: "destructive",
    });   
    return Promise.reject(error);
  }
);

export default api;
