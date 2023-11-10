import React from 'react'
import './Policy.css'
import policyimg from '../images/privacy.jpg'
// import Navbar from './Navbar'
const Policy = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='mainpolicy'>
      <img src={policyimg} alt="" />
      <h3>At our UnikPix Generator website, we value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you access or use our website and services. By using our website, you consent to the practices described in this Privacy Policy.
</h3>
      <h4>1. Information We Collect</h4>
      <ol>
        <li>Personal Information: When you use our website, we may collect certain personally identifiable information, such as your name, email address, and any other information you voluntarily provide to us.
</li>
        <li>
          {" "}
           Usage Data: We may also collect non-personal information about your interactions with our website, such as your IP address, browser type, referring/exit pages, and operating system.

        </li>
        </ol>
      <h4>2. Use of Information</h4>
      <ol>
        <li> We may use the collected information for the following purposes:<br/>
a) To provide and maintain our website and services.<br/>
b) To personalize your experience and improve user satisfaction.<br/>
c) To respond to your inquiries, requests, or comments.<br/>
d) To send you administrative or promotional communications.<br/>
e) To detect and prevent fraudulent or unauthorized activities.<br/>
f) To comply with legal obligations.</li>

      </ol>
      <h4>3. Disclosure of Information</h4>
      <ol>
        <li> We may disclose your personal information to third parties in the following circumstances:<br/>
a) With your consent or at your direction.<br/>
b) To comply with legal requirements, such as a subpoena or court order.<br/>
c) To protect our rights, property, or safety, and that of our users or others.<br/>
d) To trusted third-party service providers who assist us in operating our website and services.<br/>
e) In connection with a merger, acquisition, or sale of all or a portion of our assets, where your personal information may be transferred as part of the transaction.</li>

      </ol>
      <h4>4. Data Security</h4>
      <ol>
        <li> We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
</li>
        <li> However, please note that no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
</li>

      </ol>
      <h4>5. Third-Party Websites</h4>
      <ol>
        <li> Our website may contain links to third-party websites. We have no control over the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.</li>
      </ol>
      <h4>6. Children's Privacy</h4>
      <ol>
        <li> Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under the age of 13. If we discover that we have collected personal information from a child under 13, we will promptly delete it.
</li>
      </ol>
      <h4>7. Changes to this Privacy Policy</h4>
      <ol>
        <li> We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website. Your continued use of the website after the posting of any changes constitutes your acceptance of those changes.
</li>
      </ol>
      <h4>8. Contact Us</h4>
      <ol>
        <li> If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at the provided contact information.</li>
      </ol>
    </div>
    </>
  )
}

export default Policy;


