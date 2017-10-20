package cn.eshop.cart.service.hystrix;

import cn.eshop.cart.service.CartService;
import cn.eshop.pojo.CartInfo;
import cn.eshop.pojo.JDResult;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 购物车服务 熔断处理
 *
 * @author huangjf.
 * @create 2017-05-04 下午11:59
 */

@Component
public class CartServiceHystrix implements CartService {


    @Override
    public JDResult addCart(Long pid, Integer pcount, String uuid) {
        return null;
    }

    @Override
    public List<CartInfo> getCartInfoListByCookiesId(String cookieUUID) {
        return null;
    }

    @Override
    public JDResult decreOrIncre(Long pid, Integer pcount, Integer type, Integer index, String cookieUUID) {
        return null;
    }
}
