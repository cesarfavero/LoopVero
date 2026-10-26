# `botTemplateShareRefusalToolResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771114-771126](../../../../../../../reference/runtime/host-main.cjs#L771114-L771126) | `FunctionDeclaration` | no | `error64` |
| [evaluation:570348-570360](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570348-L570360) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771114-771126](../../../../../../../reference/runtime/host-main.cjs#L771114-L771126) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:570348-570360](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570348-L570360) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:771114

Calls written directly in this body: `botTemplateShareRefusalReason`.

SHA-256 of the source span: `c43562e4a912845fdf8de0f817db23f0aa66fb70fb63aa29bbd6245937b26685`.

### evaluation:570348

Calls written directly in this body: `botTemplateShareRefusalReason`.

SHA-256 of the source span: `eaf93fce7617a5e36679c94ec00dc97a95b836eded870dd236c97d1b19a9af19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
