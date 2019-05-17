[![Coverage Status](https://coveralls.io/repos/github/africanoKevin/Quick-credit/badge.svg?branch=develop)](https://coveralls.io/github/africanoKevin/Quick-credit?branch=develop)

# Quick-credit

Quick-credit App is an online lending application that provides short term soft loans to individuals. This helps solve problems of financial inclusion as away to elleviate poverty and empower low income earners.

## route for users to sign up
POST(api/v1/auth/signUp)

##route for users to sign in
POST(api/v1/auth/signin)

##route for marking user as verified
PATCH(api/v1/users/<:user-email>/verify)

##route for getting a specific laon
GET(api/v1/loans/:id)

##route for getting all current loans that are not fully paid
GET(api/v1/loans?status=approved&repaid=false)

##route for getting all repaid loans
GET(api/v1/loans?status=approved&repaid=true)

##route for getting all loan applications
GET(api/v1/loans)

##route for viewing loan repayment history
GET(api/v1/loans/<:loan.id>/repayments)

##route for creating a loan application
POST(api/v1/loans)


