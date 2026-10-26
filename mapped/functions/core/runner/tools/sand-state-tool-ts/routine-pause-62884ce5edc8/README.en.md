# `routine.pause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762981-762984](../../../../../../../reference/runtime/host-main.cjs#L762981-L762984) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555591-555594](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555591-L555594) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762981-762984](../../../../../../../reference/runtime/host-main.cjs#L762981-L762984) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:762981 uses an implicit arrow-function return.
| [evaluation:555591-555594](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555591-L555594) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555591 uses an implicit arrow-function return.

### host:762981

Calls written directly in this body: `deps.state.setAutomationEnabled`, `need`.

SHA-256 of the source span: `1dcab042fe7605b5dcacbf16a757ec6f88d2293687880354e2a92d8e241e4f33`.

### evaluation:555591

Calls written directly in this body: `deps.state.setAutomationEnabled`, `need`.

SHA-256 of the source span: `1dcab042fe7605b5dcacbf16a757ec6f88d2293687880354e2a92d8e241e4f33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
