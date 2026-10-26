# `createLookupRecallMemoryTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769848-769859](../../../../../../../reference/runtime/host-main.cjs#L769848-L769859) | `ArrowFunctionExpression` | yes | `ctx, args` |
| [evaluation:565517-565528](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565517-L565528) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769848-769859](../../../../../../../reference/runtime/host-main.cjs#L769848-L769859) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:565517-565528](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565517-L565528) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:769848

Calls written directly in this body: `lookup3.load`, `recallMemory`.

SHA-256 of the source span: `9a291dd388c67d4f9e626eea0336ec7429ad6df546d658404f378032d359c66d`.

### evaluation:565517

Calls written directly in this body: `lookup3.load`, `recallMemory`.

SHA-256 of the source span: `9a291dd388c67d4f9e626eea0336ec7429ad6df546d658404f378032d359c66d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
