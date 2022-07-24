import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Avatar from "../../components/ProfileAvatar";

const AddNewsPage: NextPage = () => {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: SubmitEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    const JSONdata = JSON.stringify(data);

    // Send the form data to our API and get a response.
    const response = await fetch("/api/form", {
      // Body of the request is the JSON data we created above.
      body: JSONdata,

      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    <div className="container">
      <h1 className={styles.title}>
        Form{" "}
        <Link href="/">
          <a>with</a>
        </Link>{" "}
        JavaScript.
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />

        <button type="submit">Submit</button>
      </form>
      {/* <form action="/api/form" method="post" className="form add-news">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default AddNewsPage;
