
#### Run
To build and run the docker image from the /server directory, follow the steps below.

1. Build the docker image using the Dockerfile
```
docker build -t joshuaharris/social-media-app-server .
```

2. Run the docker image in a docker container
```
docker run -p 8000:8000 joshuaharris/social-media-app-server
```
