# Name:     service-item
# Time:     2017-05-07

FROM java:8-jre-alpine

LABEL MAINTAINER=huangjf<itfront@163.com>

RUN mkdir /app

WORKDIR /app

COPY build/libs/service-item-1.0.0.jar /app

ADD http://on2bs9q7q.bkt.clouddn.com/wait-for-it.sh /

RUN chmod +x /wait-for-it.sh

ENTRYPOINT ["./wait-for-it.sh", "config1:8502","--", "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/service-item-1.0.0.jar"]

EXPOSE 8514