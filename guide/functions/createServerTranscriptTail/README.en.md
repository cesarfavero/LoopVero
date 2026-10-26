# `createServerTranscriptTail`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:712928–713170](../../../reference/runtime/host-main.cjs#L712928-L713170).

**Component:** [transcripts](../../components/transcripts/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Maintain a read replica of the remote transcript, handling generations, cursors, deferred bodies, and reconnections. The complete function body continues beyond the cited initialization section; state symbols and defaults are documented in the component.

## State

Maintains the connection phase, an abortable lifetime, recovery timers, the mounted agent, and a state map per agent/session. Each state stores `generation`, `streamAckUpdatedSeq`, rows, an ordering counter, sequence floor/maximum, pending bodies, and retries.

## Concurrency

`withAgent(lockKey, work)` chains Promises by key. It waits for the predecessor and releases the lock in `finally`; it removes the key only if it is still its holder. This preserves local ordering by identity without blocking the entire set of agents.

## Generations

`adoptGeneration` accepts initialization, retains the current generation, rejects a non-authoritative old generation, and resets state when the generation changes. If rows already exist, it emits an ordered clear before resetting. `epochOf` combines boot, generation, and any bumps to distinguish one replica from another.

## Fallback

`fallBack` works with the legacy BOX layer. Agents in `requiredAgents` still require the server; the presence of required agents prevents treating a disconnection as a simple equivalent local read. The proxy's `legacyEnabled: false` access does not disable required Temporal agents.

## Errors and recovery

There is stream backoff, backend probing, retries specific to bodies, a pause on clean reconnection, jitter, and an idle watchdog. These are separate mechanisms because a healthy stream can refer to a body that is still unavailable. Without authorized execution, the analysis does not claim that real-world scenarios are lossless.
