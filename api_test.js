var jsdom = require("jsdom");
var fs = require('fs');

/* json files to be tested */

//modify file contents to test signup responses
var signup_json;
fs.readFile('./static/test_files/signup.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  signup_json = data;
});

//modify file contents to test login responses
var login_json;
fs.readFile('./static/test_files/login.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  login_json = data;
});

//modify file contents to test delete user responses
var deleteUser_json;
fs.readFile('./static/test_files/deleteUser.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  deleteUser_json = data;
});

//modify file contents to test modify user responses
var modifyUser_json;
fs.readFile('./static/test_files/modifyUser.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  modifyUser_json = data;
});

//modify file contents to test modify team responses
var modifyTeam_json;
fs.readFile('./static/test_files/modifyTeam.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  modifyTeam_json = data;
});

//modify file contents to test join team responses
var joinTeam_json;
fs.readFile('./static/test_files/joinTeam.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  joinTeam_json = data;
});

//modify file contents to test delete team responses
var deleteTeam_json;
fs.readFile('./static/test_files/deleteTeam.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  deleteTeam_json = data;
});

//modify file contents to test leave team responses
var leaveTeam_json;
fs.readFile('./static/test_files/leaveTeam.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  leaveTeam_json = data;
});

/* end file read */

//JavaScript implementation of the DOM and HTML standards 
jsdom.env("", ["http://code.jquery.com/jquery.min.js"], function(err, window) {
  var $ = window.$
  $.support.cors = true;

  var server_path = "http://131.104.49.62";
  //var server_path = "http://localhost:5000"

  /* test signup */
  $.ajax({
    method: "POST",
    url: server_path + "/api/v1.0/users/accounts/participants/signup",
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
      console.log("Request failed @ " + server_path + "/api/v1.0/users/accounts/participants/signup/");
    }
  });

  /* test login */
  $.ajax({
    method: "POST",
    url: server_path + "/api/v1.0/users/accounts/login",
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
      console.log("Request failed @ " + server_path + "/api/v1.0/users/accounts/login/");
    }
  });

  /* test delete user */
  $.ajax({
    method: "DELETE",
    url: server_path + "/api/v1.0/users/manage/delete",
    data: deleteUser_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 3. Delete user response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 3. Delete user response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ " + server_path + "/api/v1.0/users/manage/delete/");
    }
  });

  /* test modify user */
  $.ajax({
    method: "PUT",
    url: server_path + "/api/v1.0/users/manage/edit",
    data: modifyUser_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 4. Modify user response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 4. Modify user response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ " + server_path + "/api/v1.0/users/manage/edit/");
    }
  });

  /* test modify team */
  $.ajax({
    method: "PUT",
    url: server_path + "/api/v1.0/teams/teamaccounts/edit",
    data: modifyTeam_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 5. Modify team response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 5. Modify team response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/edit/");
    }
  });

  /* test join team */
  $.ajax({
    method: "PUT",
    url: server_path + "/api/v1.0/teams/teamaccounts/join",
    data: joinTeam_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 6. Join team response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 6. Join team response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/join/");
    }
  });

  /* test delete team */
  $.ajax({
    method: "DELETE",
    url: server_path + "/api/v1.0/teams/teamaccounts/delete",
    data: deleteTeam_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 7. Delete team response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 7. Delete team response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/delete/");
    }
  });

  /* test leave team */
  $.ajax({
    method: "PUT",
    url: server_path + "/api/v1.0/teams/teamaccounts/leave",
    data: leaveTeam_json,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data, status, jqXHR) {
      console.log("### 8. Leave team response: ###");
      console.log(data);
    },
    error: function(jqXHR) {
      console.log("### 8. Leave team response: ###");
      console.log("Status: " + jqXHR.status);
      console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/leave/");
    }
  });
});