# `createReactToMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-reaction-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765582-765606](../../../../../../../reference/runtime/host-main.cjs#L765582-L765606) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558948-558972](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558948-L558972) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765582-765606](../../../../../../../reference/runtime/host-main.cjs#L765582-L765606) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558948-558972](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558948-L558972) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765582

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e0caeca2e1c689bfde1cefc237cdd02227ad0e473ba0b2b7fc2f0c05ad56b586`.

### evaluation:558948

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e0caeca2e1c689bfde1cefc237cdd02227ad0e473ba0b2b7fc2f0c05ad56b586`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
