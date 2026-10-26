# `toolPermissionDecision`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-permissions/tool-permissions.ts` · [Module README](../../../../../../modules/core/runner/tool-permissions/tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579312-579325](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579312-L579325) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579312-579325](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579312-L579325) | 7 | 0 | 0 | 4 | 0 | 0 |

### evaluation:579312

Calls written directly in this body: `mcpServerPermissionScope`, `toolBlockedReason`.

SHA-256 of the source span: `89145b2d0ab1b37affe5631cc15cfdeacf1b7f6e0e3cad69484b18741bd180b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
