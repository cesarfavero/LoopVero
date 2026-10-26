# `withDeviceToolPermissionCards/run/onPermissionGranted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-tool-permission-cards.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770004-770008](../../../../../../reference/runtime/host-main.cjs#L770004-L770008) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:566163-566167](../../../../../../reference/runtime/sand-eval-runner.cjs#L566163-L566167) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770004-770008](../../../../../../reference/runtime/host-main.cjs#L770004-L770008) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566163-566167](../../../../../../reference/runtime/sand-eval-runner.cjs#L566163-L566167) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:770004

Calls written directly in this body: `args.onPermissionGranted`, `grantCard`.

Assignment or increment targets: `grantedNow`.

SHA-256 of the source span: `c2cbce119436324594516a4d695daf205571648cdecc199f6bbdf5fbe0b446f3`.

### evaluation:566163

Calls written directly in this body: `args.onPermissionGranted`, `grantCard`.

Assignment or increment targets: `grantedNow`.

SHA-256 of the source span: `c2cbce119436324594516a4d695daf205571648cdecc199f6bbdf5fbe0b446f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
