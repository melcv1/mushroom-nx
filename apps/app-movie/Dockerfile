#FROM node:lts-alpine
#WORKDIR /app
#COPY package.json ./
#RUN npm install -g nx
#RUN npm install
#COPY . .
#RUN nx build app-movie
#EXPOSE 4200
#CMD ["nx", "run", "app-movie:serve:development"]

# Use a specific version of the official Node.js image based on the slim variant
FROM node:lts-alpine AS build

# Set the working directory
WORKDIR /usr/src/root

# Copy required files for installing dependencies
COPY package.json package-lock.json nx.json tsconfig.base.json  ./
COPY apps/app-movie/ ./apps/app-movie/

# Be sure to include all the necessary components your project targets, such as e2e tests. Otherwise, the Docker image build may fail. 
COPY apps/app-movie-e2e/ ./apps/app-movie-e2e/

# Install npm dependencies
RUN npm ci

# Install nx globally
RUN npm install -g nx

# Set NX_DAEMON environment variable to false to prevent nx from running in daemon mode
ENV NX_DAEMON=false

# Build the application
RUN nx run app-movie:build

# Create a new stage for the runtime image
FROM node:lts-alpine AS runtime

# Set the working directory
WORKDIR /usr/src/root

# Copy build artifacts from the build stage
COPY --from=build /usr/src/root/dist/apps/app-movie /usr/src/root/dist/apps/app-movie

# Expose ports
EXPOSE 4200
ENV PORT=4200

# Install serve globally
RUN npm install -g serve

# Start the application using serve
CMD ["serve", "-s", "dist/apps/app-movie", "--listen", "tcp://0.0.0.0:4200"]