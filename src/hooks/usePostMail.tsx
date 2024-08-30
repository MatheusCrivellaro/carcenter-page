import axios from "axios";
import {EmailBody} from "../interfaces/EmailBody.ts";
import {useMutation} from "@tanstack/react-query";

const URL_API = "https://matheuscrivellaro.online/mail"

const postMail = async (email: EmailBody) => {
    return await axios.post(URL_API, email)
}

export function usePostMail() {
    return useMutation({
        mutationFn: postMail
    });
}
