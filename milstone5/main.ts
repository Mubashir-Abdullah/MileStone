document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const address = (addressElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        // Handle profile picture
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile && profilePictureFile.type.startsWith('image/') ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> <span class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span class="editable">${email}</span></p>
        <p><strong>Phone Number:</strong> <span class="editable">${phone}</span></p>
        <p><strong>Address:</strong> <span class="editable">${address}</span></p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }

        // Username logic for download link
        const usernameElement = document.getElementById("username") as HTMLInputElement;
        if (usernameElement) {
            const username = usernameElement.value;
            const uniquepath = `resume/${username.replace(/\s+/g, '-')}_cv.html`;

            const downloadLink = document.createElement('a');
            downloadLink.href = `data:text/html;charset=utf-8,${encodeURIComponent(resumeOutput)}`;
            downloadLink.download = uniquepath;
            downloadLink.textContent = 'Download your 2024 Resume';

            // Apply styling to the download link
            downloadLink.style.display = 'inline-block';
            downloadLink.style.padding = '10px 20px';
            downloadLink.style.backgroundColor = '#4CAF50';
            downloadLink.style.color = 'white';
            downloadLink.style.textAlign = 'center';
            downloadLink.style.textDecoration = 'none';
            downloadLink.style.borderRadius = '5px';
            downloadLink.style.marginTop = '20px';

            // Hover effect
            downloadLink.onmouseover = () => {
                downloadLink.style.backgroundColor = '#45a049';
            };
            downloadLink.onmouseout = () => {
                downloadLink.style.backgroundColor = '#4CAF50';
            };

            // Append the download link to the resume output element
            resumeOutputElement?.appendChild(downloadLink);
        }

        // Apply CSS for the profile picture
        const profilePictureStyle = document.createElement('style');
        profilePictureStyle.innerHTML = `
        .profilePicture {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: 20px;
        }
        `;
        document.head.appendChild(profilePictureStyle);
    } else {
        console.error('One or more form elements are missing');
    }
});
