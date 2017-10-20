package cn.eshop;

import cn.eshop.utils.JedisClient;
import cn.eshop.utils.impl.JedisClientSingle;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@EnableHystrix
@Configuration
//@EnableApolloConfig
@SpringBootApplication
@EnableDiscoveryClient
public class JDStoreServiceNotifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(JDStoreServiceNotifyApplication.class, args);
    }

    @Bean
    public JedisClient jedisClient() {
        return new JedisClientSingle();
    }
}
