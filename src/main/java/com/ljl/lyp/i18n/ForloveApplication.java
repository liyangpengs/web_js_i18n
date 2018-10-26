package com.ljl.lyp.i18n;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author:liyangpeng
 * @date:2018/10/26 18:15
 */
@SpringBootApplication
@Controller
//@RestController
public class ForloveApplication {

    public static void main(String[] args) {
        SpringApplication.run(ForloveApplication.class);
    }

    /**
     * 首页导航
     * @return
     */
    @GetMapping("/index")
    public String Index(){
        return "index";
    }

}
