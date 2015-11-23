import json, MySQLdb
from flask import Flask, jsonify, abort, request

app = Flask(__name__, static_url_path="/static")

### database ###
# establish db connection
def connect_db():
    global db
    global cur
    # the following is purely for example
    db = MySQLdb.connect(host="dursley.socs.uoguelph.ca", # db host, I DO NOT KNOW IF THIS IS WHAT WE USE, JUST AN EXAMPLE !!!
                       user="user", # db username
                       passwd="pass", # db password
                       db="db_name") # name of the db
    cur = db.cursor() # this is the cursor used to execute MySQL commands
    return

# EXAMPLE DB QUERY FUNCTION
def query_db(queryType, query):
    try:
        # example SQL call, command itself is not relevant
        cur.execute("SELECT column FROM table WHERE queryType LIKE %s AND WHERE queryText LIKE %s", (queryType, query)) # execute("MySQL command", list_of_data)
        return cur.fetchone() # retrieves the next row of a query result set
        #return cur.fetchall() # retrieves all (or all remaining) rows of a query result set
    except:
        print "Error: " + query " of type " + queryType + " not found."
        return None

# EXAMPLE DB STORE FUNCTION
def store_db(queryType, query, result):
    try:
        # example SQL call, command itself is not relevant
        cur.execute("INSERT INTO table WHERE queryType LIKE %s (queryText, column) VALUES (%s, %s)", (queryType, query, result))
    except:
        pass
    return

### api routing ###
# sign up user request
@app.route("/api/v1.0/users/accounts/participants/signup/", methods=["POST"])
def signup_user():
    #json_request = open("static/signup.json").read() # testing functionality
    json_request = request.get_json(silent=True) # POST request body
    signup_dict = json.loads(json_request)

    # 400 error check for required fields
    if(signup_dict["userName"] == ""):
        abort(400)
    if(signup_dict["password"] == ""):
        abort(400)
    if(signup_dict["email"] == ""):
        abort(400)
    if(signup_dict["givenName"] == ""):
        abort(400)
    if(signup_dict["familyName"] == ""):
        abort(400)
    if(signup_dict["country"] == ""):
        abort(400)
    if(signup_dict["province"] == ""):
        abort(400)
    if not isinstance(signup_dict["visualAccessibility"], bool):
        abort(400)
    if not isinstance(signup_dict["hearingAccessibility"], bool):
        abort(400)
    if not isinstance(signup_dict["motorAccessibility"], bool):
        abort(400)
    if not isinstance(signup_dict["cognitiveAccessibility"], bool):
        abort(400)
    if not isinstance(signup_dict["teamCaptain"], bool):
        abort(400)
    if(signup_dict["teamCaptain"] == True):
        if(signup_dict["teamName"] == ""):
            abort(400)
        if(signup_dict["member1"] == ""):
            abort(400)
        if(signup_dict["member2"] == ""):
            abort(400)
        if(signup_dict["member3"] == ""):
            abort(400)

    # do MySQL work here #
    # ------------------ #
    #                    #

    # POST response body pulled from database
    signup_response = {}
    signup_response["userType"] = ""
    signup_response["userId"] = ""
    signup_response["userName"] = ""
    signup_response["password"] = ""
    signup_response["email"] = ""
    signup_response["givenName"] = ""
    signup_response["familyName"] = ""
    signup_response["country"] = ""
    signup_response["province"] = ""
    signup_response["city"] = ""
    signup_response["visualAccessibility"] = ""
    signup_response["hearingAccessibility"] = ""
    signup_response["motorAccessibility"] = ""
    signup_response["cognitiveAccessibility"] = ""
    signup_response["teamCaptain"] = ""
    signup_response["teamName"] = ""
    signup_response["member1"] = ""
    signup_response["member2"] = ""
    signup_response["member3"] = ""
    signup_response["member4"] = ""

    return jsonify(signup_response), 200, {"ContentType":"application/json"} 

