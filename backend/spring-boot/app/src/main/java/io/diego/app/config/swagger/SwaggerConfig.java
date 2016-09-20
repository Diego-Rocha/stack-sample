package io.diego.app.config.swagger;


import com.google.common.base.Predicate;
import com.google.common.base.Predicates;
import com.google.common.collect.ImmutableList;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static com.google.common.collect.Lists.newArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        Docket docket = new Docket(DocumentationType.SWAGGER_2);
        docket
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(paths())
                .build();
        docket.useDefaultResponseMessages(false);
        addGetOperations(docket);
        addPostOperations(docket);
        addPutOperations(docket);
        addDeleteOperations(docket);
        return docket;
    }

    private Predicate<String> paths() {
        return Predicates.not(PathSelectors.regex("/error"));
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Stack Sample API")
                .description("This is the stack sample API documentation")
                .termsOfServiceUrl("https://termsfeed.com/terms-conditions/3884d643b01cd59cc6f7d15b5a4cbb0b")
                .contact(new Contact("Diego Rocha", "https://github.com/Diego-Rocha", "diego.rocha.br@gmail.com"))
                .license("The MIT License (MIT)")
                .licenseUrl("https://github.com/Diego-Rocha/stack-sample/blob/master/LICENSE")
                .version("1.0")
                .build();
    }


    private void addGetOperations(Docket docket) {
        docket.globalResponseMessage(RequestMethod.GET, newArrayList(new ResponseMessageBuilder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.getReasonPhrase())
                        .build(),
                new ResponseMessageBuilder()
                        .code(HttpStatus.NOT_FOUND.value())
                        .message(HttpStatus.NOT_FOUND.getReasonPhrase())
                        .build()
        ));
    }

    private void addPostOperations(Docket docket) {
        docket.globalResponseMessage(RequestMethod.POST, newArrayList(new ResponseMessageBuilder()
                        .code(HttpStatus.CREATED.value())
                        .message(HttpStatus.CREATED.getReasonPhrase())
                        .build(),
                new ResponseMessageBuilder()
                        .code(HttpStatus.CONFLICT.value())
                        .message(HttpStatus.CONFLICT.getReasonPhrase())
                        .build())
        );
    }

    private void addPutOperations(Docket docket) {
        docket.globalResponseMessage(RequestMethod.PUT, newArrayList(
                new ResponseMessageBuilder()
                        .code(HttpStatus.OK.value())
                        .message(HttpStatus.OK.getReasonPhrase())
                        .build(),
                new ResponseMessageBuilder()
                        .code(HttpStatus.NOT_FOUND.value())
                        .message(HttpStatus.NOT_FOUND.getReasonPhrase())
                        .build()
        ));
    }


    private void addDeleteOperations(Docket docket) {
        docket.globalResponseMessage(RequestMethod.DELETE, ImmutableList.of(
                new ResponseMessageBuilder()
                        .code(HttpStatus.NO_CONTENT.value())
                        .message(HttpStatus.NO_CONTENT.getReasonPhrase())
                        .build(),
                new ResponseMessageBuilder()
                        .code(HttpStatus.NOT_FOUND.value())
                        .message(HttpStatus.NOT_FOUND.getReasonPhrase())
                        .build()
        ));
    }

}
