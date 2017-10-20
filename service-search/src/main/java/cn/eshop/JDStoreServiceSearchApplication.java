package cn.eshop;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Configuration;

@EnableHystrix
@Configuration
//@EnableApolloConfig
@SpringBootApplication
@EnableDiscoveryClient
@MapperScan(basePackages = "cn.eshop.search.mapper")
public class JDStoreServiceSearchApplication {

    public static void main(String[] args) {
        SpringApplication.run(JDStoreServiceSearchApplication.class, args);

    }
}
