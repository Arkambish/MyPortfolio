import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { sendContactForm } from "../../config/db";
import { useState } from "react";
import { success, errorr } from "../../helpers/Toastify";
import { object, string } from "zod";
import { Toaster, toast } from "react-hot-toast";

const contactFormSchema = object({
  name: string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: string().email("Invalid email format"),
  subject: string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be at most 100 characters"),
  message: string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be at most 500 characters"),
});

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = contactFormSchema.safeParse(values);

    if (!validationResult.success) {
      const formattedError = validationResult.error.format();

      if (formattedError.name?._errors) {
        errorr(formattedError.name?._errors);
      } else if (formattedError.email?._errors) {
        errorr(formattedError.email?._errors);
      } else if (formattedError.subject?._errors) {
        errorr(formattedError.subject?._errors);
      } else if (formattedError.message?._errors) {
        errorr(formattedError.message?._errors);
      } else {
        errorr("An unknown error occurred in the validation process");
      }
    } else {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        await sendContactForm(values);
        success("Message sent successfully");
        setState(initState); // Reset form state on success
      } catch (e) {
        errorr("Message failed to send");
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent ">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full my-2">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="email"
                className="input"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input my-2"
              name="subject"
              value={values.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea my-2"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className={`btn rounded-full border-white/50 max-w-[170px] transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent border-2 group p-3 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
