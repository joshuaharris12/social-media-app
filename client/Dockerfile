# BASE IMAGE
FROM node:14

# CREATE working directory
WORKDIR /usr/src/app

# Copies the package.json and package-lock.json files
COPY package*.json ./

# Install
RUN npm install

COPY . .

EXPOSE 3000

RUN ["ls"]
CMD ["npm", "start"]