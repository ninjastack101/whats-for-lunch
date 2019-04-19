This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>


## Using with docker?

Docker is awesome when it comes to get your feet on the groud without extra efforts.
To start the application with docker:

- ### Build the docker image
  `docker build .`

- ### This will create a new image, you can find the image id by running
  `docker images`

- ### Spin up the container
  `docker run -p 3000:3000 {{IMAGE_ID}}`

Now you can access the app on your machine at [http://localhost:3000](http://localhost:3000)
