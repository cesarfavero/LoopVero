# `createCreateChannelTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-channel-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-channel-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771254-771267](../../../../../../../reference/runtime/host-main.cjs#L771254-L771267) | `FunctionDeclaration` | no | `management` |
| [evaluation:570488-570501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570488-L570501) | `FunctionDeclaration` | no | `management` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771254-771267](../../../../../../../reference/runtime/host-main.cjs#L771254-L771267) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570488-570501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570488-L570501) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771254

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `1bbb846541c9a85d650bad1c33c9f1f8c6817a3a524212a8e5e7bb9621b231b4`.

### evaluation:570488

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `1bbb846541c9a85d650bad1c33c9f1f8c6817a3a524212a8e5e7bb9621b231b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
