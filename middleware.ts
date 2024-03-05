export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/new", "/signout", "/dashboard", "/dashboard/submissions"],
};
