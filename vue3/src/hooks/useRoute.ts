import { useRoute as useRouteAlias, useRouter as useRouterAlias } from "vue-router";
export const useRoute = () => {
  const route = useRouteAlias();
  const router = useRouterAlias();
  return {
    route,
    router
  }
}

export default useRoute;