# `createSendEmailTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764484-764504](../../../../../../../reference/runtime/host-main.cjs#L764484-L764504) | `FunctionDeclaration` | no | `deps` |
| [evaluation:557852-557872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557852-L557872) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764484-764504](../../../../../../../reference/runtime/host-main.cjs#L764484-L764504) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557852-557872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557852-L557872) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764484

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `38097c1a9d36f85c32e06b1a257676a79c8e9baf9a2e9b1a2c5cd970c87e4a09`.

### evaluation:557852

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `38097c1a9d36f85c32e06b1a257676a79c8e9baf9a2e9b1a2c5cd970c87e4a09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
