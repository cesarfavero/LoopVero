# `start/resolveAsk/onStrandedRetirement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `host/extensions/local-tool-permission/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-tool-permission/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682245-682245](../../../../../../../reference/runtime/host-main.cjs#L682245-L682245) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682245-682245](../../../../../../../reference/runtime/host-main.cjs#L682245-L682245) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:682245 uses an implicit arrow-function return.

### host:682245

Calls written directly in this body: `context2.deps.telemetry.logs.reportLocalToolPermissionStrandedRetirement`.

SHA-256 of the source span: `04ca0b8ecd37ae682a420c589dbe180b24014c0c59b871d925c6d22d55cbe8bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
