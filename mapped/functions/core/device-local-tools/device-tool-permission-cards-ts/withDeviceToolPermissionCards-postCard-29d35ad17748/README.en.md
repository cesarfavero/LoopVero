# `withDeviceToolPermissionCards/postCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-tool-permission-cards.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769966-769984](../../../../../../reference/runtime/host-main.cjs#L769966-L769984) | `ArrowFunctionExpression` | no | `toolId, target` |
| [evaluation:566125-566143](../../../../../../reference/runtime/sand-eval-runner.cjs#L566125-L566143) | `ArrowFunctionExpression` | no | `toolId, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769966-769984](../../../../../../reference/runtime/host-main.cjs#L769966-L769984) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:566125-566143](../../../../../../reference/runtime/sand-eval-runner.cjs#L566125-L566143) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769966

Calls written directly in this body: `Date.now`, `describeDeviceLocalToolPermission`, `host.transport.onUpdate`, `keyOf`, `posted.add`, `posted.has`.

SHA-256 of the source span: `6e11bca9b7017d840ddbdd241d70a484d234c693f9f44b93df4961495544c5cd`.

### evaluation:566125

Calls written directly in this body: `Date.now`, `describeDeviceLocalToolPermission`, `host.transport.onUpdate`, `keyOf`, `posted.add`, `posted.has`.

SHA-256 of the source span: `6e11bca9b7017d840ddbdd241d70a484d234c693f9f44b93df4961495544c5cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
