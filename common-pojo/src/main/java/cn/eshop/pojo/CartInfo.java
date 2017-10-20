package cn.eshop.pojo;

import lombok.Data;

import java.io.Serializable;

/**
 * 购物车 pojo
 *
 * @author huangjf.
 * @create 2017-02-22 下午12:58
 */

@Data
public class CartInfo implements Serializable {
    private Long    id;
    private String  name;
    private String  imageUrl;
    private String  colour;
    private String  size;
    private Long    price;
    private Long    weight;
    private Integer num;

    public Long getSum() {
        return price * num;
    }
}
