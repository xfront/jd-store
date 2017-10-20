package cn.eshop.item.service.hystrix;

import cn.eshop.item.service.ItemService;
import cn.eshop.pojo.TbItem;
import cn.eshop.pojo.TbItemDesc;
import org.springframework.stereotype.Component;

/**
 * 商品服务 熔断处理
 *
 * @author huangjf.
 * @create 2017-05-04
 */

@Component
public class ItemServiceHystrix implements ItemService {

    @Override
    public TbItem getItemById(Long itemId) {
        return null;
    }

    @Override
    public TbItemDesc getItemDescById(Long itemId) {
        return null;
    }
}
