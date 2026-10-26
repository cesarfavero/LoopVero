# `resolveSandTurnToolDecisions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/enforcement.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/enforcement-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:543256-543286](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543256-L543286) | `FunctionDeclaration` | no | `runner` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543256-543286](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543256-L543286) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:543256

Calls written directly in this body: `isSandSubagentHistoryKind`, `resolveSandAgentKind`, `resolveSandAgentTools`, `runner.gates.subagentHistoryTools`, `sandAgentToolsPlacedByManifest`.

SHA-256 of the source span: `13b42c7b27a31e5f40cfa4d387191fd132970c2df2524a6c5fff58e28fae5283`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
