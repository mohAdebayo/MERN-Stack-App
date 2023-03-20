#!/bin/sh

mongo admin -u username -p password --eval 'db = db.getSiblingDB("basic-mern-app"); db.createUser({user: "victor", pwd: "unekwu", roles: [ { role: "readWrite", db: "basic-mern-app" } ]})'
