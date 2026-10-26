# `firstThreadId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755621-755624](../../../../../../../../reference/runtime/host-main.cjs#L755621-L755624) | `FunctionDeclaration` | no | `searchText` |
| [evaluation:541496-541499](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541496-L541499) | `FunctionDeclaration` | no | `searchText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755621-755624](../../../../../../../../reference/runtime/host-main.cjs#L755621-L755624) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541496-541499](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541496-L541499) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755621

Calls written directly in this body: `listOf`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `abcdb9a8bb293efe84d65c16f7b38c13baa1b1c8fc6d9cc53845c2df8bc7ef00`.

### evaluation:541496

Calls written directly in this body: `listOf`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `abcdb9a8bb293efe84d65c16f7b38c13baa1b1c8fc6d9cc53845c2df8bc7ef00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
