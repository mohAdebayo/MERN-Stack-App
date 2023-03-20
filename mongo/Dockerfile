FROM aashreys/mongo-auth:latest

ENV MONGO_INITDB_ROOT_USERNAME=username \
    MONGO_INITDB_ROOT_PASSWORD=password

COPY init.js /docker-entrypoint-initdb.d/