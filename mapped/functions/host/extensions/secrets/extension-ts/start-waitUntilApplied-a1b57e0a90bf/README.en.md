# `start/waitUntilApplied`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/extension.ts` · [Module README](../../../../../../modules/host/extensions/secrets/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709367-709367](../../../../../../../reference/runtime/host-main.cjs#L709367-L709367) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709367-709367](../../../../../../../reference/runtime/host-main.cjs#L709367-L709367) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:709367 uses an implicit arrow-function return.

### host:709367

Calls written directly in this body: `service.waitUntilApplied`.

SHA-256 of the source span: `fbaca8b79d0d2243942a88892c44b6b07894d3c31b3b89fa138479e8d8e1527f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
