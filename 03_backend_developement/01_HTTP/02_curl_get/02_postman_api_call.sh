#https://postman-echo.com/get
#> 02_postman_api_call.result


curl -X GET "https://postman-echo.com/get?foo=bar" |jq .'args' > 02_postman_api_call.result
