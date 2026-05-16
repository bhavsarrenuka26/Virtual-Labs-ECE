# version of Node.js
FROM node:20-alpine

# Create a working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies 
COPY package*.json ./
RUN npm install

# Copy the rest of  backend code
COPY . .

# app runs on port 5000
EXPOSE 5000

# The command to start the server
CMD ["npm","start"]