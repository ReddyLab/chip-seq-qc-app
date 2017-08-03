# Create Node image
FROM node:boron

# Create and navigate to working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app
RUN npm install

# Bundle code
COPY . /usr/src/app

EXPOSE 4200

# Serve
CMD ["npm", "start"]
