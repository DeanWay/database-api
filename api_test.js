var jsdom = require("jsdom");
var fs = require('fs');
var args = process.argv.slice(2); //input arguments

/* json files to be tested */

//modify file contents to test signup as participant responses
var signup_participant_json;
fs.readFile('./static/test_files/signup_as_participant.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  signup_participant_json = data;
});

//modify file contents to test signup as team captain responses
var signup_captain_json;
fs.readFile('./static/test_files/signup_as_teamcaptain.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  signup_captain_json = data;
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

  function test(arg) {
    /* test signup as participant */
    if(arg == 1) {
      $.ajax({
        method: "POST",
        url: server_path + "/api/v1.0/users/accounts/participants/signup",
        data: signup_participant_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 1. Sign up participant response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 1. Sign up participant response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/users/accounts/participants/signup");
        }
      });
    }

    if(arg == 2) {
      /* test signup as team captain */
      $.ajax({
        method: "POST",
        url: server_path + "/api/v1.0/users/accounts/participants/signup",
        data: signup_captain_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 2. Sign up captain response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 2. Sign up captain response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/users/accounts/participants/signup");
        }
      });
    }

    if(arg == 3) {
      /* test login */
      $.ajax({
        method: "POST",
        url: server_path + "/api/v1.0/users/accounts/login",
        data: login_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 3. Log in response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 3. Log in response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/users/accounts/login");
        }
      });
    }

    if(arg == 4) {
      /* test delete user */
      $.ajax({
        method: "DELETE",
        url: server_path + "/api/v1.0/users/manage/delete",
        data: deleteUser_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 4. Delete user response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 4. Delete user response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/users/manage/delete");
        }
      });
    }

    if(arg == 5) {
      /* test modify user */
      $.ajax({
        method: "PUT",
        url: server_path + "/api/v1.0/users/manage/edit",
        data: modifyUser_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 5. Modify user response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 5. Modify user response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/users/manage/edit");
        }
      });
    }

    if(arg == 6) {
      /* test modify team */
      $.ajax({
        method: "PUT",
        url: server_path + "/api/v1.0/teams/teamaccounts/edit",
        data: modifyTeam_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 6. Modify team response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 6. Modify team response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/edit");
        }
      });
    }

    if(arg == 7) {
      /* test join team */
      $.ajax({
        method: "PUT",
        url: server_path + "/api/v1.0/teams/teamaccounts/join",
        data: joinTeam_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 7. Join team response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 7. Join team response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/join");
        }
      });
    }

    if(arg == 8) {
      /* test delete team */
      $.ajax({
        method: "DELETE",
        url: server_path + "/api/v1.0/teams/teamaccounts/delete",
        data: deleteTeam_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 8. Delete team response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 8. Delete team response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/delete");
        }
      });
    }

    if(arg == 9) {
      /* test leave team */
      $.ajax({
        method: "PUT",
        url: server_path + "/api/v1.0/teams/teamaccounts/leave",
        data: leaveTeam_json,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, status, jqXHR) {
          console.log("### 9. Leave team response: ###");
          console.log(data);
        },
        error: function(jqXHR) {
          console.log("### 9. Leave team response: ###");
          console.log("Status: " + jqXHR.status);
          console.log("Request failed @ " + server_path + "/api/v1.0/teams/teamaccounts/leave");
        }
      });
    }
  }

  test(args[0]);
});