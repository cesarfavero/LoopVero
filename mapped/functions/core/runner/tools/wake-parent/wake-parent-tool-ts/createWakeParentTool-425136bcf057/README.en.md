# `createWakeParentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/wake-parent/wake-parent-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/wake-parent/wake-parent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768628-768646](../../../../../../../../reference/runtime/host-main.cjs#L768628-L768646) | `FunctionDeclaration` | no | `deps` |
| [evaluation:564143-564161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564143-L564161) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768628-768646](../../../../../../../../reference/runtime/host-main.cjs#L768628-L768646) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564143-564161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564143-L564161) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768628

Calls written directly in this body: `.describe`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `5cb41b49538674dd9ca6a0d26bbb86bd025cd33a06de1f61f2768374a6d8470f`.

### evaluation:564143

Calls written directly in this body: `.describe`, `.min`, `.trim`, `defineCommunicateTool`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `5db865b35012d27f3eef5cf5f57e1b1e016139712070abd9e83f7fda5c764cbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
