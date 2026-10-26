# `keptAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755768-755788](../../../../../../../../reference/runtime/host-main.cjs#L755768-L755788) | `FunctionDeclaration` | no | `{   tag,   source }` |
| [evaluation:541643-541663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541643-L541663) | `FunctionDeclaration` | no | `{   tag,   source }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755768-755788](../../../../../../../../reference/runtime/host-main.cjs#L755768-L755788) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:541643-541663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541643-L541663) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:755768

Calls written directly in this body: `.some`, `Array.from`, `attribute`, `attributes.get`, `imageSize`, `new Map`, `safeUrl`, `source.matchAll`.

SHA-256 of the source span: `3dd56d3810c6e53289f7dda640adb8642e03bafe677ef08fd8dc83c3f0ddc405`.

### evaluation:541643

Calls written directly in this body: `.some`, `Array.from`, `attribute`, `attributes.get`, `imageSize`, `new Map`, `safeUrl`, `source.matchAll`.

SHA-256 of the source span: `3dd56d3810c6e53289f7dda640adb8642e03bafe677ef08fd8dc83c3f0ddc405`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
