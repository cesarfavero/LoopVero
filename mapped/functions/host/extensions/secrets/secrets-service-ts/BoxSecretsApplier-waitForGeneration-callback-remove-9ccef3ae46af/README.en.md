# `BoxSecretsApplier.waitForGeneration/<callback>/remove`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709268-709272](../../../../../../../reference/runtime/host-main.cjs#L709268-L709272) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709268-709272](../../../../../../../reference/runtime/host-main.cjs#L709268-L709272) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:709268

Calls written directly in this body: `signal.removeEventListener`, `this.appliedWaiters.indexOf`, `this.appliedWaiters.splice`.

SHA-256 of the source span: `82aaf7ea6dee895127f127a985f8738719b9a85aa1fcfcd851050f88b1034452`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
