#post_id new_title
curl -d '{"postId": "1", "body":"body"}' -H "Content-Type: application/json" -X PUT "http://jsonplaceholder.typicode.com/posts/1"
