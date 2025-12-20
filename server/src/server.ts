import { Elysia } from "elysia";
import { join, normalize } from "path";

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = join(import.meta.dir, "..", "..", "apps", "dist");
const INDEX_FILE = join(PUBLIC_DIR, "index.html");

const app = new Elysia();

function isPathSafe(requestedPath: string): boolean {
  const normalizedPath = normalize(requestedPath);
  return !normalizedPath.includes("..");
}

function getFilePath(pathname: string): string {
  return pathname === "/" ? INDEX_FILE : join(PUBLIC_DIR, pathname);
}

app.get("/*", async ({ request, set }) => {
  try {
    const url = new URL(request.url);
    
    if (!isPathSafe(url.pathname)) {
      set.status = 403;
      return { error: "Forbidden" };
    }

    const filePath = getFilePath(url.pathname);
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return file;
    }

    const indexFile = Bun.file(INDEX_FILE);
    
    if (await indexFile.exists()) {
      return indexFile;
    }

    set.status = 404;
    return { error: "Not found" };

  } catch (error) {
    console.error("Server error:", error);
    set.status = 500;
    return { error: "Internal server error" };
  }
});

app.listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);