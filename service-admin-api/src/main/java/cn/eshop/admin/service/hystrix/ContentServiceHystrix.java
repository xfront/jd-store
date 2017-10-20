package cn.eshop.admin.service.hystrix;

import cn.eshop.admin.service.ContentService;
import cn.eshop.pojo.TbCategorySecondary;
import cn.eshop.pojo.JDResult;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * 内容维护 熔断处理
 *
 * @author huangjf.
 * @create 2017-04-27 上午11:40
 */

@Component
public class ContentServiceHystrix implements ContentService {


    @Override
    public Map<String, Object> getCategoryList(Integer sEcho, Integer iDisplayStart, Integer iDisplayLength) {
        return null;
    }

    @Override
    public JDResult saveCategory(String id, String name, Integer sort_order) {
        return null;
    }

    @Override
    public Map<String, Object> getCategorySecondaryList(Integer sEcho, Integer iDisplayStart, Integer iDisplayLength) {
        return null;
    }

    @Override
    public Map<String, Object> getSearchCategorySecondaryList(String sSearch, Integer sEcho, Integer iDisplayStart, Integer iDisplayLength) {
        return null;
    }

    @Override
    public JDResult saveCategorySecondary(TbCategorySecondary categorySecondary) {
        return null;
    }
}
