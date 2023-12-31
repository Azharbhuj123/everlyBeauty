import React from "react";
import styles from "@/styles/auth.module.css";
import Button from "../../buttons/Button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { createAPIEndPoint } from "@/src/config/api";

const ContactUsForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(state, "state");
    const { name, email, phoneNumber, message } = state;
    if (name !== "" && email !== "" && phoneNumber !== "" && message !== "") {
      postContact();
    } else {
      toast.error("Kindly fill all the required fields", {
        duration: 3000,
        position: "top-right",
        // Change colors of success/error/loading icon
        iconTheme: {
          // primary: '#0a0',
          // secondary: '#fff',
        },
        // styling
        style: {
          padding: "5px 10px",
          color: "#713200",
          // minWidth: '300px'
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  };

  const postContact = async () => {
    try {
      const response = await createAPIEndPoint("contact-uses").create({
        data: state,
      });
      console.log(response, "contact us response");
      if (response.status == 200) {
        setState({ name: "", email: "", phoneNumber: "", message: "" });
        toast.success("Thanks for contacting us", {
          duration: 3000,
          position: "top-right",
          // Change colors of success/error/loading icon
          iconTheme: {
            // primary: '#0a0',
            // secondary: '#fff',
          },
          // styling
          style: {
            padding: "5px 10px",
            color: "#713200",
            // minWidth: '300px'
          },
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      }
    } catch (error) {
      console.log(error.response);
      toast.error(error?.response?.data?.error?.message, {
        duration: 3000,
        position: "top-right",
        // Change colors of success/error/loading icon
        iconTheme: {
          // primary: '#0a0',
          // secondary: '#fff',
        },
        // styling
        style: {
          padding: "5px 10px",
          color: "#713200",
          // minWidth: '300px'
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      // console.log(error, 'contact us error')
    }
  };
  return (
    <div
      className={styles.backgroundImage}
      style={{ height: "750px", marginTop: "20px", marginBottom: "80px" }}
    >
      <div
        className={styles.contactUsFormContainer}
        style={{ flex: 1, flexDirection: "row" }}
      >
        <div style={{ flex: 0.3 }}>
          <div
            className={styles.contactUsForm}
            style={{ backgroundColor: "white", padding: "35px" }}
          >
            <div className={styles.contactUsFormHeading}>
              <h1>Contact Us</h1>
            </div>
            <div
              className={styles.contactUsFormInputs}
              style={{ borderBlockColor: "pink" }}
            >
              <input
                style={{ backgroundColor: "#ffe3db", borderWidth: "2px solid" }}
                placeholder="Name"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={state.name}
                required
              />
              <input
                style={{ backgroundColor: "#ffe3db", borderWidth: "2px solid" }}
                placeholder="Enter Email"
                name="email"
                type="email"
                onChange={handleInputChange}
                value={state.email}
                required
              />
              <input
                style={{ backgroundColor: "#ffe3db" }}
                placeholder="Phone Number"
                type="phone"
                name="phoneNumber"
                onChange={handleInputChange}
                value={state.phoneNumber}
                required
              />
              <textarea
                style={{ backgroundColor: "#ffe3db", borderWidth: "2px solid" }}
                placeholder="Your Inquiry here..."
                type="text"
                name="message"
                maxLength="300"
                onChange={handleInputChange}
                value={state.message}
                required
              />
            </div>
            <div className={styles.contactUsFormButton}>
              <Button text="Send" action={() => handleSubmit()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
