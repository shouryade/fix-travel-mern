// controllers/formController.js

const Form = require('../models/form');
const sendEmail = require('../Utils/sendEmail');

const submitForm = async (req, res) => {
  const { userName, email, phoneNumber, numberOfGuests, checkInDate, checkOutDate, branchName, roomName} = req.body;
    try{
        // Save form data to the database
  const newForm = new Form({ userName, email, phoneNumber, numberOfGuests, checkInDate, checkOutDate, branchName, roomName});
  await newForm.save();

  // Send confirmation email to the user
  const userSubject = 'Form Submission Confirmation';
  const userText = `Hello ${userName},\n\nThank you for submitting the form.
  ${email} ${phoneNumber} ${numberOfGuests} ${checkInDate} ${checkOutDate} ${branchName} ${roomName}
   We will get back to you shortly.\n\nBest regards,\nYour Company`;
  await sendEmail(email, userSubject, userText);
  

  await sendEmail(process.env.EMAIL_USER, userSubject, userText)

  // Send detailed email to the admin
  const adminSubject = 'New Form Submission';
  const adminText = `A new form has been submitted by ${userName}.\n\nEmail: ${email}\nPhone Number: ${phoneNumber}\nNumber of Guests: ${numberOfGuests}\nCheck-in Date: ${checkInDate}\nCheck-out Date: ${checkOutDate}\nBranch Name: ${branchName}\nRoom Name: ${roomName}`;

  res.status(200).json({ message: 'Form submitted successfully' });

    }catch(e){
        console.log("error");
        console.log(e);

    }
  
};

module.exports = { submitForm };


