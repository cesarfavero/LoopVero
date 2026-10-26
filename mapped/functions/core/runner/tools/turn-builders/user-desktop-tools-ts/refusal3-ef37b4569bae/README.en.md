# `refusal3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781792-781794](../../../../../../../../reference/runtime/host-main.cjs#L781792-L781794) | `FunctionDeclaration` | no | `text3` |
| [evaluation:582137-582139](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582137-L582139) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781792-781794](../../../../../../../../reference/runtime/host-main.cjs#L781792-L781794) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582137-582139](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582137-L582139) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781792

Calls written directly in this body: `textItem`, `toolResult`.

SHA-256 of the source span: `cdb06e3f9479c8ed8393e86517b90c9e5767c880e0accd142b667ba60a75b72c`.

### evaluation:582137

Calls written directly in this body: `textItem`, `toolResult`.

SHA-256 of the source span: `cdb06e3f9479c8ed8393e86517b90c9e5767c880e0accd142b667ba60a75b72c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
