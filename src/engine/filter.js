import Vue from 'vue'
import { DateFormat } from '@/engine'

const initFilter = () => {

    // 时间格式化filter
    Vue.filter('dateFormat', (date, fmt = 'yyyy-MM-dd HH:mm:ss') => {
        if (!date) {
          return ''
        }
        return DateFormat.format(date, fmt)
      })

    // 状态filter
    Vue.filter('status', status => {
        let statusAttrs = [
            "未知",
            "保存",
            "提交",
            "审核通过",
            "审核退回",
            "废弃"
        ]
        return statusAttrs[status]
    })

}

export { initFilter }