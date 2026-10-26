# `createServerAgentProxy/serverRoomsEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714723-714740](../../../../../../../reference/runtime/host-main.cjs#L714723-L714740) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714723-714740](../../../../../../../reference/runtime/host-main.cjs#L714723-L714740) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:714723

Calls written directly in this body: `clock.monotonicNow`, `deps.log`, `errorLogTag`, `roomClient.getGrokBotRuntimeCapabilities`.

Assignment or increment targets: `enabled`, `roomsCapability`.

SHA-256 of the source span: `9d2c630248bb0974042740ff0cb04c10a375764ea599aed2f62f8ca2be09b7d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
