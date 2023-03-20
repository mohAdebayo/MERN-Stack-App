var db = connect("mongodb://localhost:27017");

db.createUser({
    user: "victor",
    pwd: "unekwu",
    roles: [ { role: "readWrite", db: "basic-mern-app" } ]
  })