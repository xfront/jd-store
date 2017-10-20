package cn.eshop.mapper;

import cn.eshop.pojo.TbCategoryImage;
import cn.eshop.pojo.TbCategoryImageExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TbCategoryImageMapper {
    int countByExample(TbCategoryImageExample example);

    int deleteByExample(TbCategoryImageExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbCategoryImage record);

    int insertSelective(TbCategoryImage record);

    List<TbCategoryImage> selectByExample(TbCategoryImageExample example);

    TbCategoryImage selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbCategoryImage record,
                                 @Param("example") TbCategoryImageExample example);

    int updateByExample(@Param("record") TbCategoryImage record, @Param("example") TbCategoryImageExample example);

    int updateByPrimaryKeySelective(TbCategoryImage record);

    int updateByPrimaryKey(TbCategoryImage record);
}