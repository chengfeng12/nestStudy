import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

export const useRouterOptions = () => {
  const router = useRouter();
  return router.options
}
interface SideBarMenu {
  key: string
  icon?: any,
  label: string,
  title: string,
  children?: SideBarMenu[]
}

export const useSidebarRoutes = () => {
  const { routes } = useRouterOptions();
  const transformRouter = (routes: RouteRecordRaw[]) => {
    let menus = reactive<SideBarMenu[]>([])
    menus = routes.map(item => {
      const menuItem = {
        key: item.path,
        icon: item.meta?.icon,
        label: item.meta?.title,
        title: item.meta?.title,
      } as SideBarMenu
      if (item.children && item.children.length) {
        menuItem.children = transformRouter(item.children)
      }
      return menuItem
    }) as SideBarMenu[]
    return menus
  }

  const menus  = transformRouter([...routes])
  
  return menus
}