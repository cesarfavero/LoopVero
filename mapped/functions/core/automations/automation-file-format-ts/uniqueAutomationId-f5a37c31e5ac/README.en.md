# `uniqueAutomationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716616-716624](../../../../../../reference/runtime/host-main.cjs#L716616-L716624) | `FunctionDeclaration` | no | `name18, existingIds` |
| [evaluation:627330-627338](../../../../../../reference/runtime/sand-eval-runner.cjs#L627330-L627338) | `FunctionDeclaration` | no | `name18, existingIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716616-716624](../../../../../../reference/runtime/host-main.cjs#L716616-L716624) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:627330-627338](../../../../../../reference/runtime/sand-eval-runner.cjs#L627330-L627338) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:716616

Calls written directly in this body: `Date.now`, `existingIds.has`, `slugifyAutomationName`.

Assignment or increment targets: `suffix`.

SHA-256 of the source span: `f52db6e9000012003ff9d7580e34914c0213435d5ad2b0988ce5ed7b71b79efc`.

### evaluation:627330

Calls written directly in this body: `Date.now`, `existingIds.has`, `slugifyAutomationName`.

Assignment or increment targets: `suffix`.

SHA-256 of the source span: `f52db6e9000012003ff9d7580e34914c0213435d5ad2b0988ce5ed7b71b79efc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
