# `startWorkingStateExport/isEligible/hasActivePause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786117-786117](../../../../../../../reference/runtime/host-main.cjs#L786117-L786117) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786117-786117](../../../../../../../reference/runtime/host-main.cjs#L786117-L786117) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786117 uses an implicit arrow-function return.

### host:786117

Calls written directly in this body: `context2.deps.transcript.getPauseState`.

SHA-256 of the source span: `1bfc90ca1987091ef8c32e6c0f71015c0c55a1707b7c1ae170c9e83181e09c09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
