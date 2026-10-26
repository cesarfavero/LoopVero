# `withSandDriverRefNamespace/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726957-726961](../../../../../../../reference/runtime/host-main.cjs#L726957-L726961) | `ArrowFunctionExpression` | no | `ctx, op, args` |
| [evaluation:561571-561575](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561571-L561575) | `ArrowFunctionExpression` | no | `ctx, op, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726957-726961](../../../../../../../reference/runtime/host-main.cjs#L726957-L726961) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:726957 uses an implicit arrow-function return.
| [evaluation:561571-561575](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561571-L561575) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:561571 uses an implicit arrow-function return.

### host:726957

Calls written directly in this body: `runner.run`.

SHA-256 of the source span: `76a46dab503c7cb284f566da1551bbe9c11c4e1e36befd7b191064a691c55f25`.

### evaluation:561571

Calls written directly in this body: `runner.run`.

SHA-256 of the source span: `76a46dab503c7cb284f566da1551bbe9c11c4e1e36befd7b191064a691c55f25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
