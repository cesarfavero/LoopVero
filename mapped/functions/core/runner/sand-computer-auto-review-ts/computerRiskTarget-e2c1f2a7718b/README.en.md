# `computerRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699416-699430](../../../../../../reference/runtime/host-main.cjs#L699416-L699430) | `FunctionDeclaration` | no | `actionArguments, subject, instructions` |
| [evaluation:513172-513186](../../../../../../reference/runtime/sand-eval-runner.cjs#L513172-L513186) | `FunctionDeclaration` | no | `actionArguments, subject, instructions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699416-699430](../../../../../../reference/runtime/host-main.cjs#L699416-L699430) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513172-513186](../../../../../../reference/runtime/sand-eval-runner.cjs#L513172-L513186) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699416

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `28e769d0ae217c59d2d8a2ccf127402118ab5a853774ed832c73594590f31cc9`.

### evaluation:513172

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `28e769d0ae217c59d2d8a2ccf127402118ab5a853774ed832c73594590f31cc9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
