package cn.eshop.order.service.hystrix;

import cn.eshop.order.service.OrderService;
import cn.eshop.pojo.JDResult;
import org.springframework.stereotype.Component;

/**
 * 订单服务 熔断处理
 *
 * @author huangjf.
 * @create 2017-05-05
 */

@Component
public class OrderServiceHystrix implements OrderService {


    /**
     * 提交订单
     *
     * @param userCookieValue 用户登录Cookie
     * @param cartCookieValue 购物车Cookie
     * @param addrId          用户地址id
     * @param noAnnoyance     运费险
     * @param paymentType     支付方式 1、货到付款，2、在线支付，3、微信支付，4、支付宝支付
     * @param orderId
     * @param shippingName    快递名称 固定顺丰速运  @return
     */
    @Override
    public JDResult generateOrder(String userCookieValue, String cartCookieValue, Integer addrId, Integer noAnnoyance, Integer paymentType, String orderId, String shippingName) {
        return null;
    }
}
