import emailjs from '@emailjs/browser';
import { FormEvent } from "react";

export const sendEmail = (form: React.RefObject<HTMLFormElement>) => {
    if (!form) return;
    
    const service_id: string = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const template_id: string = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const public_key: string = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
	emailjs
		.sendForm(
			service_id,
			template_id,
			form.current,
            {
                publicKey: public_key
            }
		)
		.then(() => {
			alert("Message sent!");
            form.current.reset()
		})
		.catch((err) => {
			console.error(err);
			alert("Error al enviar el mensaje.");
		});
};
