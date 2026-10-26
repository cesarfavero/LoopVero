# `isDraftableSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:541954-541958](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541954-L541958) | `FunctionDeclaration` | no | `deps, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541954-541958](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541954-L541958) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:541954

Calls written directly in this body: `.toLowerCase`, `deps.connectors`, `deps.draftToolAvailable`, `deps.resolveServerHost`, `findExternalSendConnector`, `isDraftRouteVerifiableHost`.

SHA-256 of the source span: `afcdc37da6eb98689d6be1f44f740f7990ed542001f19da1d4f3e6fa17705b16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
