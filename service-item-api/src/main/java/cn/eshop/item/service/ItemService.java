package cn.eshop.item.service;

import cn.eshop.item.service.hystrix.ItemServiceHystrix;
import cn.eshop.pojo.TbItem;
import cn.eshop.pojo.TbItemDesc;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 商品 Service
 *
 * @author huangjf.
 * @create 2017-05-04
 */

@FeignClient(value = "service-item",fallback = ItemServiceHystrix.class)
public interface ItemService {

    @RequestMapping(value = "/getItemById/{id}",method = RequestMethod.POST)
    TbItem getItemById(@PathVariable("id") Long itemId);

    @RequestMapping(value = "/getItemDescById/{id}",method = RequestMethod.POST)
    TbItemDesc getItemDescById(@PathVariable("id") Long itemId);


}
