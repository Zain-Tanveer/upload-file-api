# UPLOAD-FILE-API

It is a small [NodeJS][nodejs] server with three routes. Its purpose is to show how images or any file can be saved in mongodb using a file uploading service known as [Cloudinary][cloudinary] which has a free tier. You can also choose to use other better paid services such as google cloud or Amazon Web Services.

**NOTE**: This is not the most optimal way to code it, I wrote this code while trying to figure out how I could implement it. If you want to see how it can be implemented in a more professionally built nodeJS server then check out my [Link-API][linkapi] github repository.

**NOTE**: The reason you need to use a file uploading service instead of just using multer like in my [CareerHub - Backend][careerhub] project is because when you deploy it on a free hosting platform, you cannot add more files in the code dynamically i.e. saving the files in public folder.

## Installation

UPLOAD-FILE-API requires the latest [Node.js](https://nodejs.org/) version to run.
My version at the time of developing this app is v20.11.0.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```

**NOTE**: You need to rename the example.env file to .env and populate it with your own personal information.
`MONGO_URI`, `CLOUD_NAME`, `API_KEY`, and `API_SECRET` need to be populated. `MONGO_URI` is your [mongodb][mongodb] url, while the other three you can get after creating an account on cloudinary. If you're having trouble then I suggest you check out a youtube guide.

## Routes

These are all the routes implemented in this backend.

`API_URL = localhost:5000/api/v1 `

**NOTE**: The json data below is what is needed to be sent in the body of said request.

- GET - `API_URL/getPhotos`

- POST - `API_URL/savePhoto`

  ```
  {
    "image": photo.jpg
  }
  ```

- DELETE - `API_URL/deletePhoto/:photo_id`

# How it works

The user sends a file through form-data. The API uses the [multer][multer] library to access and validate the file. Then passes the accessed data to a custom middleware. There the file is uploaded to your cloudinary account by using the [cloudinary][cloudinarylibrary] library. Check out their [documentation][cloudinarylibrary] for more information.

## Deployment

If you want to deploy it then you can use any free hosting services like [Cyclic][cyclic] or [Railway][railway]. But you do need to replace every http://localhost:5000 throughout the code with the deployed app URL. Just search http://localhost:5000 in VS Code and replace it. Its better to follow a youtube guide on how to deploy nodeJS apps.

## License

NONE

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job."
[angular]: https://angular.io/
[nodejs]: https://nodejs.org/en
[express]: https://expressjs.com/
[multer]: https://www.npmjs.com/package/multer
[cyclic]: https://www.cyclic.sh/
[mongodb]: https://www.mongodb.com/
[railway]: https://railway.app/
[beautifulsoup]: https://beautiful-soup-4.readthedocs.io/en/latest/
[scrapers]: https://github.com/Zain-Tanveer/Scrapers
[uploadfile]: https://github.com/Zain-Tanveer/upload-file-api
[linkapi]: https://github.com/Zain-Tanveer/Link-API
[cloudinary]: https://cloudinary.com/
[cloudinarylibrary]: https://www.npmjs.com/package/cloudinary
[careerhub]: https://github.com/Zain-Tanveer/CareerHub-Backend
