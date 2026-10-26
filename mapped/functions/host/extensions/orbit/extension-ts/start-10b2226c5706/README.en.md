# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/extension.ts` · [Module README](../../../../../../modules/host/extensions/orbit/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706411-706473](../../../../../../../reference/runtime/host-main.cjs#L706411-L706473) | `ArrowFunctionExpression` | yes | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706411-706473](../../../../../../../reference/runtime/host-main.cjs#L706411-L706473) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:706411

Calls written directly in this body: `context2.onStop`, `createOrbitDaemonClient`, `createOrbitDaemonProxySupervisor`, `createOrbitDaemonSessionController`, `createOrbitService`, `createPollingPolicy2`, `createRetryPolicy`, `service.start`.

SHA-256 of the source span: `1717c323337bd5d6c7a260440f26088ad7f61c37e64f7b333e8d4bf412b0e9b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
