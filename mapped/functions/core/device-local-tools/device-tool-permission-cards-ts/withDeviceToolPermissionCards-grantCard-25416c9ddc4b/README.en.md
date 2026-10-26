# `withDeviceToolPermissionCards/grantCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-tool-permission-cards.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769985-769993](../../../../../../reference/runtime/host-main.cjs#L769985-L769993) | `ArrowFunctionExpression` | no | `toolId, target` |
| [evaluation:566144-566152](../../../../../../reference/runtime/sand-eval-runner.cjs#L566144-L566152) | `ArrowFunctionExpression` | no | `toolId, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769985-769993](../../../../../../reference/runtime/host-main.cjs#L769985-L769993) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566144-566152](../../../../../../reference/runtime/sand-eval-runner.cjs#L566144-L566152) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:769985

Calls written directly in this body: `host.transport.onUpdate`, `keyOf`, `posted.delete`.

SHA-256 of the source span: `f5a25604976f5efce7dc121c03f65f71d157af56dac9bef0b23c15599ac2e1ea`.

### evaluation:566144

Calls written directly in this body: `host.transport.onUpdate`, `keyOf`, `posted.delete`.

SHA-256 of the source span: `f5a25604976f5efce7dc121c03f65f71d157af56dac9bef0b23c15599ac2e1ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
