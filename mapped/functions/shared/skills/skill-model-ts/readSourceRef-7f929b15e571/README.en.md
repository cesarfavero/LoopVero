# `readSourceRef`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683009-683016](../../../../../../reference/runtime/host-main.cjs#L683009-L683016) | `FunctionDeclaration` | no | `data2` |
| [evaluation:534121-534128](../../../../../../reference/runtime/sand-eval-runner.cjs#L534121-L534128) | `FunctionDeclaration` | no | `data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683009-683016](../../../../../../reference/runtime/host-main.cjs#L683009-L683016) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:534121-534128](../../../../../../reference/runtime/sand-eval-runner.cjs#L534121-L534128) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:683009

Calls written directly in this body: `isUnknownRecord2`, `raw.trim`.

SHA-256 of the source span: `51991171ebb31e0c0c530ec20059ad361a71a150a822894b1a6e012a144d9f84`.

### evaluation:534121

Calls written directly in this body: `isUnknownRecord2`, `raw.trim`.

SHA-256 of the source span: `51991171ebb31e0c0c530ec20059ad361a71a150a822894b1a6e012a144d9f84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
