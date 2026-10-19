# Local process boundaries

## Current topology

```text
React renderer
  └─ validated Electron IPC
       └─ Electron Main (state, scheduler, notifications)
            └─ child process IPC (Execution Host)
                 ├─ Agent Runner
                 ├─ local tool registry
                 └─ inference adapter ── loopback ── CodexRouter
```

## Process protocol

`execution-host-client.cjs` starts `execution-host-worker.cjs` using the workspace's Electron executable in Node mode. The parent sends typed `run` messages with a unique request ID and serializable conversation input. The child streams typed `event` messages and ends with `result` or a sanitized `error`. A parent AbortSignal sends `cancel` with the same ID. Unexpected child exit rejects every pending request so the main process can record a failure instead of waiting indefinitely.

The Main process continues to own `RunScheduler`; the worker currently handles multiple run messages concurrently, with per-agent serialization provided by the parent scheduler. Worker exit loses active in-memory runs. Durable job state, restart recovery, timeouts tied to process termination, and resource limits remain unimplemented.

## Security and limits

This boundary separates responsibilities and process lifecycles. It is **not** a sandbox: the child inherits the user's OS identity, filesystem and network permissions, and can reach the same local router endpoint. No global CodexRouter URL, model, token, or setting is changed. Do not point a remote execution host at the Mac loopback address. A future remote transport needs a separately authenticated protocol and an explicit endpoint.

## Verification

`apps/desktop/tests/execution-host-client.test.cjs` covers event/result correlation, cancellation forwarding, and exit failure. On 2026-10-19, the workspace Electron binary launched the renderer and the child execution host successfully; a prompt through the existing local CodexRouter returned the exact requested response. The app icon and cursor icon font loaded in the renderer. This source-launched Electron check does not verify a packaged `.app`, prove parity with Grok Bot's process topology, or provide VM isolation.
