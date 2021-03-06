package cn.eshop.search.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 搜索 全局异常处理
 *
 * @author huangjf.
 * @create 2017-02-05 下午3:49
 */


public class GlobalException implements HandlerExceptionResolver {

    private static final Logger logger = LoggerFactory.getLogger(GlobalException.class);

    @Override
    public ModelAndView resolveException(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) {

        logger.info("进入search 全局异常处理器！");

        //控制台打印异常
        e.printStackTrace();

        logger.error("发生异常！",e);

        // 发短信 发邮件 ...

        // 跳转错误页面
        ModelAndView modelAndView = new ModelAndView();

        modelAndView.addObject("message", "服务器开小差，请稍后重试！");
        modelAndView.setViewName("error/exception");

        return modelAndView;
    }
}
