# `SandCloudAgentManager.getOriginClient/getAccessToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538469-538469](../../../../../../../reference/runtime/host-main.cjs#L538469-L538469) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538469-538469](../../../../../../../reference/runtime/host-main.cjs#L538469-L538469) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:538469 uses an implicit arrow-function return.

### host:538469

Calls written directly in this body: `this.options.getCursorAccessToken`.

SHA-256 of the source span: `c23bca9c751661f500e85fe8c7c0c3e0e9d0b72930df088c9c9d466944910c8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
