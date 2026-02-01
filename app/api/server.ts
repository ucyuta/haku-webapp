import express from "express";
import { createRequestHandler } from "@react-router/express";
import type { ServerBuild } from "react-router";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import path from "path";
import { pathToFileURL } from "url";

export const app = express();

const NODE_ENV = process.env.NODE_ENV ?? "development";

const rootDir = process.cwd();
const clientDir = path.resolve(rootDir, "build/client");
const serverEntry = path.resolve(rootDir, "build/server/index.js");

dotenv.config({
    path: path.resolve(rootDir, `.env.${NODE_ENV}`),
});

const PORT = Number(process.env.PORT ?? 3000);

app.use("/api", express.json());
app.get("/api/health", (_req, res) => res.json({ ok: true }));

if (NODE_ENV === "production") {
    app.use(express.static(clientDir));
    app.use(
        createRequestHandler({
            build: await import(pathToFileURL(serverEntry).href),
        }),
    );
} else {
    const vite = await createViteServer({
        server: { middlewareMode: true },
    });

    app.use(vite.middlewares);

    app.use(
        createRequestHandler({
            build: () => vite.ssrLoadModule('virtual:react-router/server-build') as Promise<ServerBuild>,
        }),
    );
}

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} (${NODE_ENV})`);
});