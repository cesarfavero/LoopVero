# `createRequestBoxHelpTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725318-725399](../../../../../../../reference/runtime/host-main.cjs#L725318-L725399) | `FunctionDeclaration` | no | `deps` |
| [evaluation:560421-560502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560421-L560502) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725318-725399](../../../../../../../reference/runtime/host-main.cjs#L725318-L725399) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560421-560502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560421-L560502) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725318

Calls written directly in this body: `Promise.resolve`, `defineCommunicateTool`.

SHA-256 of the source span: `78c9c81d176c921754108d8a7e1b2c1b5f23ae032da8d39d24108d6b6cb3801c`.

### evaluation:560421

Calls written directly in this body: `Promise.resolve`, `defineCommunicateTool`.

SHA-256 of the source span: `78c9c81d176c921754108d8a7e1b2c1b5f23ae032da8d39d24108d6b6cb3801c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
