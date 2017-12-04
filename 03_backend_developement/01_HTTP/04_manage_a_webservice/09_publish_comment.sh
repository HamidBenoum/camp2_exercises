#post_id name email body
curl -d '{"postId": "1", "name":"name","email":"email","body":"body"}' -H "Content-Type: application/json" -X POST "http://jsonplaceholder.typicode.com/comments"
