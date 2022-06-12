# Udagram application

Application link:  http://mostes-udagram.s3-website-us-east-1.amazonaws.com

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

- Elastic Beanstalk URL - : http://Udagramapi-env-3.eba-ghjrv9ve.us-east-1.elasticbeanstalk.com/api/v0

## PIPELINE

STEPS of CircleCi Process:

1. First of all we set the environment and install node/install, aws cli and elastic beanstalk.
2. Install Front-End Dependencies run `npm run frontend:install`
3. Front-End Build by `npm run frontend:build`
4. Install Back-End Dependencies by `npm run backend:install`
5. Back-End Build by `run backend:build`
6. Deploy Backend Application `npm run backend:deploy`
7. Deploy Frontend Application `npm run frontend:deploy`
