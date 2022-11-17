import { SystemConfig } from '@configs'
import { LoginRouteKey, NotFoundRouteKey } from '@/CONSTANT'

export default (): SystemConfig => ({
  SystemName: 'YRoam Admin',
  ThemeMode: 'LIGHT',
  LayoutMode: 'SIDER_TOP_MODE',
  SettingDrawer: false,
  SiderCollapse: false,
  PrimaryColor: '#7B1FA2',
  SiderInverted: false,
  HeaderInverted: false,
  FooterInverted: false,
  HeaderHeight: 64,
  SiderWidth: 272,
  FooterHeight: 64,
  TabHeight: 44,
  TabIsFixed: true,
  WhiteRouteList: [LoginRouteKey, NotFoundRouteKey],
  RouteTransitionAnimation: 'fade',
  HandleRoute: 'SERVER'
})
