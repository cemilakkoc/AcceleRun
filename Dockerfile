# Use the node 12 image on Linux Alpine latest
FROM node:12-alpine

# see: https://blog.logrocket.com/how-to-set-up-a-headless-chrome-node-js-server-in-docker/
RUN apk update && apk add --no-cache nmap && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache \
      chromium \
      harfbuzz \
      "freetype>2.8" \
      ttf-freefont \
      nss

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Set the port to 3000
ENV PORT=3000

# Set the socials
ENV FACEBOOK="https://www.facebook.com/12handz"
ENV TWITTER="https://twitter.com/12handz"
ENV LINKEDIN="https://linkedin.com/in/12handz"
ENV INSTAGRAM="https://instagram.com/12handz"
ENV YOUTUBE="https://youtube.com/12handz"

# Expose the port so we can access the container
EXPOSE ${PORT}

# Create a repo in the home folder of the user node and make sure to chown to node
RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

# Set the working directory 
WORKDIR /home/node/app

# Copy both lock and package file and chown to node
COPY --chown=node:node package*.json ./

# Run everything using the node user
USER node

# Install the dependencies and clean the cache, we may want to add the ignore devDependencies
RUN npm install && npm cache clean --force --loglevel=error

# Copy the src folder to the app folder
COPY --chown=node:node src /home/node/app/src

# Run the app.js
CMD [ "node", "src/app.js"]