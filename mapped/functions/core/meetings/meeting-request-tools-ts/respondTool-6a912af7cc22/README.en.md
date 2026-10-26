# `respondTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meeting-request-tools.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763376-763434](../../../../../../reference/runtime/host-main.cjs#L763376-L763434) | `FunctionDeclaration` | no | `deps` |
| [evaluation:556341-556399](../../../../../../reference/runtime/sand-eval-runner.cjs#L556341-L556399) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763376-763434](../../../../../../reference/runtime/host-main.cjs#L763376-L763434) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556341-556399](../../../../../../reference/runtime/sand-eval-runner.cjs#L556341-L556399) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763376

Calls written directly in this body: `.describe`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `928f58d73dd3bb5783a48f86ec1bc10fb963ac75a263bb5ed1d2e643aba60ff0`.

### evaluation:556341

Calls written directly in this body: `.describe`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `bb1b390ec75e8868dd83795c990bc728f002ecc6ec39c07c9f82183d23511693`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
