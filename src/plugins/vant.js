import Vue from 'vue'

import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Toast,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  Sidebar,
  SidebarItem,
  Search,
  List,
  Tab,
  Tabs,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Stepper,
  Card,
  SwipeCell,
  ImagePreview
} from 'vant'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Search)
Vue.use(List)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.use(Stepper)
Vue.use(Card)
Vue.use(SwipeCell)
Vue.use(ImagePreview)

// 全局挂载Toast提示框
Vue.prototype.$toast = Toast
