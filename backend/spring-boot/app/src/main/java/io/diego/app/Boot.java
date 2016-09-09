package io.diego.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication(scanBasePackages = "io.diego")
@EnableJpaRepositories(basePackages = "io.diego.domain.model.repository")
@EntityScan(basePackages = "io.diego.domain.model.entity")
public class Boot {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Boot.class, args);
    }

}
