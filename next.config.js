diff --git a/next.config.js b/next.config.js
index 81c6130..c2089f8 100644
--- a/next.config.js
+++ b/next.config.js
@@ -1,9 +1,10 @@
-const { NODE_ENV, APP_NAME } = process.env;
+const { NODE_ENV, APP_NAME, HOTPEPPER_API_KEY } = process.env;

 const nextConfig = {
   publicRuntimeConfig: {
     env: NODE_ENV,
     APP_NAME,
+  },
+  serverRuntimeConfig: {
+    HOTPEPPER_API_KEY,
   },
 };