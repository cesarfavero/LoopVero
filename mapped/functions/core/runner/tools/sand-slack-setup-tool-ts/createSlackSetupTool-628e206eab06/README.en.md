# `createSlackSetupTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-slack-setup-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-slack-setup-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781341-781362](../../../../../../../reference/runtime/host-main.cjs#L781341-L781362) | `FunctionDeclaration` | no | `deps` |
| [evaluation:581688-581709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581688-L581709) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781341-781362](../../../../../../../reference/runtime/host-main.cjs#L781341-L781362) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581688-581709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581688-L581709) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781341

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `03dd2b0d12957b08706c24b71a147f836d3c9c60d6b96ad94caade6ca7e4d79f`.

### evaluation:581688

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `03dd2b0d12957b08706c24b71a147f836d3c9c60d6b96ad94caade6ca7e4d79f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
