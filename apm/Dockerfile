FROM debian

RUN apt-get update \
    && apt-get install curl systemctl -y

RUN cd /home && curl -L -O https://artifacts.elastic.co/downloads/apm-server/apm-server-8.2.2-amd64.deb \
    && dpkg -i apm-server-8.2.2-amd64.deb

COPY apm-server.yml /etc/apm-server/apm-server.yml

 CMD [ "systemctl", "start", "apm-server" ] 