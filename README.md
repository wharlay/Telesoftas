# Telesoftas Test Assesment QA Engineering 

Task 1

Write an autotest for website using selenium framework with python or javascript
Using chrome navigate directly to https://www.tiketa.lt/EN/search and follow the steps:

1) Write THE HAMLETMACHINE in Caption field
2) Select Artūro Areimos teatras event place
3) Choose dates 2022-11-01 - 2022-11-12
4) Press Search button
5) Press Buy button on “THE HAMLETMACHINE” event

Task 2

Why does print_list() not correctly print out the elements a_list?

def print_list(a_list):
for i in range(1, len(a_list)):
print('Element {} = {}'.format(str(i),str(a_list[i])))

a_list = [1, 2, 3, 5, 7, 9]
print_list(a_list)

Task 3

Postman task:
1. Login to quizmart
2. Get quiz collections list
3. Create a new collection with 1st 10th and 15th result of quiz list
Try to use all the best practice for your scripts
baseUrl: https://staging-api.quizmart.io
Authentication endpoint and schema: POST /api/v1/auth/login
{
"email": string,
"password": string
}
Collection list endpoint : GET /api/v1/collections
Create new collection endpoint and schema: POST /api/v1/collections
{
"quizIds": [ numb ],
"title": string
}
