#
# Builder stage
#
FROM node:12.16.1-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm ci --quiet

# Build .ts files
COPY ./src ./src
RUN npm run build

#
# Final image
#
FROM node:12.16.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm ci --quiet --only=production

# Bundle app source
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000
CMD [ "npm", "start" ]
