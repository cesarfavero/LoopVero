# `withReadonlyCanvasPlacement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582624-582629](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582624-L582629) | `FunctionDeclaration` | no | `tool, enforceReadonlyTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582624-582629](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582624-L582629) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582624

Calls written directly in this body: `ENFORCED_READONLY_PAGE_EXCEPTION_LOOKUP_HINTS.get`.

SHA-256 of the source span: `24ac7a1afcc46a75441b501c9b13889cef7524faccbd0491781597610b833916`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
