# `createVisualizeTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/visualize/visualize-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768562-768625](../../../../../../../../reference/runtime/host-main.cjs#L768562-L768625) | `FunctionDeclaration` | no | `deps` |
| [evaluation:564077-564140](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564077-L564140) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768562-768625](../../../../../../../../reference/runtime/host-main.cjs#L768562-L768625) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564077-564140](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564077-L564140) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768562

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `5f99bb191b7a8b798504a9c00a0f192799cd9f687b134f1fadecdd7703c9857b`.

### evaluation:564077

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `4896246ec5db78672ae869f0b9c201d79ce19544ffe5aa57a6227304296b24e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
