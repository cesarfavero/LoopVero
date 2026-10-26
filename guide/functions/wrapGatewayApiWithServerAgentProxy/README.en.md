# `wrapGatewayApiWithServerAgentProxy`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:491926–492328](../../../reference/runtime/host-main.cjs#L491926-L492328).

**Component:** [gateway](../../components/gateway/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Assemble an API that retains local operations and overrides those that need to handle server agents.

## Send decision

`sendPrompt` checks `proxy.isProxiedAgent(agentId)`. Without eligibility, it uses the local API. With eligibility, it preserves a supplied nonce or creates a UUID and sends `performAction({method: "sendPrompt", args})`.

The local `settle` function interprets four outcomes:

| Outcome | Effect |
| --- | --- |
| `ok` | Transforms the value through the `onOk` callback. |
| `refused` | Throws a refusal error with the domain code. |
| `unavailable` | Throws an explicit unavailability error. |
| `unimplemented` | Executes the fallback callback. |

This avoids interpreting unavailability as permission to repeat an action through another route. For BOX send in this snapshot, the fallback leads to `SandBoxHarnessRetiredError`, as shown in [send-pipeline](../../../reference/runtime/host-main.cjs#L740157-L740194).

## Other responsibilities

Also handles groups, interruption, fresh/rollback, widgets, approvals, transcript reads, read state, and activity. Remote reading uses tail and pagination; an action failure and a read failure must not be confused.

## State and errors

The factory captures the API/proxy and helpers; durable state resides in the services it calls. Local activation after an action and mark-read include failure handling to avoid disrupting the main operation. The wrapper's existence proves the code connection, not the contents of the remote workflow.
