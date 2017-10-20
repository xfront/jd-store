package cn.eshop.admin.controller;

import cn.eshop.utils.StorageFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    public StorageFactory storageFactory() {
        return new StorageFactory();
    }
}
