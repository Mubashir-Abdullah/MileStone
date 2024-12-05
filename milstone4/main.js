var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile && profilePictureFile.type.startsWith('image/') ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output HTML
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong> <span class=\"editable\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span class=\"editable\">").concat(phone, "</span></p>\n        <p><strong>Address:</strong> <span class=\"editable\">").concat(address, "</span></p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
        // Generate PDF from the HTML content using jsPDF
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        // Add content to the PDF
        doc.html(resumeOutput, {
            callback: function (doc) {
                // Download the PDF
                doc.save('resume.pdf');
            },
            margin: 10,
            x: 10,
            y: 10
        });
    }
    else {
        console.error('One or more form elements are missing');
    }
});
