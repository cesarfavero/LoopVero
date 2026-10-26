# `deleteIfUnchanged`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-crash-marker-forward.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-crash-marker-forward-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471570-471576](../../../../../../../reference/runtime/host-main.cjs#L471570-L471576) | `FunctionDeclaration` | yes | `store, raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471570-471576](../../../../../../../reference/runtime/host-main.cjs#L471570-L471576) | 4 | 0 | 2 | 4 | 0 | 0 |

### host:471570

Calls written directly in this body: `store.delete`, `store.read`.

SHA-256 of the source span: `4254d4a4d0364dc59ff2699f6071cf9fda702a0998abc135df0e86f80a205dbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
