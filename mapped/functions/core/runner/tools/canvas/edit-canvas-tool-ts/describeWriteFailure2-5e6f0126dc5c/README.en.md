# `describeWriteFailure2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775572-775620](../../../../../../../../reference/runtime/host-main.cjs#L775572-L775620) | `FunctionDeclaration` | no | `result, stored = "untouched"` |
| [evaluation:575216-575264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575216-L575264) | `FunctionDeclaration` | no | `result, stored = "untouched"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775572-775620](../../../../../../../../reference/runtime/host-main.cjs#L775572-L775620) | 11 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:575216-575264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575216-L575264) | 11 | 0 | 0 | 8 | 0 | 0 |

### host:775572

Calls written directly in this body: `.join`, `.map`.

SHA-256 of the source span: `699e19e2cd009b765c6ca5800b1846a2f4caf5903b6210ef344675f46fe08f01`.

### evaluation:575216

Calls written directly in this body: `.join`, `.map`.

SHA-256 of the source span: `699e19e2cd009b765c6ca5800b1846a2f4caf5903b6210ef344675f46fe08f01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
