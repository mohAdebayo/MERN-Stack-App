var db = connect("mongodb://localhost/basic-mern-app");

db.createUser({
    user: "victor",
    pwd: "unekwu",
    roles: [ { role: "readWrite", db: "basic-mern-app" } ]
  })