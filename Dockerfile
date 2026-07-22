# Use official Remotion image
FROM ghcr.io/remotion-dev/docker-image@sha256:8868a195bba4a7094e0421d99ab785857d7e3e6c14661d7c2c7aa2b9bfe4108a

# Set working directory
WORKDIR /usr/src/app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Set Remotion entry point
ENV REMOTION_ENTRY=remotion/Root.jsx
