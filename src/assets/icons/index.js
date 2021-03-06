//匹配规则
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon'

Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)