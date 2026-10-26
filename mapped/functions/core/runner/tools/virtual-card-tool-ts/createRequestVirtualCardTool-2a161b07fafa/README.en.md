# `createRequestVirtualCardTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775376-775388](../../../../../../../reference/runtime/host-main.cjs#L775376-L775388) | `FunctionDeclaration` | no | `deps` |
| [evaluation:575021-575033](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575021-L575033) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775376-775388](../../../../../../../reference/runtime/host-main.cjs#L775376-L775388) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575021-575033](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575021-L575033) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775376

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e047031b9f9ba271db92d3d5b293b10929e308bf437408fff102b3a611897883`.

### evaluation:575021

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e047031b9f9ba271db92d3d5b293b10929e308bf437408fff102b3a611897883`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
