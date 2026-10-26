# `hasSlackReadMcpTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack-read-tools-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/slack-read-tools-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768167-768169](../../../../../../../reference/runtime/host-main.cjs#L768167-L768169) | `FunctionDeclaration` | no | `mcpTools` |
| [evaluation:563683-563685](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563683-L563685) | `FunctionDeclaration` | no | `mcpTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768167-768169](../../../../../../../reference/runtime/host-main.cjs#L768167-L768169) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563683-563685](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563683-L563685) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768167

Calls written directly in this body: `hasChannelReadMcpTools`.

SHA-256 of the source span: `9e87df1e0786e0a64854e390cc65a1c20a50f67b95d7427a57d2504ed13d37d0`.

### evaluation:563683

Calls written directly in this body: `hasChannelReadMcpTools`.

SHA-256 of the source span: `9e87df1e0786e0a64854e390cc65a1c20a50f67b95d7427a57d2504ed13d37d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
