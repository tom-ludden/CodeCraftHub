# Use supported Node.js LTS
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (production only)
RUN npm ci --omit=dev

# Copy the app source code
COPY . .

# Expose port for Express
EXPOSE 5000

# Start the application
CMD ["node", "src/app.js"]
