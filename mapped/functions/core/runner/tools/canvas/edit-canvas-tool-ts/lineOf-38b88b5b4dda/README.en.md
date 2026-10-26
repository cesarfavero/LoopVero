# `lineOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775538-775544](../../../../../../../../reference/runtime/host-main.cjs#L775538-L775544) | `FunctionDeclaration` | no | `source, offset2` |
| [evaluation:575182-575188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575182-L575188) | `FunctionDeclaration` | no | `source, offset2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775538-775544](../../../../../../../../reference/runtime/host-main.cjs#L775538-L775544) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:575182-575188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575182-L575188) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:775538

Calls written directly in this body: `source.charCodeAt`.

Assignment or increment targets: `i`, `line`.

SHA-256 of the source span: `68d6fe7f398d90de776f8261b8e596456340e43f49ecb3263018fe2572c3c5ac`.

### evaluation:575182

Calls written directly in this body: `source.charCodeAt`.

Assignment or increment targets: `i`, `line`.

SHA-256 of the source span: `68d6fe7f398d90de776f8261b8e596456340e43f49ecb3263018fe2572c3c5ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
