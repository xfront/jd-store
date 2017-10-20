package cn.eshop;

import cn.eshop.utils.JedisClient;
import cn.eshop.utils.impl.JedisClientSingle;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableHystrix
@Configuration
//@EnableApolloConfig
@SpringBootApplication
@EnableDiscoveryClient
@EnableTransactionManagement
@MapperScan(basePackages = "cn.eshop.mapper")
public class JDStoreServicePortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(JDStoreServicePortalApplication.class, args);

    }

    @Bean
    public JedisClient jedisClient() {
        return new JedisClientSingle();
    }
}
