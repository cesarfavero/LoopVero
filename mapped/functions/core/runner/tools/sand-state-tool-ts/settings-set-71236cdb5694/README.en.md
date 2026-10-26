# `settings.set`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763035-763039](../../../../../../../reference/runtime/host-main.cjs#L763035-L763039) | `ArrowFunctionExpression` | yes | `args, deps` |
| [evaluation:555645-555649](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555645-L555649) | `ArrowFunctionExpression` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763035-763039](../../../../../../../reference/runtime/host-main.cjs#L763035-L763039) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763035 uses an implicit arrow-function return.
| [evaluation:555645-555649](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555645-L555649) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555645 uses an implicit arrow-function return.

### host:763035

Calls written directly in this body: `deps.state.updateSettings`.

SHA-256 of the source span: `2dd4eae861766f534d313f1cba8833dada42eb4784f6dccfed4d2a2a616de8a9`.

### evaluation:555645

Calls written directly in this body: `deps.state.updateSettings`.

SHA-256 of the source span: `2dd4eae861766f534d313f1cba8833dada42eb4784f6dccfed4d2a2a616de8a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
