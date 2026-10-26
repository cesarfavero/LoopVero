# `createHostCrashMarkerStore/delete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-crash-marker.ts` · [Module README](../../../../modules/host/host-crash-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471535-471543](../../../../../reference/runtime/host-main.cjs#L471535-L471543) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471535-471543](../../../../../reference/runtime/host-main.cjs#L471535-L471543) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:471535

Calls written directly in this body: `removeSandDataFileSync`, `reportFallback`.

SHA-256 of the source span: `09d29734b6616635fba02ff79b9824dd0aca95b9f7cc782a2ba8a9c1c26a7673`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
