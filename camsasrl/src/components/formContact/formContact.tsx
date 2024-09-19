import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { FormContactProps } from "../props/formContact/formContactProps";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "../../styles";

const FormContact: React.FC<FormContactProps> = ({ onSuccess }) => {
    const [formControl, setFormControl] = useState({
        name: "",
        email: "",
        message: "",
    });

    const serviceID = 'service_w6wdapd';
    const templateID = 'template_zm1z7q4';
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        // Validación del campo Email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formControl.email)) {
            toast.error("Por favor, introduce una dirección de correo electrónico válida.");
            return;
        }

        if (form.current) {
            emailjs
            .sendForm(serviceID, templateID, form.current, "5_qXvhPuX4Xyj9IFk")
            .then((result) => {
                console.log(result.text);
                resetForm();
                toast.success("!Tu Mensaje fue enviado con éxito!");
                onSuccess(); // Llamamos a onSuccess para manejar la acción exitosa desde el componente padre
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje", error);
                toast.error("Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente más tarde.");
            });
        }
    };

    const resetForm = () => {
        setFormControl({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        let isValid = true;
        let errorMessage = "";

        // Validación del campo Nombre
        if (name === "name") {
            if (/[^a-zA-Z\s]/.test(value) || value.length > 20) {
                isValid = false;
                errorMessage = "El campo Nombre solo acepta letras y espacios, con un máximo de 20 caracteres.";
            }
        }

        // Validación del campo Mensaje
        if (name === "message") {
            if (value.length > 300) {
                isValid = false;
                errorMessage = "El campo Mensaje solo puede tener un máximo de 300 caracteres.";
            }
        }

        if (isValid) {
            // Actualizamos el estado del formulario solo si la entrada es válida
            setFormControl({
                ...formControl,
                [name]: value,
            });
        } else {
            toast.error(errorMessage);
        }
    };

    return (
        <form onSubmit={sendEmail} ref={form}>
            <div className="mt-3 position-relative">
                <input
                    type="text"
                    className="custom-input"
                    placeholder=" "
                    required
                    value={formControl.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                />
                <label htmlFor="name" className="custom-label fs-5 ms-2">
                    Nombre
                </label>
            </div>
            <div className="mt-4 position-relative">
                <input
                    type="text"
                    className="custom-input"
                    placeholder=" "
                    name="email"
                    id="email"
                    value={formControl.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email" className="fs-5 ms-2 custom-label">
                    Email
                </label>
            </div>
            <div className="my-3 position-relative">
                <textarea
                    className="custom-input custom-area"
                    placeholder=" "
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    value={formControl.message}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message" className="custom-label fs-5 ms-2">
                    Mensaje
                </label>
            </div>
            <div className="col text-center text-lg-end">
                <button
                    type="submit"
                    className="mt-5 mt-md-1 button-thirdy"
                    id="button"
                    value="Send Email"
                    aria-label="Enviar formulario de contacto"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default FormContact;
