# `withDeviceToolPermissionCards/run/onNeedsPermission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-tool-permission-cards.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770000-770003](../../../../../../reference/runtime/host-main.cjs#L770000-L770003) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:566159-566162](../../../../../../reference/runtime/sand-eval-runner.cjs#L566159-L566162) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770000-770003](../../../../../../reference/runtime/host-main.cjs#L770000-L770003) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566159-566162](../../../../../../reference/runtime/sand-eval-runner.cjs#L566159-L566162) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:770000

Calls written directly in this body: `args.onNeedsPermission`, `postCard`.

SHA-256 of the source span: `e5c3a3eaa350ca2d7f8a2e3cd1c95576c900d10abc11e73796cc9ac4d5aac978`.

### evaluation:566159

Calls written directly in this body: `args.onNeedsPermission`, `postCard`.

SHA-256 of the source span: `e5c3a3eaa350ca2d7f8a2e3cd1c95576c900d10abc11e73796cc9ac4d5aac978`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
