# Word Frequency Histogram

This project is a React.js application that fetches the contents from [test.txt](https://www.terriblytinytales.com/test.txt) file, calculates the frequency of each word, and displays a histogram of the 20 most occurring words on the click of submit button. It also provides an export button to export the histogram data as a CSV file.

## Getting Started

To run this project in your local system, go to code and just download the repository as a zip. After downloading, unzip it as folder and open it in your code editor. Run command `npm install` in the terminal to install all the node modules. Make sure  the required dependencies: `React`, `axios`, and `recharts` are already installed, you can check it from package.json file. If not installed then install them using `npm install <dependency-name>`. Now finally run command `npm start` command to get started. Open the application in your browser: `http://localhost:3000`. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Packages used

1. **Axios** : Axios is used to fetch the contents of the text file from the provided URL. It simplifies the process of making HTTP requests and handling responses. With Axios, you can easily send GET requests to the specified URL and retrieve the data. 
2. **Recharts** : Recharts is used to create the histogram chart that visualizes the frequency of word occurrences. It provides a collection of chart components like BarChart, Bar, XAxis, YAxis, tooltip, etc., which can be easily configured to display the data in the desired chart format. 

## Components

The `useState` hook is used to declare two state variables: **histData** and **loading** :- 
1. The histData variable will store the data for the histogram chart. It is initialized as an empty array []. The setHistData function is used to update the value of histogramData.
2. The loading variable is a boolean flag that indicates whether the data is being fetched. It is initialized as false. The setLoading function is used to update the value of loading.

The app contains `fetchData` and `exportData` functions :- 
1. **fetchData()** :
- The fetchData function fetches the text data from the specified URL and calculates the word frequencies.
- It uses the axios library to make an HTTP GET request and retrieve the text data.
- The text data is split into individual words and their frequencies are calculated.
- The word-frequency data is sorted, sliced to the top 20 words, and transformed into an array of objects.
- The sorted data is then set as the value of the histogramData state variable.

2. **exportData()** :
- The exportData function allows the user to export the histogram data as a CSV file.
- It converts the histogram data into a CSV string format.
- A dynamically created <a> element is appended to the document body.
- The href attribute of the <a> element is set to the CSV data using the `data:text/csv;charset=utf-8` format.
- The download attribute is set to "histogram.csv" to specify the filename for the downloaded file.
- The <a> element is programmatically clicked, triggering the download of the CSV file.
- Finally, the <a> element is removed from the document body.

## Deployment
  
This app is deployed to [netlify.com](https://www.netlify.com). You can visit the app through this link : [Click Here](https://ttt-wordhistogram.netlify.app/).
