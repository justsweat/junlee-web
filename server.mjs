import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = join(process.cwd(), "dist");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const safePath = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const requested = join(root, safePath);

  if (existsSync(requested) && statSync(requested).isFile()) return requested;
  if (existsSync(requested) && statSync(requested).isDirectory()) {
    const indexPath = join(requested, "index.html");
    if (existsSync(indexPath)) return indexPath;
  }

  const htmlPath = join(root, `${safePath}.html`);
  if (existsSync(htmlPath)) return htmlPath;

  return join(root, "404.html");
}

const server = createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");
  const ext = extname(filePath);

  if (!existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(filePath.endsWith("404.html") ? 404 : 200, {
    "Content-Type": mimeTypes[ext] || "application/octet-stream",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`Jun Lee Sdn Bhd site running on port ${port}`);
});
