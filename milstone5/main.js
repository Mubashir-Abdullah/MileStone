"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Importing jsPDF library
var jspdf_1 = require("jspdf");
// Function to handle the form submission and generate the resume
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    // Ensure all form elements are available
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        // Collecting values from form fields
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var address_1 = addressElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL_1 = profilePictureFile && profilePictureFile.type.startsWith('image/') ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL_1 ? "<img src=\"".concat(profilePictureURL_1, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> <span class=\"editable\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\">").concat(email_1, "</span></p>\n            <p><strong>Phone Number:</strong> <span class=\"editable\">").concat(phone_1, "</span></p>\n            <p><strong>Address:</strong> <span class=\"editable\">").concat(address_1, "</span></p>\n            <h3>Education</h3>\n            <p>").concat(education_1, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience_1, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills_1, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
        // Generate HTML download link
        var username_1 = usernameElement.value;
        var uniquepath = "resume/".concat(username_1.replace(/\s+/g, '-'), "_cv.html");
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8,".concat(encodeURIComponent(resumeOutput));
        downloadLink.download = uniquepath;
        downloadLink.textContent = 'Download your 2024 Resume (HTML)';
        downloadLink.style.display = 'inline-block';
        downloadLink.style.padding = '10px 20px';
        downloadLink.style.backgroundColor = '#4CAF50';
        downloadLink.style.color = 'white';
        downloadLink.style.textAlign = 'center';
        downloadLink.style.textDecoration = 'none';
        downloadLink.style.borderRadius = '5px';
        downloadLink.style.marginTop = '20px';
        // Append download link to the resume output
        resumeOutputElement === null || resumeOutputElement === void 0 ? void 0 : resumeOutputElement.appendChild(downloadLink);
        // PDF Generation Logic with jsPDF
        var downloadPdfLink = document.createElement('a');
        downloadPdfLink.textContent = 'Download your Resume as PDF';
        downloadPdfLink.style.display = 'inline-block';
        downloadPdfLink.style.padding = '10px 20px';
        downloadPdfLink.style.backgroundColor = '#2196F3';
        downloadPdfLink.style.color = 'white';
        downloadPdfLink.style.textAlign = 'center';
        downloadPdfLink.style.textDecoration = 'none';
        downloadPdfLink.style.borderRadius = '5px';
        downloadPdfLink.style.marginTop = '20px';
        downloadPdfLink.style.marginLeft = '10px';
        // PDF creation logic using jsPDF
        downloadPdfLink.onclick = function () {
            try {
                var doc = new jspdf_1.jsPDF();
                // Adding text to the PDF
                doc.setFont('helvetica', 'normal');
                doc.text("Name: ".concat(name_1), 20, 20);
                doc.text("Email: ".concat(email_1), 20, 30);
                doc.text("Phone: ".concat(phone_1), 20, 40);
                doc.text("Address: ".concat(address_1), 20, 50);
                doc.text("Education: ".concat(education_1), 20, 60);
                doc.text("Experience: ".concat(experience_1), 20, 70);
                doc.text("Skills: ".concat(skills_1), 20, 80);
                // Add profile picture to PDF (if available)
                if (profilePictureURL_1) {
                    doc.addImage(profilePictureURL_1, 'JPEG', 150, 10, 40, 40);
                }
                // Save the PDF with a filename based on the username
                doc.save("".concat(username_1.replace(/\s+/g, '-'), "_resume.pdf"));
            }
            catch (error) {
                console.error("Error generating PDF: ", error);
            }
        };
        // Append the PDF download link to the resume output element
        resumeOutputElement === null || resumeOutputElement === void 0 ? void 0 : resumeOutputElement.appendChild(downloadPdfLink);
    }
    else {
        console.error('One or more form elements are missing');
    }
});
