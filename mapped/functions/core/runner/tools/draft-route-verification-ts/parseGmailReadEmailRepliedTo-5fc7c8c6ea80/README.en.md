# `parseGmailReadEmailRepliedTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735054-735060](../../../../../../../reference/runtime/host-main.cjs#L735054-L735060) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540628-540634](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540628-L540634) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735054-735060](../../../../../../../reference/runtime/host-main.cjs#L735054-L735060) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540628-540634](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540628-L540634) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:735054

Calls written directly in this body: `parseDraftConnectorRecord`.

SHA-256 of the source span: `0634bc4a6ad82b7cff04bea54ead51fc6bc79e7a6d8519eae4c776cc608d25f1`.

### evaluation:540628

Calls written directly in this body: `parseDraftConnectorRecord`.

SHA-256 of the source span: `0634bc4a6ad82b7cff04bea54ead51fc6bc79e7a6d8519eae4c776cc608d25f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
