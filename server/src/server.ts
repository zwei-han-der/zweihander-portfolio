import { Elysia } from "elysia";
import { join } from "path";

const app = new Elysia();

const publicDir = join(import.meta.dir, "..", "..", "apps", "dist");

app.get("/*", async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;

  const filePath = join(publicDir, pathname);
  const file = Bun.file(filePath);

  if (await file.exists()) {
    return file;
  }

  return Bun.file(join(publicDir, "index.html"));
});

app.listen(3000);

console.log("Server running at http://localhost:3000");
