import React from "react";
import "./Tc.css";
import Tcimg from "../images/term.jpg";
// import Navbar from './Navbar'
const Tc = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="maintc">
      <img src={Tcimg} alt="" />
      <h3>
        Terms and Conditions for UnikPix Generator Website Welcome to our AI
        Image Generator website! Before you start using our services, we kindly
        ask you to carefully read and understand the following Terms and
        Conditions ("Terms") that govern your use of our website and services.
        By accessing or using our website, you agree to be bound by these Terms.
        If you do not agree with any of the Terms, please refrain from using our
        services.
      </h3>

      <h4>1. Defnitions</h4>
      <ol>
        <li> "Website" refers to our AI Image Generator website.</li>
        <li>
          {" "}
          "Services" refers to the features, functionalities, and content
          provided on the website.
        </li>
        <li>
          {" "}
          "User" refers to any individual who accesses or uses the website.
        </li>
      </ol>
      <h4>2. Acceptance of Terms</h4>
      <ol>
        <li>
          {" "}
          By accessing or using the website, you acknowledge that you have read,
          understood, and agreed to be bound by these Terms.
        </li>
        <li>
          {" "}
          If you are using the website on behalf of an organization, you
          represent and warrant that you have the authority to bind that
          organization to these Terms.
        </li>
      </ol>
      <h4>3. Use of Services</h4>
      <ol>
        <li>
          {" "}
          The website provides an AI-powered image generator that allows users
          to create, modify, and download generated images.
        </li>
        <li>
          {" "}
          You understand and agree that the images generated using our AI
          technology may be subject to copyright and intellectual property
          rights of third parties.
        </li>
        <li>
          {" "}
          You are solely responsible for the images you generate using our
          services. You must ensure that you have the necessary rights to use,
          modify, and distribute the generated images.
        </li>
      </ol>
      <h4>4. Prohibited Uses</h4>
      <ol>
        <li> When using our website, you agree not to:</li>
        <li style={{listStyleType:'none'}}>a) Use the services for any illegal, unauthorized, or fraudulent
        purposes. <br />
        c) Upload or distribute any content that is defamatory, offensive, or
        violates any applicable laws. <br />
        b) Infringe upon the copyrights, trademarks, or intellectual property
        rights of any third party. <br />
        d) Interfere with or disrupt the integrity or performance of the
        website. <br />
        e) Attempt to gain unauthorized access to any part of the website or its
        systems.</li>
      </ol>
      <h4>5. Intellectual Property</h4>
      <ol>
        <li>
          {" "}
          All intellectual property rights, including copyrights and trademarks,
          associated with the website and its content, are owned by us or our
          licensors.
        </li>
        <li>
          {" "}
          By using our services, you do not acquire any ownership rights to the
          intellectual property displayed on the website.
        </li>
      </ol>
      <h4>6. Privacy Policy</h4>
      <ol>
        <li>
          {" "}
          We collect, store, and process personal information in accordance with
          our Privacy Policy, which is incorporated into these Terms by
          reference.
        </li>
      </ol>
      <h4>7. Disclaimer of Warranties</h4>
      <ol>
        <li>
          {" "}
          The website and its services are provided on an "as is" and "as
          available" basis. We do not warrant that the website will be
          error-free, uninterrupted, or secure.
        </li>
        <li>
          {" "}
          We do not guarantee the accuracy, quality, or reliability of the
          generated images.
        </li>
        <li>
          {" "}
          You understand and agree that the use of the website and its services
          is at your own risk.
        </li>
      </ol>
      <h4>8. Limitation of Liability</h4>
      <ol>
        <li>
          {" "}
          We shall not be liable for any indirect, incidental, consequential, or
          punitive damages arising out of or relating to your use of the website
          or its services.
        </li>
        <li>
          {" "}
          In no event shall our total liability exceed the amount paid by you,
          if any, for accessing the services.
        </li>
      </ol>
      <h4>9. Modification of Terms</h4>
      <ol>
        <li>
          {" "}
          We reserve the right to modify these Terms at any time without prior
          notice. The updated Terms will be posted on the website.
        </li>
        <li>
          {" "}
          Continued use of the website after the modifications will constitute
          your acceptance of the revised Terms.
        </li>
      </ol>
      <h4>10. Termination</h4>
      <ol>
        <li>10.1 We reserve the right to terminate</li>
      </ol>
    </div>
    </>
  );
};

export default Tc;
