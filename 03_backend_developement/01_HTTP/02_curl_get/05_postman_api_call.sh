#!/bin/bash
#https://postman-echo.com/time/valid
#05_postman_api_call.result

#curl -X GET "https://postman-echo.com/time/valid?timestamp=${date}"> 05_postman_api_call.result
#response = $( curl -X GET "https://postman-echo.com/time/valid?timestamp=${date}" )
#echo $response


DATE=`date +%Y-%m-%d`
echo $DATE
curl -X GET "https://postman-echo.com/time/valid?timestamp=${DATE}" > 05_postman_api_call.result
