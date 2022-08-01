FROM node:16-alpine
#Matin a clean working folder.
WORKDIR /app
#Copy package.json for dependacy injection
COPY package.json yarn.lock ./
#INstall all nneded dependancy
RUN yarn install
#Next Js configaration
COPY next.config.js ./next.config.js
#Run the development server.
CMD ["yarn", "dev"]