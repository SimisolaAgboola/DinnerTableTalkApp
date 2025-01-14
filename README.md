# DinnerTableTalk - an AI News Summarization App

Never run out of things to say with family and colleagues!<br/>
The Dinner Table Talk App curates news articles across various categories, summarizes them, and presents them in an engaging carousel format. It simplifies staying informed while sparking meaningful conversations at the dinner table.<br/>

## Features
* Curated News Categories: Choose between Sports, Politics, or Entertainment.
* Summarized Articles: Leveraging OpenAI's GPT, articles are summarized for quick and concise understanding.
* Dynamic UI: A responsive carousel to browse through curated content.
* Backend Integration: A Node.js server integrates OpenAI's GPT to summarize content.

## Components
### Frontend
TalkPoint.js<br/>
* A reusable component to display individual articles.<br/>

Key Features:
*  Article Title with clickable link.
*  Article Image.
*  Summarized Description.<br/>

TalkPointList.js<br/>
* A container component that fetches and organizes articles by category.<br/>

Key Features:
* Dynamic news fetching using NewsAPI.
* Summarization through a backend endpoint.
* Carousel display for a seamless user experience.

### Backend
server.js<br/>
* A Node.js and Express-based server for handling content summarization.<br/>

Key Features:
* Endpoint /summarize that integrates with OpenAI's GPT API to provide concise article summaries.<br/>

## Installation
1. Clone the Repository: <br/>
git clone https://github.com/SimisolaAgboola/DinnerTableTalkApp.git<br/>
cd DinnerTableTalkApp
2. Install Dependencies<br/>
For the Frontend:<br/>
cd src<br/>
npm install<br/>
For the Backend:<br/>
cd backend<br/>
npm install<br/>
3. Set Up Environment Variables<br/>
Create a .env file in both the frontend and backend directories:<br/>
For the Frontend: <br/>
REACT_APP_API_KEY=your_newsapi_api_key<br/>
For the Backend: <br/>
OPENAI_API_KEY=your_openai_api_key
4. Start the Application<br/>
Run the Backend<br/>
cd backend<br/>
node server.js<br/>
Run the Frontend<br/>
cd src<br/>
npm start<br/>

## Technologies Used
### Frontend
* React: For building the UI.
* Slick Carousel: For displaying articles in a user-friendly slider.
* Axios: For API requests.
### Backend
* Node.js: For the backend server.
* Express.js: For handling API routes.
* OpenAI API: For article summarization.
