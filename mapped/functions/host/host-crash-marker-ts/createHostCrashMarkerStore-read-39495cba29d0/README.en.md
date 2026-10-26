# `createHostCrashMarkerStore/read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-crash-marker.ts` · [Module README](../../../../modules/host/host-crash-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471518-471526](../../../../../reference/runtime/host-main.cjs#L471518-L471526) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471518-471526](../../../../../reference/runtime/host-main.cjs#L471518-L471526) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:471518

Calls written directly in this body: `readSandDataFileIfPresentSync`, `reportFallback`.

SHA-256 of the source span: `aeca11998947530f7a80dbd5e5abeb889101e29c382e585e2cea52da9e4374ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
