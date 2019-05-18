[![Coverage Status](https://coveralls.io/repos/github/africanoKevin/Quick-credit/badge.svg?branch=develop)](https://coveralls.io/github/africanoKevin/Quick-credit?branch=develop)

# Quick-credit

Quick-credit App is an online lending application that provides short term soft loans to individuals. This helps solve problems of financial inclusion as away to elleviate poverty and empower low income earners.

##Getting started
To get the Quick-credit project running on your local computer, you need to clone this repo, and the latest version of Node.js installed.

Then run the following commands to start the system.

```
// installing required node modules
npm init

//running the server in development mode
npm run server: watch

//building the project for deployment
npm run build

//running the server in production mode
npm run start
```

## Testing the project

```
// running the test
npm run test
```

## API Documentation

all endpoints will be accessed from the following bas url:
https://quick-credit2.herokuapp.com/api/v1

### POST /auth/signUp
this endpoint is for the user to signup or create an account

example
```
{
   "firstName": "africano",
   "lastName": "kevin",
   "email": "africa@gmail.com",
   "password": "heaven",
   "isAdmin": "false"
}
```

### POST /auth/signin
this endpoint is for the user to signin
example request body
```
{
   "email": "africa@gmail.com",
   "password": "heaven"
}
```

### PATCH /users/<:user-email>/verify
this endpoint is for verifying a client

example request body
```
{

  "firstName": "africano",
  "lastName": "kevin",
  "email": "africa@gmail.com",
  "status": "verified"
} 
```

### GET /loans/:id
this endpoint is for getting a specific loan application using the loanId

example request body
```
{
   "loanId": 2
   "firstName": "africano",
   "lastName": "kevin",
   "token": 6,
   "amount": 2000,
   "paymentInstallment": 100,
   "interest": 500,
   "balance": 200
   "status": "pending",
   "repaid": false
}
```

### POST /loans
example request body

```
{
   "loanId": 2
   "firstName": "africano",
   "lastName": "kevin",
   "token": 6,
   "amount": 2000,
   "paymentInstallment": 100,
   "interest": 500,
   "balance": 200
   "status": "pending",
   "repaid": false
}
```

### GET /loans?status=approved&repaid=false
this endpoint returns loans with status approved and repaid true 

example request body
```
// loans with status approved and repaid true
{
  "first": "africano",
  "lastName": "kevin",
  "status": approved,
  "repaid": true,
  "token" : 6,
  "amount": 2000,
  "paymentInstallment": 200,
  "interest": 500,
  "balance": 200
}
```

// loans with status pending and repaid false
```
[
  {
    "first": "africano",
    "lastName": "kevin",
    "status": approved,
    "repaid": true
    "token" : 6,
    "amount": 2000,
    "paymentInstallment": 200,
    "interest": 500,
    "balance": 200
  }
  
  {
    "first": "simon",
    "lastName": "emmanuel",
    "status": "pending",
    "repaid": false,
    "token" : 6,
    "amount": 2000,
    "paymentInstallment": 200,
    "interest": 500,
    "balance": 200
  }
]
```

### PATCH /loans/:id
this endpoint approves a loan application
example request body;
```
{
    "first": "simon",
    "lastName": "emmanuel",
    "status": "approved",
    "repaid": false,
    "token" : 6,
    "amount": 2000,
    "paymentInstallment": 200,
    "interest": 500,
    "balance": 200
}
```

### POST /loans/repayments
this endpoint is for admin to post a repayment in favour of the client

example requesst body
```
{
  "email": "africa@gmail.com",
  "amount": "2000",
  "newbalance": "1000",
  "oldbalance": "500"
  "createdOn": "12-05-2019",
}
```

### GET /loans/:id/repayments
this endpoint returns a repayment history for a certain client.

example of request body
```
{
  "email": "africa@gmail.com",
  "amount": "2000",
  "newbalance": "1000",
  "oldbalance": "500"
  "createdOn": "12-05-2019",
}
```

 
     


