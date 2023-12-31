FROM cypress/base:20.5.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "cypress:run"]