# `schedulePendingRecovery/attempt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/extension.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729713-729740](../../../../../../../reference/runtime/host-main.cjs#L729713-L729740) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729713-729740](../../../../../../../reference/runtime/host-main.cjs#L729713-L729740) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:729713

Calls written directly in this body: `.finally`, `Promise.resolve`.

Assignment or increment targets: `inFlight`, `renewedDuringAttempt`.

SHA-256 of the source span: `db73d3b0f307739407aa43d9e65e0481bb1ac05c921b771a83e15d82121d7f16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
