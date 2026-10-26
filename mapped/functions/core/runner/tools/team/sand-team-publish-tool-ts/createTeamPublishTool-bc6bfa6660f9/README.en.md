# `createTeamPublishTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-publish-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-publish-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781418-781471](../../../../../../../../reference/runtime/host-main.cjs#L781418-L781471) | `FunctionDeclaration` | no | `deps` |
| [evaluation:581765-581818](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581765-L581818) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781418-781471](../../../../../../../../reference/runtime/host-main.cjs#L781418-L781471) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581765-581818](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581765-L581818) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781418

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `7296e5d6be809ab54c2a66a745bbe780bc5d7ba0e0aa4c3825e8ace93eaa4d86`.

### evaluation:581765

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `59b3f79703ff7790887db6c34267fcb75672a9d70fbb247c082d3d7e02a18339`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
