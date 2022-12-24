import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";

interface Values {
    name: string;
    email: string;
    message: string;
}

interface P {
    title: string;
}

const ContactFormBlock = ({ title }: P): JSX.Element => {
    const [showThankYou, setShowThankYou] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const validationSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is required"),
        message: yup.string(),
    });
    const handleSubmit = async (values: Values) => {
        let data = { ...values };
        console.log("handleSubmit");

        await validationSchema
            .validate(data)
            .then(() => {
                fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }).then((res) => {
                    if (res.status === 200) {
                        console.log("Response succeeded!");
                        setIsSubmitted(true);
                        setShowThankYou(true);
                    }
                });
            })
            .catch((err) => console.log(err));
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values: Values) => {
            handleSubmit(values);
        },
    });

    return (
        <div id="contact-me">
            {!showThankYou && (
                <div
                    className=" bg-gray md:pt-9 pt-16  relative text-white bg-cover bg-center bg-no-repeat block "
                    ref={ref}
                >
                    <div className="flex flex-col mx-auto sm:container  justify-center text-center items-center">
                        <p
                            className={`text-white leading-[65px] font-bold md:text-[48px] text-2xl relative ${
                                inView ? "fade-in-left" : ""
                            }`}
                        >
                            {title}
                        </p>
                        {/* <p
                            className={`text-lg w-[85%] lg:w-[60%] text-white sm:px-0 px-4 	 ${
                                inView ? "fade-in-bottom" : ""
                            }`}
                        >
                            {description}
                        </p> */}
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className=" text-sm  bg-gray">
                            <div className="py-8  sm:px-12 max-w-[920px] container mx-auto">
                                <div className=" flex flex-col">
                                    <div className="flex  flex-col">
                                        <div className="flex flex-col items-center justify-between relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                                className="bg-black mt-2 ml-0 py-3 pl-4 w-full text-sm md:mb-1  mb-2 "
                                            />
                                            {formik.errors.name ? (
                                                <p className="text-[#dc2626] mt-1 text-xs absolute -bottom-5 left-0">
                                                    {formik.errors.name}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Your email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                className=" ml-0 py-3 w-full pl-4 mb-2 mt-10  text-sm bg-black "
                                            />
                                            {formik.errors.email ? (
                                                <p className="text-[#dc2626] mt-1 text-xs absolute -bottom-4 left-0">
                                                    {formik.errors.email}
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                    

                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Message"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                            cols={12}
                                            rows={7}
                                            className="w-full pl-4  ml-0 p-3 bg-black text-sm mb-2 mt-10"
                                        />
                                    </div>
                                    {formik.errors.message ? (
                                        <p className="text-[#dc2626] mt-1 text-xs">
                                            {formik.errors.message}
                                        </p>
                                    ) : null}

                                    <button
                                        type="submit"
                                        disabled={isSubmitted}
                                        className="mt-10 cursor-pointer rounded-full  flex  py-2 px-16 text-red   w-full sm:w-auto sm:self-center justify-center shrink-0 text-2xl bg-blue min-w-[180px] text-center text-white hover:bg-white hover:text-blue font-bold transition duration-200"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {showThankYou && (
                <div
                    className=" bg-gray pt-60 pb-80 relative text-white bg-cover bg-center bg-no-repeat block "
                    ref={ref}
                >
                    <div className="flex flex-col mx-auto container   pt-20  justify-center text-center items-center">
                        <div className="  block  relative mt-20 bottom-24 shrink-0">
                            {/* <Image
                quality={100}
                alt="image"
                src={Vector.src}
                height={151}
                width={151}
                unoptimized
                layout="fixed"
                objectFit="contain"
              /> */}
                        </div>
                        <p
                            className={`text-white font-bold text-[24px] relative mb-10  ${
                                inView ? "fade-in-left" : ""
                            }`}
                            style={{ maxWidth: "60%" }}
                        >
                            Your message has been successfully sent!{" "}
                        </p>
                        <div
                            className={`  prose text-[16px] prose-p:text-white text-white prose-p:my-0 lg:prose-p:my-0 pl-4 sm:pl-0 pr-4 sm:pr-0 	 ${
                                inView ? "fade-in-bottom" : ""
                            }`}
                        >
                            I will get back in touch with
                            you soon! Have a great day !
                        </div>
                       
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactFormBlock;
