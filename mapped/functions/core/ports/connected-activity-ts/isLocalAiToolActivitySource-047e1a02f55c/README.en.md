# `isLocalAiToolActivitySource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/connected-activity.ts` · [Module README](../../../../../modules/core/ports/connected-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509077-509079](../../../../../../reference/runtime/host-main.cjs#L509077-L509079) | `FunctionDeclaration` | no | `source` |
| [evaluation:556722-556724](../../../../../../reference/runtime/sand-eval-runner.cjs#L556722-L556724) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509077-509079](../../../../../../reference/runtime/host-main.cjs#L509077-L509079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556722-556724](../../../../../../reference/runtime/sand-eval-runner.cjs#L556722-L556724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509077

Calls written directly in this body: `SAND_AI_TOOL_SOURCES.some`.

SHA-256 of the source span: `4754ec0bb061cb4e70111e50167c7a8047fbd53e1a4ef6e43004e4dbfb210dfa`.

### evaluation:556722

Calls written directly in this body: `SAND_AI_TOOL_SOURCES.some`.

SHA-256 of the source span: `4754ec0bb061cb4e70111e50167c7a8047fbd53e1a4ef6e43004e4dbfb210dfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
