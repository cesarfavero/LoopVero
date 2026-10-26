# `hasChannelReadMcpTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/channel/channel-read-tools-gate.ts` · [Module README](../../../../../../../modules/core/runner/tools/channel/channel-read-tools-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768155-768157](../../../../../../../../reference/runtime/host-main.cjs#L768155-L768157) | `FunctionDeclaration` | no | `spec, mcpTools` |
| [evaluation:563671-563673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563671-L563673) | `FunctionDeclaration` | no | `spec, mcpTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768155-768157](../../../../../../../../reference/runtime/host-main.cjs#L768155-L768157) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563671-563673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563671-L563673) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768155

Calls written directly in this body: `mcpTools.some`.

SHA-256 of the source span: `f5656c4f4c3d612b5e4eb78b1fb957809d07fd51aea221d67acdf1afbe9fc188`.

### evaluation:563671

Calls written directly in this body: `mcpTools.some`.

SHA-256 of the source span: `f5656c4f4c3d612b5e4eb78b1fb957809d07fd51aea221d67acdf1afbe9fc188`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
