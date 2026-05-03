import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  // /exit command
  pi.registerCommand("exit", {
    description: "Exit pi",
    handler: async (_args, ctx) => {
      ctx.shutdown();
    },
  });

  // bare "exit" input (trimmed)
  pi.on("input", async (event, ctx) => {
    if (event.source === "extension") return { action: "continue" };
    if (event.text.trim() === "exit") {
      ctx.shutdown();
      return { action: "handled" };
    }
    return { action: "continue" };
  });
}
