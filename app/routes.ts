import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";

export default [
    index("routes/index.tsx"),
    route("/login", "routes/login/index.tsx"),
    ...prefix("article", [
        route("/:id", "routes/article/index.tsx")
    ]),
    route("*", "routes/404.tsx")
] satisfies RouteConfig;

// export default flatRoutes();
