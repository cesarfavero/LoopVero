# `withDeviceToolPermissionCards/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-tool-permission-cards.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769996-770018](../../../../../../reference/runtime/host-main.cjs#L769996-L770018) | `ArrowFunctionExpression` | yes | `ctx, args` |
| [evaluation:566155-566177](../../../../../../reference/runtime/sand-eval-runner.cjs#L566155-L566177) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769996-770018](../../../../../../reference/runtime/host-main.cjs#L769996-L770018) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:566155-566177](../../../../../../reference/runtime/sand-eval-runner.cjs#L566155-L566177) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:769996

Calls written directly in this body: `grantCard`, `isErrorReply`, `port.run`, `postCard`, `provesOsPermissionGranted`.

SHA-256 of the source span: `e908daf3fbc0df95f46d2f29b43dfb241e7700b4a88e764876fbf74a8255f811`.

### evaluation:566155

Calls written directly in this body: `grantCard`, `isErrorReply`, `port.run`, `postCard`, `provesOsPermissionGranted`.

SHA-256 of the source span: `e908daf3fbc0df95f46d2f29b43dfb241e7700b4a88e764876fbf74a8255f811`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
