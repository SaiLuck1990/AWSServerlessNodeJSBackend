# Simple Node JS Serverless Project with AWS 

## To create serverless project

sls create -t aws-nodejs -p sls-notes-backend

## To deploy the serverless yml 

sls deploy 

## To initialise node project and install dependencies
npm init -y
npm install --save aws-sdk moment underscore uuid

## For testing locally of the serverless solution
npm install --save serverless-offline

sls offline

## To create a new domain 
npm install --save-dev serverless-domain-manager

##  URL for API Gateway 
https://f2cbvkydfl.execute-api.us-east-2.amazonaws.com/prod/

##  Test collection in postman

https://github.com/SailakshmiKumar/AWSServerlessNodeJSBackend/blob/dev/sls-notes-backend.postman_collection.json

##  Reference tutorial 

https://www.udemy.com/course/aws-lambda-serverless-architecture/


