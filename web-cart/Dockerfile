# Name:     web-cart
# Time:     2017-05-07

FROM java:8-jre-alpine

LABEL MAINTAINER=huangjf<itfront@163.com>

RUN mkdir /app

WORKDIR /app

COPY build/libs/web-cart-1.0.0.jar /app

ADD http://on2bs9q7q.bkt.clouddn.com/wait-for-it.sh /

RUN chmod +x /wait-for-it.sh

ENTRYPOINT ["./wait-for-it.sh", "service-cart:8517","--", "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/web-cart-1.0.0.jar"]

EXPOSE 8106