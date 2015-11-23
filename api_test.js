var jsdom = require("jsdom");
var fs = require('fs');

/* json files to be tested */

//change file path to test signup user json request
var signup_json;
fs.readFile('./static/test_files/signup.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  signup_json = data;
});

//change file path to test login user json request
var login_json;
fs.readFile('./static/test_files/login.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  login_json = data;
});

//change file path to test delete user json request
var delete_json;
fs.readFile('./static/test_files/delete.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  delete_json = data;
});

//change file path to test modify user json request
var modify_json;
fs.readFile('./static/test_files/modify.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  modify_json = data;
});

/* end file read */

//JavaScript implementation of the DOM and HTML standards 
jsdom.env("", ["http://code.jquery.com/jquery.min.js"], function(err, window) {
    var $ = window.$
    $.support.cors = true;

  /* test signup */
  $.ajax({
    method: "POST",
    url: "http://localhost:5000/api/v1.0/users/accounts/participants/signup/",
    data: signup_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 1. Sign up response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 1. Sign up response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ http://localhost:5000/api/v1.0/users/accounts/participants/signup/");
    }
  });

  /* test login */
  $.ajax({
    method: "POST",
    url: "http://localhost:5000/api/v1.0/users/accounts/login/",
    data: login_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 2. Log in response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 2. Log in response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ http://localhost:5000/api/v1.0/users/accounts/login/");
    }
  });

  /* test delete */
  $.ajax({
    method: "DELETE",
    url: "http://localhost:5000/api/v1.0/users/manage/delete/",
    data: delete_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 3. Delete response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 3. Delete response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ http://localhost:5000/api/v1.0/users/manage/delete/");
    }
  });

  /* test modify */
  $.ajax({
    method: "PUT",
    url: "http://localhost:5000/api/v1.0/users/manage/edit/",
    data: modify_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 4. Modify response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 4. Modify response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ http://localhost:5000/api/v1.0/users/manage/edit/");
    }
  });
});