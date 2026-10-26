# `createServerAgentProxy/relayVoiceCallNudge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714928-714942](../../../../../../../reference/runtime/host-main.cjs#L714928-L714942) | `ArrowFunctionExpression` | yes | `{ agentId, callId, request: request5 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714928-714942](../../../../../../../reference/runtime/host-main.cjs#L714928-L714942) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:714928

Calls written directly in this body: `SendTaskTool.definition.output.parse`, `new ServerVoiceHarnessRefusedError`, `voiceHarness.callTool`.

Explicit throw targets: `ServerVoiceHarnessRefusedError`.

SHA-256 of the source span: `6c275c1addd4b1a3afba829ef70c8ff5447149f47c220caa57ac85ac7e465459`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
