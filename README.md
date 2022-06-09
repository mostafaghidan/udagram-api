# Udagram

---

## Description

This is the third project in web development advanced track provided by Udacity. The project is a fullstalk application using Node.js, Express, PostgreSQL in the backend and angular for frontend. The application is hosted by AWS and run either locally and globally using AWS RDS for making the database, S3 bucket and Elastic beanstalk.
Finally the application run on circleci by connection with github repo to simulate the build and deployment process and all of that ran successfully.

## Getting Started

1. Clone this repo locally into the location of your choice.
2. Open a terminal and navigate to the root of the repo
3. follow the instructions in the Project Setup


### instruction

1. Clone the project - `git clone https://github.com/mostafaghidan/udagram-api.git`
2. Go into the project directory - `cd ./udagram/udagram-frontend`
3. Install the dependencies - `npm install`
4. Start the frontend - `npm run start`
5. Open new terminal - `cd ../udagram-api`
6. Setup `.env`
7. Install the dependencies - `npm install`
8. start the backend - `npm run start`

## Documentation

- Screenshots of the AWS configurations and the CircleCI are provided in `./Docs/Screenshots/`
- Architecture Diagrams of the AWS and the Pipeline are provided in `./Docs/Architecture Diagrams/`

## AWS 

- RDS - Database URL: postgres://postgres:postgres@database-1.ckonvfboju1q.us-east-1.rds.amazonaws.com:5432/postgres

- S3 Endpoint - Frontend: http://mostes-udagram.s3-website-us-east-1.amazonaws.com

- Elastic Beanstalk URL - : http://use-east-1.us-east-1.elasticbeanstalk.com

## Environment Variables

Setup the following variables in the .env file or in the cloud environments:
```
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
POSTGRES_PORT=5432   
POSTGRES_HOST=database-1.ckonvfboju1q.us-east-1.rds.amazonaws.com
AWS_DEFAULT_REGION=us-east-1
AWS_REGION=us-east-1
AWS_PROFILE=defaultAWS_REGION=us-east-1
AWS_BUCKET=http://mostes-udagram.s3-website-us-east-1.amazonaws.com
URL=http://use-east-1.us-east-1.elasticbeanstalk.com
JWT_SECRET=mostes
PORT= 8080
POSTGRES_URL=postgres://postgres:postgres@database-1.ckonvfboju1q.us-east-1.rds.amazonaws.com:5432/postgres
AWS_SECRET_ACCESS_KEY=
AWS_KEY_ID= AKIA3YRPVFNHHEWNYLAR
AWS_SECRET_ACCESS_KEY=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
 
## Pipeline:

STEPS of CircleCi Process:

1- First of all we set the environment and install node/install, aws cli and elastic beanstalk.
2-Install Front-End Dependencies run <npm run frontend:install> 
3-Front-End Build by <npm run frontend:build>
4-Install Back-End Dependencies by <npm run backend:install>
5-Back-End Build by <run backend:build>
6-Deploy Backend Application <npm run backend:deploy>
7-Deploy Frontend Application <npm run frontend:deploy>


