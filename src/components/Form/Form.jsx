import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import toast from "react-hot-toast";

export const Form = () => {
  const form = useRef();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    // Don't Mind my long if statement
    if (fullname === "") {
      toast.error("Please Complete the Form");
      return;
    } else if (email === "") {
      toast.error("Please Complete the Form");
      return;
    } else if (message === "") {
      toast.error("Please Complete the Form");
      return;
    } else {
      //   Replace all keys and ids with yours
      emailjs
        .sendForm(
          "email_text_react",
          "template_22hst2q",
          form.current,
          "5ZGfzJcTkaAGJpQTs"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Successfully Submitted");
            setEmail("");
            setFullName("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="text-center form-container pt-5 mt-5">
      <main className="form-signin w-100 m-auto pt-3">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="h3 mb-3 fw-normal">Contact me 😁</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputName"
              placeholder="John Doe"
              name="user_name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="floatingInputName">Full name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-4">
            <textarea
              type="password"
              className="form-control"
              id="floatingTextarea"
              placeholder="Message"
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea">Message</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            value="Send"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  );
};
