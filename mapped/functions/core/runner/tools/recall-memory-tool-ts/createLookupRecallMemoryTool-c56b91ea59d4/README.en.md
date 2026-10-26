# `createLookupRecallMemoryTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769841-769861](../../../../../../../reference/runtime/host-main.cjs#L769841-L769861) | `FunctionDeclaration` | no | `lookup3` |
| [evaluation:565510-565530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565510-L565530) | `FunctionDeclaration` | no | `lookup3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769841-769861](../../../../../../../reference/runtime/host-main.cjs#L769841-L769861) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565510-565530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565510-L565530) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769841

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `dde97fa248bc0167a26d34b5dd6c18e5325f2d55597a14db0e2b1a8c151e6c13`.

### evaluation:565510

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `dde97fa248bc0167a26d34b5dd6c18e5325f2d55597a14db0e2b1a8c151e6c13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
