# `stableAutomationId`

[English](README.en.md) · [Português (Brasil)](README.md)

## Purpose

Converts a routine's local identity, which is relative to an agent, into a stable remote identifier. [Implementation](../../../reference/runtime/host-main.cjs#L505708-L505718).

## Algorithm

1. Concatenates `agentId`, a NUL byte, and `localId`.
2. Converts the concatenation into a `Buffer`.
3. Computes SHA-256 and obtains hexadecimal text.
4. Uses the first 32 digits for the body of a formatted UUID.
5. Sets the version nibble to `5`.
6. Adjusts the variant nibble with `(parseInt(hex[16], 16) & 3) | 8`.
7. Inserts hyphens in the 8-4-4-4-12 pattern.

The function returns a string and does not access a database, network, or clock. The NUL separator distinguishes pairs that could collide under simple concatenation, such as `ab`/`c` and `a`/`bc`.

## Compatibility caution

Although the final text has version `5`, this implementation **must not be replaced with a generic UUID v5 call**: the body is derived by SHA-256 from the stated concatenation, without an explicit UUID namespace. A library that uses a different algorithm will produce a different ID. Preserving this exact rule is necessary for reference compatibility.

Stability applies to the input pair: changing a routine's display name does not change the ID when `localId` remains the same; changing the agent or local ID changes the hash input. The hash is not authorization and does not need to be kept secret.

## Recovered callers

| Caller | Use |
| --- | --- |
| `runSandAutomationNowInSession` | Address the remote workflow in `testAutomation` |
| `AutomationRuntime.emitAutomationLifecycle` | Correlate lifecycle telemetry |
| Turn runtime | Assign `automationId` to the execution |

[Manual execution](../../../reference/runtime/host-main.cjs#L505725-L505746), [lifecycle](../../../reference/runtime/host-main.cjs#L734166-L734226), [assignment in the runner](../../../reference/runtime/sand-eval-runner.cjs#L591676-L591687).

## Limits

It does not generate `runId` or `requestId`. It also does not guarantee an action's idempotency: it only provides a reproducible identity. Deciding not to execute the same run twice belongs to the stores and remote scheduler.

[Automations](../../components/automations/README.en.md) · [Execution in a session](../runSandAutomationNowInSession/README.en.md).
