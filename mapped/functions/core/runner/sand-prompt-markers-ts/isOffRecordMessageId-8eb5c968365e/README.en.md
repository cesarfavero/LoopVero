# `isOffRecordMessageId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491173-491175](../../../../../../reference/runtime/host-main.cjs#L491173-L491175) | `FunctionDeclaration` | no | `messageId` |
| [evaluation:526092-526094](../../../../../../reference/runtime/sand-eval-runner.cjs#L526092-L526094) | `FunctionDeclaration` | no | `messageId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491173-491175](../../../../../../reference/runtime/host-main.cjs#L491173-L491175) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526092-526094](../../../../../../reference/runtime/sand-eval-runner.cjs#L526092-L526094) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491173

Calls written directly in this body: `messageId.startsWith`.

SHA-256 of the source span: `1971e87dc52208770dd728546e5a12c7b19ccfc17f67cee68289f5ef64813ee1`.

### evaluation:526092

Calls written directly in this body: `messageId.startsWith`.

SHA-256 of the source span: `1971e87dc52208770dd728546e5a12c7b19ccfc17f67cee68289f5ef64813ee1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
