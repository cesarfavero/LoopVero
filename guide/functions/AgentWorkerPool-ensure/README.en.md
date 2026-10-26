# `AgentWorkerPool.ensure`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:715316–715345](../../../reference/runtime/host-main.cjs#L715316-L715345).

**Component:** [isolation](../../components/isolation/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Contract

Accepts `agentId`, `blobDbPath`, and an optional legacy path. Returns a connection to the thread responsible for the blob DB.

## Algorithm

1. If a connection already exists for `blobDbPath`, return it.
2. Run `evictForCapacity`.
3. Assemble boot data with the agent, DB, timeout, and legacy path.
4. Create `AgentWorkerConnection` with an identity-guarded exit callback.
5. Install it in the map before awaiting initialization.
6. Start the sweep and await `connection.init`.
7. Report the thread/PID identity and return.

## Concurrency

The connection is installed before `await init`, allowing reuse during initialization. Thread requests use correlation IDs. Public operations that call `ensure` must retain the path and release it in `finally` to prevent eviction while they are working.

## Capacity

The configured default is 64, but eviction skips retained paths. If all paths are retained, `evictForCapacity` returns without removing anything, and `ensure` still creates the new connection. The number is therefore a pool capacity target, not an absolute ceiling demonstrated for every situation. Source: [host-main.cjs:715477–715497](../../../reference/runtime/host-main.cjs#L715477-L715497).

## Isolation boundary

Uses `worker_threads.Worker`, sharing the Node process. The protocol isolates storage operations in another thread; it does not itself implement filesystem, network, credential, or VM resource boundaries.
