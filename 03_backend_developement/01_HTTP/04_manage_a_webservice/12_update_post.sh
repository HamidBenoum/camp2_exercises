#post_id new_title new_body
curl -d '{"postId": "1", "title":"title","body":"body"}' -H "Content-Type: application/json" -X PUT "http://jsonplaceholder.typicode.com/posts/1"
