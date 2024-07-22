# NASA APOD App

[![Screenshot of NASA APOD](screenshots/react-nasa-apod-image.png)](https://nasa-apod-app-react.netlify.app/)
[![Screenshot of NASA APOD details](screenshots/react-nasa-apod-modal.png)](https://nasa-apod-app-react.netlify.app/)

## Overview

The NASA Astronomy Picture of the Day (APOD) App is a React-based web application that uses a REST API to display stunning images from space, provided by NASA's APOD API. Each day, a new image is featured along with additional information about the image. This app is designed to make it easy and enjoyable to explore the wonders of the universe.

## Features

-  **Daily Astronomy Picture**:  Automatically fetches and displays the NASA APOD for the current day.
-  **Image Caching**:  Stores the image locally to reduce API calls and improve load times.
-  **Modal for Additional Information**: Provides detailed information about the image in a sidebar modal.
-  **Responsive Design**:  Ensures a great user experience on both desktop and mobile devices.

## Installation and Setup

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js and npm installed on your machine.
- NASA APOD API key (You can get it [here](https://api.nasa.gov/)).

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/maithilisd/react-nasa-apod-app
   cd nasa-apod-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Create a `.env` file in the root directory and add your NASA APOD API key:**
   ```
   VITE_NASA_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```
   npm run dev
   ```

5. **Open your browser and navigate to:** Open your browser and navigate to [http://localhost:5173](http://localhost:5173/) to see the application in action.

## Deployment

The application is deployed on Netlify and can be viewed [here](https://nasa-apod-app-react.netlify.app/).
