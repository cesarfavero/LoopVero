# `applyExactStringEdit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775527-775537](../../../../../../../../reference/runtime/host-main.cjs#L775527-L775537) | `FunctionDeclaration` | no | `source, edit` |
| [evaluation:575171-575181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575171-L575181) | `FunctionDeclaration` | no | `source, edit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775527-775537](../../../../../../../../reference/runtime/host-main.cjs#L775527-L775537) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:575171-575181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575171-L575181) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:775527

Calls written directly in this body: `.join`, `countOccurrences`, `source.split`.

SHA-256 of the source span: `002fe694b354c48a516c9efdd52a287e968896a6b6eec2644088ddfe9829afe3`.

### evaluation:575171

Calls written directly in this body: `.join`, `countOccurrences`, `source.split`.

SHA-256 of the source span: `002fe694b354c48a516c9efdd52a287e968896a6b6eec2644088ddfe9829afe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
