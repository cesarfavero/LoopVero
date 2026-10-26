# `AgentMediaRootObservability.waitForProbes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-media-root-observability.ts` · [Module README](../../../../modules/host/agent-media-root-observability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723839-723843](../../../../../reference/runtime/host-main.cjs#L723839-L723843) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723839-723843](../../../../../reference/runtime/host-main.cjs#L723839-L723843) | 0 | 1 | 1 | 0 | 0 | 0 |

### host:723839

Calls written directly in this body: `Promise.allSettled`.

SHA-256 of the source span: `9ed286dbdfb5a0c8e1b94da4b33e61a1945fa324e02a1926bd49ca6e47f226d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
