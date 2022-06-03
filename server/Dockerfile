# Define Base Image
FROM telkomindonesia/alpine:nodejs-14

# Change Working Directory
WORKDIR /usr/src/app

# USER root

RUN mkdir /usr/src/app/node_modules \
	&& chmod -Rf 777 /usr/src/app/node_modules \
	&& ls -lha /usr/src/app/

# Copy Package Dependencies List to Working Directory
COPY . /usr/src/app


# Install Package Dependencies
#RUN apk add --update --no-cache --virtual .build-dev \
#      build-base \
#      python python-dev \
#    && npm i -g npm \
#    && npm i -g node-gyp \
#    && npm i \
#    && apk del .build-dev

RUN npm i -g npm && npm i

#install phantomJS

  
# Copy All Source Code to Working Directory
# COPY . /usr/src/app/

# Expose Application Port
EXPOSE 5051

# Run Application
# CMD ["npm", "start"]
CMD ["node", "index.js"]
