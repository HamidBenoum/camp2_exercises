#userId |jq . "userId" > 04_fetch_users_result

curl -X GET "http://jsonplaceholder.typicode.com/users"
