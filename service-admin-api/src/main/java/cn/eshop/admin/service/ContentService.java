package cn.eshop.admin.service;


import cn.eshop.admin.service.hystrix.ContentServiceHystrix;
import cn.eshop.pojo.TbCategorySecondary;
import cn.eshop.pojo.JDResult;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

/**
 * 内容维护
 *
 * @author huangjf.
 * @create 2017-04-27
 */

@FeignClient(value = "service-admin",fallback = ContentServiceHystrix.class)
public interface ContentService {

    @RequestMapping(value = "/getCategoryList",method = RequestMethod.POST)
    Map<String, Object> getCategoryList(
            @RequestParam("sEcho")          Integer sEcho, 
            @RequestParam("iDisplayStart")  Integer iDisplayStart, 
            @RequestParam("iDisplayLength") Integer iDisplayLength
    );

    @RequestMapping(value = "/save/category",method = RequestMethod.POST)
    JDResult saveCategory(
            @RequestParam("id")             String id, 
            @RequestParam("name")           String name, 
            @RequestParam("sort_order")     Integer sort_order
    );

    @RequestMapping(value = "/getCategorySecondary",method = RequestMethod.POST)
    Map<String,Object> getCategorySecondaryList(
            @RequestParam("sEcho")          Integer sEcho, 
            @RequestParam("iDisplayStart")  Integer iDisplayStart,
            @RequestParam("iDisplayLength") Integer iDisplayLength
    );

    @RequestMapping(value = "/getSearchCategorySecondaryList",method = RequestMethod.POST)
    Map<String,Object> getSearchCategorySecondaryList(
            @RequestParam("sSearch")        String sSearch, 
            @RequestParam("sEcho")          Integer sEcho, 
            @RequestParam("iDisplayStart")  Integer iDisplayStart, 
            @RequestParam("iDisplayLength") Integer iDisplayLength
    );

    @RequestMapping(value = "/saveCategorySecondary",method = RequestMethod.POST)
    JDResult saveCategorySecondary(TbCategorySecondary categorySecondary);
}