# sign in user request
@app.route("/api/v1.0/users/accounts/login/", methods=["POST"])
def signin_user():
    json_request = request.get_json(silent=True) # POST request body
    signin_dict = json.loads(json_request)

    # 400 error check for required fields
    if not isinstance(signin_dict["userId"], int):
        abort(400)
    if(signin_dict["userName"] == ""):
        abort(400)
    if(signin_dict["password"] == ""):
        abort(400)

    # 403 error check if user and pass in database match
    # do MySQL work here #
    # ------------------ #
    #                    #

    # POST response body pulled from database
    signin_response = {}
    signin_response["userType"] = ""
    signin_response["userId"] = ""
    signin_response["userName"] = ""
    signin_response["password"] = ""
    signin_response["email"] = ""
    signin_response["givenName"] = ""
    signin_response["familyName"] = ""
    signin_response["country"] = ""
    signin_response["province"] = ""
    signin_response["city"] = ""
    signin_response["visualAccessibility"] = ""
    signin_response["hearingAccessibility"] = ""
    signin_response["motorAccessibility"] = ""
    signin_response["cognitiveAccessibility"] = ""

    return jsonify(signin_response), 200, {"ContentType":"application/json"} 

# delete user request
@app.route("/api/v1.0/users/manage/delete/", methods=["POST"])
def delete_user():
    json_request = request.get_json(silent=True) # POST request body
    delete_dict = json.loads(json_request)

    # 400 error check for required fields
    if(delete_dict["userName"] == ""):
        abort(400)
    if(delete_dict["userName"] == ""):
        abort(400)
    if(delete_dict["password"] == ""):
        abort(400)

    # 403 error check if user id in database match
    # do MySQL work here #
    # ------------------ #
    #                    #

    return json.dumps({"success":True}), 200, {"ContentType":"application/json"}

# modify user request
@app.route("/api/v1.0/users/manage/edit/", methods=["PUT"])
def modify_user():
    json_request = request.get_json(silent=True) # POST request body
    modify_dict = json.loads(json_request)

    # 400 error check for required fields
    if not isinstance(modify_dict["userId"], int):
        abort(400)

    # 403 error check if user id in database match
    # do MySQL work here #
    # ------------------ #
    #                    #

    return json.dumps({"success":True}), 200, {"ContentType":"application/json"}



# THE FOLLOWING ARE PURELY FOR EXAMPLES OF USING FLASK FOR INTERACTING WITH A DICTIONARY #

# temporary user dictionary for api testing purposes
users = [
    {
        "id": 1,
        "username": u"user1",
        "password": u"password1",
        "email": u"user1@email.com"
    },
    {
        "id": 2,
        "username": u"user2",
        "password": u"password2",
        "email": u"user2@email.com"
    }
]

# retrieve user from database
@app.route("/trickoreat/api/v1.0/users/<string:username>", methods=["GET"])
def get(username):
    # MySQL calls to retrieve data normally goes here
    user = [user for user in users if user["username"] == username]
    if len(user) == 0:
        abort(404)
    return jsonify({"user": user[0]}) # returns json of single user

# create new user in database
@app.route("/trickoreat/api/v1.0/users/", methods=["POST"])
def create():
    # MySQL calls to create data normally goes here
    # example user create, this only requires a username so it"s extremely primitive and needs to be incorporated based on the MySQL database 
    if not request.json or not "username" in request.json:
        abort(400)
    user = {
        "id": users[-1]["id"] + 1,
        "username": request.json["username"],
        "password": "",
        "email": ""
    }
    user.append(user)
    return jsonify({"user": user}), 201

# update user in database
@app.route("/trickoreat/api/v1.0/users/<string:username>", methods=["PUT"])
def update(username):
    # MySQL calls to update data normally goes here
    user = [user for user in users if user["username"] == username]
    if len(user) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if "title" in request.json and type(request.json["title"]) != unicode:
        abort(400)
    if "password" in request.json and type(request.json["password"]) != unicode:
        abort(400)
    if "email" in request.json and type(request.json["email"]) != unicode:
        abort(400)
    user[0]["title"] = request.json.get("title", user[0]["title"])
    user[0]["password"] = request.json.get("password", user[0]["password"])
    user[0]["email"] = request.json.get("email", user[0]["email"])
    return jsonify({"user": user[0]})

# delete user in database
@app.route("/trickoreat/api/v1.0/users/<string:username>", methods=["DELETE"])
def delete(username):
    # MySQL calls to delete data normally goes here
    user = [user for user in users if user["username"] == username]
    if len(user) == 0:
        abort(404)
    users.remove(user[0])
    return jsonify({"result": True})

# END EXAMPLES #



if __name__ == "__main__":
    #connect_db()
    app.run(debug=True)