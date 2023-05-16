# Word Frequency Histogram

This project is a React.js application that fetches the contents from [test.txt](https://www.terriblytinytales.com/test.txt) file, calculates the frequency of each word, and displays a histogram of the 20 most occurring words on the click of submit button. It also provides an export button to export the histogram data as a CSV file.

## Getting Started

To run this project in your local system, go to code and just download the repository as a zip. After downloading, unzip it as folder and open it in your code editor. Run command `npm install` in the terminal to install all the node modules. Make sure  the required dependencies: `React`, `axios`, and `recharts` are already installed, you can check it from package.json file. If not installed then install them using `npm install <dependency-name>`. Now finally run command `npm start` command to get started. Open the application in your browser: `http://localhost:3000`. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Packages used

1. **Axios** : Axios is used to fetch the contents of the text file from the provided URL. It simplifies the process of making HTTP requests and handling responses. With Axios, you can easily send GET requests to the specified URL and retrieve the data. 
2. **Recharts** : Recharts is used to create the histogram chart that visualizes the frequency of word occurrences. It provides a collection of chart components like BarChart, Bar, XAxis, YAxis, tooltip, etc., which can be easily configured to display the data in the desired chart format. 

