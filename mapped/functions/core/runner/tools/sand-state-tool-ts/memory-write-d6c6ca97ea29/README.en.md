# `memory.write`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762956-762973](../../../../../../../reference/runtime/host-main.cjs#L762956-L762973) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555566-555583](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555566-L555583) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762956-762973](../../../../../../../reference/runtime/host-main.cjs#L762956-L762973) | 3 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:555566-555583](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555566-L555583) | 3 | 0 | 2 | 2 | 0 | 0 |

### host:762956

Calls written directly in this body: `deps.state.writeMemory`, `memoryScope`, `need`.

SHA-256 of the source span: `4934e7767ca9d64eae24210e64ad1a198ba619d30f8b30102ae231875b89b8ee`.

### evaluation:555566

Calls written directly in this body: `deps.state.writeMemory`, `memoryScope`, `need`.

SHA-256 of the source span: `4934e7767ca9d64eae24210e64ad1a198ba619d30f8b30102ae231875b89b8ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
