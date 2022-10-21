<template>
  <div class="container" id="doc">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h2>API contact guide</h2>
        <div class="alert alert-info">NOTE: You can communicate from this API without the need to register on the site, and this service is free and there is no obligation to pay a fee to use it.</div>
        <p><b>The following operations can be performed:</b></p>
        <p>- User registration</p>
        <p>- User login</p>
        <p>- Add a personal photo and information for you as a user</p>
        <p>- Posting a picture with its title and information about it</p>
        <p>- show all the photos that have been uploaded by users</p>
        <p>- View your posted photos</p>
        <p>- Delete your posted photos</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">1</div>
          <h3>User registration</h3>
        </div>
       <div class="m-5 mt-0">
         <h5><b><u>Request</u></b></h5>
         <h6><b>url:</b> <span>https://api.tawfig.info/register</span></h6>
         <h6><b>method:</b> <span>POST</span></h6>
         <h6><b>headers:</b></h6>
         <p> Accept: application/json</p>
         <p>content-type : application/json</p>
         <h6><b>body:</b></h6>
         <p>Type: json</p>
         <p>data: name(string - required) , email(string - required - unique) , password(string - required) , password_confirmation(string - required) </p>
         <h5><b><u>Response</u></b></h5>
         <p>Type: json</p>
         <p>data: {user {id , name , email} , access_token}</p>
       <div>
         <h5><b><u>Error handling</u></b></h5>
         <table class="table table-bordered">
           <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">status</th>
             <th scope="col">statusText</th>
             <th scope="col">description</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <th scope="row">1</th>
             <td>422</td>
             <td>Unprocessable Entity</td>
             <td>The given data was invalid : There may be required data missing, or the email is already registered, or the password does not match the password confirmation</td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>500</td>
             <td>Internal Server Error</td>
             <td>A server error occurred, try again when this error is repeated, contact us</td>
           </tr>
           </tbody>
         </table>
       </div>
       </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">2</div>
          <h3>sign in</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/login</span></h6>
          <h6><b>method:</b> <span>POST</span></h6>
          <h6><b>headers:</b></h6>
          <p> Accept: application/json</p>
          <p>content-type : application/json</p>
          <h6><b>body:</b></h6>
          <p>Type: json</p>
          <p>data: email(string - required) , password(string - required)</p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data: id , name , email , profile, access_token</p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>422</td>
                <td>Unprocessable Entity</td>
                <td>The given data was invalid : There may be required data missing, or The email  unvalid email address</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>401</td>
                <td>Unauthorized</td>
                <td>The email may not be registered, or it is incorrect, or the password is incorrect</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">3</div>
          <h3>Add a personal photo and information for you as a user</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/profile</span></h6>
          <h6><b>method:</b> <span>POST</span></h6>
          <h6><b>headers:</b></h6>
          <p> Accept: application/json</p>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h6><b>body:</b></h6>
          <p>Type: FormData</p>
          <p>data:(input name=name(string - required)) , (input name=name(string - required)) , (input name=description(string))) , (input name=file(required))</p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data: {user {id , name , email , profile {description ,file_url}}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>422</td>
                <td>Unprocessable Entity</td>
                <td>The given data was invalid : There may be required data missing, or The email  unvalid email address , or The email has already been taken, or the file type is not : jpg, jpeg, png ,  or The file greater than 5000 KB</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>401</td>
                <td>Unauthorized</td>
                <td>You have not access_token</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">4</div>
          <h3>Posting a picture with its title and information about it</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/photos</span></h6>
          <h6><b>method:</b> <span>POST</span></h6>
          <h6><b>headers:</b></h6>
          <p> Accept: application/json</p>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h6><b>body:</b></h6>
          <p>Type: FormData</p>
          <p>data:(input name=title(string - required)) , (input name=description(string))) , (input name=file(required))</p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data: {message {id , title , description , photo_url ,  user {id ,name , email , profile {description ,file_url}}}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>422</td>
                <td>Unprocessable Entity</td>
                <td>The given data was invalid : There may be required data missing , or the file type is not : jpg, jpeg, png ,  or The file greater than 5000 KB</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>401</td>
                <td>Unauthorized</td>
                <td>You have not access_token</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">5</div>
          <h3>Review all the photos that have been uploaded by users</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/photos</span></h6>
          <h6><b>method:</b> <span>GET</span></h6>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p><b>We used Data Pagination:</b>The sum of the values to be returned is 100. You need to fetch more results. Add the param page to the path to the example (http://tawfig.info/api/photos?page=5)<u class="text-danger"> We recommend that you look at the results by visiting the Test Online page</u></p>
          <p>data: {[{id , title , description , photo_url ,  user {id ,name , email , profile{description , file_url}}}], links{first , last , prev ,next}, meta{current_page , from , last_page, links [{url,label, active}], path , per_page , to , total}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">6</div>
          <h3>View your posted photos</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/my-photos</span></h6>
          <h6><b>method:</b> <span>GET</span></h6>
          <h6><b>headers:</b></h6>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data:{user {id , name , email , profile {description , file_url} , photos[{id , title , description , photo_url}]}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">7</div>
          <h3>Delete your posted photos</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/photos/{photoId}</span></h6>
          <h6><b>method:</b> <span>DELETE</span></h6>
          <h6><b>headers:</b></h6>
          <p> Accept: application/json</p>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data:{message: resource deleted} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>404</td>
                <td>Not Found</td>
                <td>the photo Id incorrect, or the photo is deleted</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>401</td>
                <td>Unauthorized</td>
                <td>You have not access_token , or you don't have this photo</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">8</div>
          <h3>Add post</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/posts</span></h6>
          <h6><b>method:</b> <span>POST</span></h6>
          <h6><b>headers:</b></h6>
          <p> Accept: application/json</p>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h6><b>body:</b></h6>
          <p>Type: FormData</p>
          <p>data:(input name=post_title(string - required)) , (input name=post_body(string)))</p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data: {message {id , post_title , post_body ,  user {id ,name , email , profile {description ,file_url}}}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>422</td>
                <td>Unprocessable Entity</td>
                <td>The given data was invalid : There may be required data missing</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>401</td>
                <td>Unauthorized</td>
                <td>You have not access_token</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">9</div>
          <h3>get all the posts that have been posting by users</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/posts</span></h6>
          <h6><b>method:</b> <span>GET</span></h6>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p><b>We used Data Pagination:</b>The sum of the values to be returned is 100. You need to fetch more results. Add the param page to the path to the example (https://tawfig.info/api/photos?page=5)<u class="text-danger"> We recommend that you look at the results by visiting the Test Online page</u></p>
          <p>data: {[{id , post_title , post_body , created_at, user {id ,name , email , profile{description , file_url}} , comments {id ,  comment_body ,  user {id ,name , email , profile{description , file_url}}}], links{first , last , prev ,next}, meta{current_page , from , last_page, links [{url,label, active}], path , per_page , to , total}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">10</div>
          <h3>View your posts</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/my-posts</span></h6>
          <h6><b>method:</b> <span>GET</span></h6>
          <h6><b>headers:</b></h6>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p><b>We used Data Pagination:</b>The sum of the values to be returned is 100. You need to fetch more results. Add the param page to the path to the example (https://tawfig.info/api/photos?page=5)<u class="text-danger"> We recommend that you look at the results by visiting the Test Online page</u></p>
          <p>data: {[{id , post_title , post_body , created_at, user {id ,name , email , profile{description , file_url}} , comments {id ,  comment_body ,  user {id ,name , email , profile{description , file_url}}}], links{first , last , prev ,next}, meta{current_page , from , last_page, links [{url,label, active}], path , per_page , to , total}} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="d-flex ">
          <div class="list">11</div>
          <h3>Delete your post</h3>
        </div>
        <div class="m-5 mt-0">
          <h5><b><u>Request</u></b></h5>
          <h6><b>url:</b> <span>https://api.tawfig.info/posts/{postId}</span></h6>
          <h6><b>method:</b> <span>DELETE</span></h6>
          <h6><b>headers:</b></h6>
          <p> Accept: application/json</p>
          <p> Authorization:  access_token <span class="text-danger">(Token returned after login or registration)</span></p>
          <h5><b><u>Response</u></b></h5>
          <p>Type: json</p>
          <p>data:{message: post deleted successfully} </p>
          <div>
            <h5><b><u>Error handling</u></b></h5>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">statusText</th>
                <th scope="col">description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>404</td>
                <td>Not Found</td>
                <td>the post Id incorrect, or the post is deleted</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>Internal Server Error</td>
                <td>A server error occurred, try again when this error is repeated, contact us</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>401</td>
                <td>Unauthorized</td>
                <td>You have not access_token , or you don't have this photo</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {


}
</script>

<style scoped>
#doc{
  direction: ltr;
}
.list{
  color: #ffffff;
  margin: 3px;
  font-size: 1.5rem;
  font-weight: bold;
  --size: 32px;
  left: calc(-1 * var(--size) - 10px);
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  top: 0;
 /* transform: rotate(-10deg);*/
  background: #2726dd;
  border-radius: 50%;
  text-align: center;
  box-shadow: 1px 1px 0 #999;
}
</style>