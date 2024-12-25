import React from "react";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.submit(data);
  };
  return (
    <div>
      <h2 className="text-2xl text-center py-8  font-semibold">
        {" "}
        Contact page
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.32108528509!2d88.35217127475697!3d22.567091333173263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b52ead295b%3A0x1036b7df44d2b861!2sE-Mall!5e0!3m2!1sen!2snl!4v1733628362473!5m2!1sen!2snl"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container flex justify-center items-center">
        <form
          action="https://formspree.io/f/xnnqyjnj"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 mt-4  px-40"
          method="POST"
        >
          <h2 className="text-3xl font-bold text-center my-5">Contact Us</h2>
          <div className="">
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "value must greater than 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z" "]+$/i,
                  message: "numbers are not applicable",
                },
              })}
              type="text"
              placeholder="Username"
              autoComplete="off"
              className={
                !errors.username
                  ? `border border-black p-2 rounded-md w-[300px]  `
                  : "border-2 border-red-600 p-2 rounded-md  outline-red-600 bg-red-50 w-[300px] "
              }
            />
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 6,
                  message: "invalid",
                },
                pattern: {
                  value:
                    /^[A-Za-z][A-Za-z0-9._%+-]*@(gmail\.com|yahoo\.com|hotmail\.com)$/,
                  message: `Enter a valid email. `,
                },
              })}
              type="email"
              placeholder="Email"
              autoComplete="off"
              className={
                !errors.username
                  ? `border border-black p-2 rounded-md w-[300px]  `
                  : "border-2 border-red-600 p-2 rounded-md  outline-red-600 bg-red-50 w-[300px] "
              }
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <textarea
              {...register("textarea", { required: "Message is required" })}
              placeholder="Enter your message"
              cols="36"
              rows="6"
              autoComplete="off"
              className={
                !errors.username
                  ? `border border-black p-2 rounded-md w-[300px]  `
                  : "border-2 border-red-600 p-2 rounded-md  outline-red-600 bg-red-50 w-[300px] "
              }
            ></textarea>
            {errors.textarea && (
              <p className="text-red-600">{errors.textarea.message}</p>
            )}
          </div>
          <input
            type="submit"
            value="submit"
            className="bg-violet-500 text-white px-4 py-3 mx-auto rounded-sm font-bold hover:bg-violet-400"
          />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
