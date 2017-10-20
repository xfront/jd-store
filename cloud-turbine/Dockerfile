# Name:     cloud-turbine
# Time:     2017-05-07

FROM java:8-jre-alpine

LABEL MAINTAINER=huangjf<itfront@163.com>

WORKDIR /var
COPY build/libs/cloud-turbine-1.0.0.jar /var/app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/var/app.jar"]
EXPOSE 8506