# `createServerAgentProxy/scheduleReconcile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714631-714644](../../../../../../../reference/runtime/host-main.cjs#L714631-L714644) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714631-714644](../../../../../../../reference/runtime/host-main.cjs#L714631-L714644) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:714631

Calls written directly in this body: `Math.max`, `clock.monotonicNow`, `clock.schedule`.

Assignment or increment targets: `reconcileWait`.

SHA-256 of the source span: `17c36eaab623027a82a7acc51ed820eb7e5db5c6bfb6ba49f2831a156334d119`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
