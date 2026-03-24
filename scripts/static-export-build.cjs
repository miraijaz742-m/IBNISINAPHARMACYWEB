/**
 * Produces `out/` for classic Firebase Hosting (`firebase deploy --only hosting`).
 * App Hosting (GitHub rollouts) uses the default `next build` without static export.
 */
process.env.NEXT_STATIC_EXPORT = "1";
const { spawnSync } = require("child_process");
const path = require("path");

const r = spawnSync(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "build"], {
  stdio: "inherit",
  env: process.env,
  cwd: path.join(__dirname, ".."),
  shell: process.platform === "win32",
});
process.exit(r.status ?? 1);
