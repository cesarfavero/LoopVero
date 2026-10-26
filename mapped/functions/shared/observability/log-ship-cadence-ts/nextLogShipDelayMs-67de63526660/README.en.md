# `nextLogShipDelayMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/log-ship-cadence.ts` · [Module README](../../../../../modules/shared/observability/log-ship-cadence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452654-452666](../../../../../../reference/runtime/host-main.cjs#L452654-L452666) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452654-452666](../../../../../../reference/runtime/host-main.cjs#L452654-L452666) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:452654

Calls written directly in this body: `Math.max`, `Math.round`, `backoff2`, `random`.

Assignment or increment targets: `baseMs`.

SHA-256 of the source span: `c7441ddb606b1dacb8b450948ee108adb326e0725997f953124538ee6197d06b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
