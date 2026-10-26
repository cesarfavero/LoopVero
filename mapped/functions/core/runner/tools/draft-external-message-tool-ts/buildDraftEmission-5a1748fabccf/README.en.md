# `buildDraftEmission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755244-755293](../../../../../../../reference/runtime/host-main.cjs#L755244-L755293) | `FunctionDeclaration` | no | `args` |
| [evaluation:541124-541173](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541124-L541173) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755244-755293](../../../../../../../reference/runtime/host-main.cjs#L755244-L755293) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541124-541173](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541124-L541173) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:755244

Calls written directly in this body: `invariant`, `nonEmpty4`, `requirePresent`.

SHA-256 of the source span: `a9be72a8dfb24c750817cda57c9e8add16d6fe6661d4f230af904b71574b15c3`.

### evaluation:541124

Calls written directly in this body: `invariant`, `nonEmpty2`, `requirePresent`.

SHA-256 of the source span: `e1af0757fa7e411e9ad5a4affc2cecbe21c629bdb0eaf687e846b00216165267`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
