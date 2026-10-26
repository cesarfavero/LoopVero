# `memory.forget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762974-762978](../../../../../../../reference/runtime/host-main.cjs#L762974-L762978) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555584-555588](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555584-L555588) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762974-762978](../../../../../../../reference/runtime/host-main.cjs#L762974-L762978) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:762974 uses an implicit arrow-function return.
| [evaluation:555584-555588](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555584-L555588) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555584 uses an implicit arrow-function return.

### host:762974

Calls written directly in this body: `deps.state.removeMemory`, `memoryScope`, `need`.

SHA-256 of the source span: `0fe90a202faf0057e2372b0040b4c826eefa8c10a603864473b039bacf7968be`.

### evaluation:555584

Calls written directly in this body: `deps.state.removeMemory`, `memoryScope`, `need`.

SHA-256 of the source span: `0fe90a202faf0057e2372b0040b4c826eefa8c10a603864473b039bacf7968be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
