# `createUpdateChannelTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-channel-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-channel-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771273-771307](../../../../../../../reference/runtime/host-main.cjs#L771273-L771307) | `FunctionDeclaration` | no | `management` |
| [evaluation:570507-570541](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570507-L570541) | `FunctionDeclaration` | no | `management` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771273-771307](../../../../../../../reference/runtime/host-main.cjs#L771273-L771307) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570507-570541](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570507-L570541) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771273

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `b615b932537ce80edca961e4840236e2c99e5e7a18271f2de6f30de3b1301522`.

### evaluation:570507

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `b36f817962647a9665527bb4e9f0df51c1a6f5c00755d0eea5bb86664913b817`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
