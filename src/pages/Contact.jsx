import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactImg from "/contactImg.png"

const ContactSection = () => {

  // VALIDATION
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name is too short")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    phone: Yup.string()
      .min(11, "Phone number is invalid")
      .required("Phone number is required"),

    subject: Yup.string()
      .required("Please select subject"),

    stay: Yup.string()
      .required("Date of stay is required"),

    leave: Yup.string()
      .required("Date of leave is required"),

    activities: Yup.string()
      .required("Please add activities"),

    message: Yup.string()
      .min(10, "Message is too short")
      .required("Message is required"),
  });

  return (
    <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-20 font-serif overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-6 mb-16">

        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#C56B51]"
            ></span>
          ))}
        </div>

        <p className="uppercase tracking-[0.2em] text-sm text-[#0f1d35]">
          Contact Us
        </p>
      </div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl leading-none text-[#0f1d35] max-w-4xl mb-20"
      >
        LET’S MAKE YOUR VISIT UNFORGETTABLE
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              subject: "",
              stay: "",
              leave: "",
              activities: "",
              message: "",
            }}

            validationSchema={validationSchema}

            onSubmit={(values, { resetForm }) => {
              console.log(values);

              alert("Form Submitted Successfully");

              resetForm();
            }}
          >
            {({ touched, errors }) => (

              <Form className="space-y-8">

                {/* ROW 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* NAME */}
                  <div>
                    <label className="block text-xl text-[#0f1d35] mb-3">
                      Your name
                    </label>

                    <Field
                      type="text"
                      name="name"
                      placeholder="E.g. Alonso dowson"
                      className={`w-full border px-5 py-5 outline-none bg-transparent
                      ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />

                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xl text-[#0f1d35] mb-3">
                      Business email
                    </label>

                    <Field
                      type="email"
                      name="email"
                      placeholder="E.g. info@mail.com"
                      className={`w-full border px-5 py-5 outline-none bg-transparent
                      ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* PHONE */}
                  <div>
                    <label className="block text-xl text-[#0f1d35] mb-3">
                      Phone number
                    </label>

                    <Field
                      type="text"
                      name="phone"
                      placeholder="E.g. +923001234567"
                      className={`w-full border px-5 py-5 outline-none bg-transparent
                      ${
                        touched.phone && errors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />

                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label className="block text-xl text-[#0f1d35] mb-3">
                      Subject
                    </label>

                    <Field
                      as="select"
                      name="subject"
                      className={`w-full border px-5 py-5 outline-none bg-transparent
                      ${
                        touched.subject && errors.subject
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Subject</option>
                      <option value="Booking">Booking</option>
                      <option value="Room Service">Room Service</option>
                      <option value="Event">Event</option>
                    </Field>

                    <ErrorMessage
                      name="subject"
                      component="p"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* STAY */}
                  <div>
                    <label className="block text-xl text-[#0f1d35] mb-3">
                      Date of stay
                    </label>

                    <Field
                      type="date"
                      name="stay"
                      className={`w-full border px-5 py-5 outline-none bg-transparent
                      ${
                        touched.stay && errors.stay
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />

                    <ErrorMessage
                      name="stay"
                      component="p"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  {/* LEAVE */}
                  <div>
                    <label className="block text-xl text-[#0f1d35] mb-3">
                      Date of leave
                    </label>

                    <Field
                      type="date"
                      name="leave"
                      className={`w-full border px-5 py-5 outline-none bg-transparent
                      ${
                        touched.leave && errors.leave
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />

                    <ErrorMessage
                      name="leave"
                      component="p"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                </div>

                {/* ACTIVITIES */}
                <div>
                  <label className="block text-xl text-[#0f1d35] mb-3">
                    Add on Activities & Services
                  </label>

                  <Field
                    as="textarea"
                    rows="4"
                    name="activities"
                    placeholder="E.g. Running, Swimming, Etc."
                    className={`w-full border px-5 py-5 outline-none bg-transparent resize-none
                    ${
                      touched.activities && errors.activities
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <ErrorMessage
                    name="activities"
                    component="p"
                    className="text-red-500 text-sm mt-2"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xl text-[#0f1d35] mb-3">
                    Message
                  </label>

                  <Field
                    as="textarea"
                    rows="7"
                    name="message"
                    placeholder="E.g. Your message"
                    className={`w-full border px-5 py-5 outline-none bg-transparent resize-none
                    ${
                      touched.message && errors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-sm mt-2"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="bg-[#001a33] text-white px-10 py-5 uppercase tracking-widest text-sm hover:opacity-90 transition"
                >
                  Submit Form
                </button>

              </Form>
            )}
          </Formik>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-5"
        >

          {/* INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-[#ece7e3] p-8 flex items-start gap-5">
              <div className="bg-[#C56B51] p-5 text-white">
                <MapPin size={28} />
              </div>

              <div>
                <h3 className="text-2xl text-[#0f1d35] mb-2">
                  Address:
                </h3>

                <p className="text-gray-600">
                  123 Finance Street, New York
                </p>
              </div>
            </div>

            <div className="bg-[#ece7e3] p-8 flex flex-col items-center justify-center text-center">
              <div className="bg-[#C56B51] p-5 text-white mb-6">
                <Phone size={28} />
              </div>

              <h3 className="text-2xl text-[#0f1d35] mb-2">
                Phone no:
              </h3>

              <p className="text-gray-600">
                +1 (123) 456-7890
              </p>
            </div>

          </div>

          {/* EMAIL */}
          <div className="bg-[#ece7e3] p-8 flex items-start gap-5">
            <div className="bg-[#C56B51] p-5 text-white">
              <Mail size={28} />
            </div>

            <div>
              <h3 className="text-2xl text-[#0f1d35] mb-2">
                Email address:
              </h3>

              <p className="text-gray-600">
                contact@yourcompany.com
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={ContactImg}
              alt="Luxury Room"
              className="w-full h-[620px] object-cover"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;