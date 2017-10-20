package cn.eshop.portal.service.hystrix;

import cn.eshop.pojo.TbContent;
import cn.eshop.portal.service.PortalContentService;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 首页 熔断处理
 *
 * @author huangjf.
 * @create 2017-05-04
 */

@Component
public class PortalContentServiceHystrix implements PortalContentService {


    @Override
    public List<TbContent> getContentByCid(Long bigAdIndex) {
        return null;
    }
}
