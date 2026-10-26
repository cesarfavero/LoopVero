# `userFormFieldHasCompactCardAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726153-726158](../../../../../../../reference/runtime/host-main.cjs#L726153-L726158) | `FunctionDeclaration` | no | `field, siblings` |
| [evaluation:560771-560776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560771-L560776) | `FunctionDeclaration` | no | `field, siblings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726153-726158](../../../../../../../reference/runtime/host-main.cjs#L726153-L726158) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560771-560776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560771-L560776) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:726153

Calls written directly in this body: `aliases.some`, `compactFieldAliases`, `siblings.some`.

SHA-256 of the source span: `b422f15d8716b4090c167d90f63f44ac7390e3af9722fb48f04b7ce9a394ae10`.

### evaluation:560771

Calls written directly in this body: `aliases.some`, `compactFieldAliases`, `siblings.some`.

SHA-256 of the source span: `b422f15d8716b4090c167d90f63f44ac7390e3af9722fb48f04b7ce9a394ae10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
