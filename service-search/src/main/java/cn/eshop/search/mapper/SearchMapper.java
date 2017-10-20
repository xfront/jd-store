package cn.eshop.search.mapper;

import cn.eshop.pojo.SolrItem;

import java.util.List;

/**
 * Solr操作Mapper
 *
 * @author huangjf.
 * @create 2017-02-04 下午4:46
 */

public interface SearchMapper {

    List<SolrItem> getSolrItemList();

    SolrItem getSolrItemByItemId(long itemid);

}
