A good README is the front page of your project on GitHub. It's the first thing recruiters and other developers will see.

How to use this:

Go to your ai-resume-parser repository on GitHub.

Click the "Add a README" button.

Copy the text below and paste it into the editor.

Commit the changes.

AI-Powered Resume Parser 🚀
An intelligent web application designed to automate and enhance the resume screening process. This tool leverages the power of the Google Gemini API to parse resumes, analyze them against job descriptions, and generate valuable insights for recruiters and hiring managers.

Live Demo

https://ai-resume-parser.netlify.app/

(Pro Tip: You can easily create a GIF of your app using a free tool like GIPHY Capture or ScreenToGif and upload it to your repository to replace this link.)

Key Features ✨
Multi-Format Upload: Accepts resumes in both PDF and DOCX formats.

AI-Powered Parsing: Instantly extracts key information such as contact details, work experience, education, and skills into a structured format.

Job Match Analysis: Provides a percentage-based match score and a detailed justification by comparing the resume against a pasted job description.

Interview Question Generator: Automatically creates relevant technical and behavioral interview questions (with sample answers) tailored to the candidate's profile.

Professional PDF Export: Downloads a clean, formatted PDF report of the entire analysis with a single click.

Modern & Responsive UI: A sleek, dark-themed interface that is fully responsive and works beautifully on any device.

Tech Stack 🛠️
Frontend: HTML5, Tailwind CSS, Vanilla JavaScript

AI & Backend: Google Gemini API

File Processing: PDF.js, Mammoth.js (Client-side)

PDF Generation: jsPDF (Client-side)

Deployment: GitHub Pages & Netlify

How It Works
Upload: A user uploads a resume (PDF/DOCX) and can optionally paste a job description.

Text Extraction: The application uses client-side libraries (PDF.js/Mammoth.js) to extract the raw text from the file, ensuring user privacy as the file never leaves the browser.

API Call: The extracted text is sent to the Google Gemini API with a detailed prompt instructing it to parse the data, perform an analysis, and return a structured JSON object.

Display Results: The frontend receives the JSON data and dynamically renders it in a clean, tabbed interface for easy navigation.

Export: The jsPDF library is used to generate a formatted PDF report from the structured data.

Setup & Installation
This project is fully client-side and can be run by simply opening the index.html file in a browser. However, to use the AI features, you must have a valid Google Gemini API key.

Clone the repository:

git clone https://github.com/Akshayreddy2004/ai-resume-parser.git

Navigate to the project directory:

cd ai-resume-parser

Open index.html in your code editor.

Find the apiKey variable in the <script> section and paste in your own Google Gemini API key.

Open the index.html file in your browser (preferably using a live server extension).
