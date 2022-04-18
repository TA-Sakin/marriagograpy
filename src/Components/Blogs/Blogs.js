import React from "react";

const Blogs = () => {
  return (
    <div style={{ minHeight: "70vh" }} className="my-5 container">
      <h3>1. Difference between authorization and authentication</h3>
      <p className="pt-2 pb-4 fs-3">
        Authentication is the process of verrifying who the person is and
        authorization is the process of verifying what the person has access to.
        For example, the process of verifying and confirming users ID and
        passwords for an application is called authentication, but determining
        which files or data user has access to is called authorization.
      </p>
      <h3>
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h3>
      <p className="pt-2 pb-4 fs-3">
        I am using firebase for authentication. There are some other software
        that provides user authentication service. Here are few alternatives of
        firebase authentication.
        <br />
        1. Auth0
        <br />
        2. MongoDB
        <br />
        3. Amazon Cognito
        <br />
        4. Okta
        <br />
        5. Passport
        <br />
        6. JSON Web Token
        <br />
        7. Keycloak
      </p>
      <h3>
        3. What other services does firebase provide other than authentication
      </h3>
      <p className="pt-2 pb-4 fs-3">
        Here are other services that firebase provides other than
        authentication. <br></br>
        Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Realtime
        Database, Google Analytics, Firebase ML, Cloud Messaging, Remote Config.
      </p>
    </div>
  );
};

export default Blogs;
