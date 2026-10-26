# `trimUrlToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741114-741124](../../../../../../../../reference/runtime/host-main.cjs#L741114-L741124) | `FunctionDeclaration` | no | `token` |
| [evaluation:482061-482071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482061-L482071) | `FunctionDeclaration` | no | `token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741114-741124](../../../../../../../../reference/runtime/host-main.cjs#L741114-L741124) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482061-482071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482061-L482071) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:741114

Calls written directly in this body: `URL_TRAILING_PUNCTUATION.includes`, `token.charAt`, `token.slice`, `token.split`.

Assignment or increment targets: `end`, `unmatchedClose`.

SHA-256 of the source span: `ae703053ea29d110d04b359916f632f9433d31f84ade45610fb39823521ab942`.

### evaluation:482061

Calls written directly in this body: `URL_TRAILING_PUNCTUATION.includes`, `token.charAt`, `token.slice`, `token.split`.

Assignment or increment targets: `end`, `unmatchedClose`.

SHA-256 of the source span: `ae703053ea29d110d04b359916f632f9433d31f84ade45610fb39823521ab942`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
