# `createReadEmailThreadTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-thread-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765108-765117](../../../../../../../reference/runtime/host-main.cjs#L765108-L765117) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558476-558485](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558476-L558485) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765108-765117](../../../../../../../reference/runtime/host-main.cjs#L765108-L765117) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558476-558485](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558476-L558485) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765108

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `268605e54d20d5380429b939e86e6af6190dc0ad0afe3a8a12cfeb5e79339851`.

### evaluation:558476

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `268605e54d20d5380429b939e86e6af6190dc0ad0afe3a8a12cfeb5e79339851`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
