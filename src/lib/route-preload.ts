import { lazy, type ComponentType } from "react";

type PageModule = {
  default: ComponentType;
};

type RouteKey =
  | "index"
  | "courses"
  | "courseDetail"
  | "services"
  | "serviceDetail"
  | "products"
  | "blog"
  | "articleDetail"
  | "caseStudyDetail"
  | "aboutUs"
  | "contactUs"
  | "notFound"
  | "brandStyleGuide";

const pageLoaders = {
  index: () => import("@/pages/Index"),
  courses: () => import("@/pages/Courses"),
  courseDetail: () => import("@/pages/CourseDetail"),
  services: () => import("@/pages/Services"),
  serviceDetail: () => import("@/pages/ServiceDetail"),
  products: () => import("@/pages/Products"),
  blog: () => import("@/pages/Blog"),
  articleDetail: () => import("@/pages/ArticleDetail"),
  caseStudyDetail: () => import("@/pages/CaseStudyDetail"),
  aboutUs: () => import("@/pages/AboutUs"),
  contactUs: () => import("@/pages/ContactUs"),
  notFound: () => import("@/pages/NotFound"),
  brandStyleGuide: () => import("@/pages/BrandStyleGuide"),
} satisfies Record<RouteKey, () => Promise<PageModule>>;

const loadedRoutes = new Set<RouteKey>();

function preloadPage(key: RouteKey) {
  if (loadedRoutes.has(key)) return;

  loadedRoutes.add(key);
  void pageLoaders[key]().catch(() => {
    loadedRoutes.delete(key);
  });
}

export function preloadRoute(href: string) {
  const pathname = href.split(/[?#]/)[0] || "/";

  if (pathname === "/") return preloadPage("index");
  if (pathname === "/programs") return preloadPage("courses");
  if (pathname.startsWith("/programs/")) return preloadPage("courseDetail");
  if (pathname === "/services") return preloadPage("services");
  if (pathname.startsWith("/services/")) return preloadPage("serviceDetail");
  if (pathname === "/tools") return preloadPage("products");
  if (pathname === "/insights") return preloadPage("blog");
  if (pathname.startsWith("/insights/articles/")) return preloadPage("articleDetail");
  if (pathname.startsWith("/insights/case-studies/")) return preloadPage("caseStudyDetail");
  if (pathname === "/about") return preloadPage("aboutUs");
  if (pathname === "/contact") return preloadPage("contactUs");
  if (pathname === "/brand-guide") return preloadPage("brandStyleGuide");

  return preloadPage("notFound");
}

export const routeComponents = {
  Index: lazy(pageLoaders.index),
  Courses: lazy(pageLoaders.courses),
  CourseDetail: lazy(pageLoaders.courseDetail),
  Services: lazy(pageLoaders.services),
  ServiceDetail: lazy(pageLoaders.serviceDetail),
  Products: lazy(pageLoaders.products),
  Blog: lazy(pageLoaders.blog),
  ArticleDetail: lazy(pageLoaders.articleDetail),
  CaseStudyDetail: lazy(pageLoaders.caseStudyDetail),
  AboutUs: lazy(pageLoaders.aboutUs),
  ContactUs: lazy(pageLoaders.contactUs),
  NotFound: lazy(pageLoaders.notFound),
  BrandStyleGuide: lazy(pageLoaders.brandStyleGuide),
};
