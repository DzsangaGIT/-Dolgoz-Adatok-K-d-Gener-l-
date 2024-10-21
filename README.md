# Dolgozó Adatok

This project is a simple web application for generating a unique code based on user input for worker details. It uses HTML, CSS, and JavaScript to create a responsive and visually appealing interface. 

## Features

- User-friendly form to input worker details:
  - Name
  - Birth Date
  - Email
  - Zip Code
  - Workplace
- Generates a unique code based on the provided information.
- Responsive design with animations for an enhanced user experience.

## Demo

You can see the application in action by visiting the [live demo link](#).

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Code Explanation

- **HTML (`index.html`)**: The structure of the web page, including the form elements for input.
- **CSS (`styles.css`)**: Styles for the page, including layout, colors, and animations.
- **JavaScript (`script.js`)**: Handles form submission, code generation logic, and displaying the result.

### Code Generation Logic

- The unique code is generated based on:
  - The first and last characters of the name.
  - A two-character substring from the zip code.
  - A sum derived from the birth date.
  - The domain of the email address.

## Contributing

If you want to contribute to this project, feel free to submit a pull request or open an issue.


## Acknowledgments

- Inspired by the need for simple data collection tools.
- Special thanks to all contributors and open-source projects that made this possible.
