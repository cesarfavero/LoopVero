# `recordMemoryOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762945-762954](../../../../../../../reference/runtime/host-main.cjs#L762945-L762954) | `FunctionDeclaration` | no | `ctx, args, deps, outcome` |
| [evaluation:555555-555564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555555-L555564) | `FunctionDeclaration` | no | `ctx, args, deps, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762945-762954](../../../../../../../reference/runtime/host-main.cjs#L762945-L762954) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:555555-555564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555555-L555564) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:762945

Calls written directly in this body: `recordMemoryWrite`, `sandMemoryWriteReport`.

SHA-256 of the source span: `cfa58fa3dfbbf73e142d06f608a3cece6216b113d846ec3fc8679b86928b534e`.

### evaluation:555555

Calls written directly in this body: `recordMemoryWrite`, `sandMemoryWriteReport`.

SHA-256 of the source span: `cfa58fa3dfbbf73e142d06f608a3cece6216b113d846ec3fc8679b86928b534e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
