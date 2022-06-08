# Prerequisite 
[Docker-compose](https://docs.docker.com/compose/install/)

# Architecture 
![alt](https://github.com/HamimSazadah/mern_stack/blob/master/images/architectur.jpg)

# How to run
1. `docker-compose up -d` wait until all service ready
2. in pod mongodb `cd /db && mongorestore`
3. in pod elasticsearch `./bin/elasticsearch-setup-passwords interactive` update all password with **Test123**
4. login into kibana(`http://localhost:5601/`) with username `elastic` password `Test123`
5. goto menu APM in Kibana and add APM agent
6. add bucket **files** in minino `http://loaclhost:9000` with access key = `Test1234567` and secret key = `Test1234567`
7. open browser `http://loaclhost:8081/` and login with Email : `admin@waftengine.org` , Password : `Test@1234`
8. happy Exploring :)


Source React and Express :  [WaftEngine](https://github.com/WaftTech/WaftEngine)