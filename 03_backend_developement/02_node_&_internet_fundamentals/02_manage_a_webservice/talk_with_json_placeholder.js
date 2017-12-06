const request = require("request");
//--------------------------------------------
function maFunction (result) {
  //console.log(result);
}

function fetchListPosts (myUrl, callback){
  request(
    {
      url: myUrl,
      method: "GET"
    },
    function(error, response, result) {
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      //console.log("result:", result); // Print the HTML for the Google homepage.

      callback (result);
    }
  );
};


function fetchlistPostByUserId (myUrl, id, callback){
  request(
    {
      url: myUrl + id,
      method: "GET"
    },
    function(error, response, result) {
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      //console.log("result:", result); // Print the HTML for the Google homepage.
      callback (result);
    }
  );

};

function fetchListPostById (myUrl, id, callback){
  request(
    {
      url: myUrl + id,
      method: "GET"
    },
    function(error, response, result) {
      //console.log("error:", error); // Print the error if one occurred
      //console.log("statusCode:", response); // Print the response object
      //console.log("result:", result); // Print the HTML for the Google homepage.
      callback (result);
    }
  );
};




//--------------------------------------------
//fetchPosts(callback) :
function fetchPosts (callback){
  fetchListPosts("http://jsonplaceholder.typicode.com/posts",callback);
};

//:fetchPostByUser(userId, callback)
function fetchPostByUser (id, callback){
  fetchlistPostByUserId(`http://jsonplaceholder.typicode.com/posts?userId=`, id, callback);
};

//fetchPost(id, callback)
function fetchPost (id,callback){
  fetchListPostById('http://jsonplaceholder.typicode.com/posts/', id, callback);
};

//fetchUsers(callback)
function fetchUsers(callback){
  fetchListPosts("http://jsonplaceholder.typicode.com/users", callback);
};


//fetchUser(userId, callback)
function fetchUser(id, callback){
  fetchlistPostByUserId(`http://jsonplaceholder.typicode.com/users/`, id, callback);
};

//fetchComments(callback)
function fetchComments(callback){
  fetchListPosts("http://jsonplaceholder.typicode.com/comments", callback);
};

//fetchCommentsByPost(postId, callback)
function fetchCommentsByPost (id, callback){
  fetchlistPostByUserId(`http://jsonplaceholder.typicode.com/comments?postId=`, id, callback);
};
//publishPost(userId, title, body, callback)

function publishPost(userId, title, body, callback) {
  request (
    {
      url :"http://jsonplaceholder.typicode.com/posts",
      method: "POST",
      form :{
        title : title,
        body : body,
        userId : userId
      }
    },
      function(error, response, result) {
        callback (result);
      }
  )
}


// exports

module.exports = {
fetchPosts : fetchPosts,
fetchPostByUser : fetchPostByUser,
fetchPost : fetchPost,
fetchUsers : fetchUsers,
fetchUser:fetchUser,
fetchComments:fetchComments,
fetchCommentsByPost:fetchCommentsByPost,
publishPost:publishPost
};
