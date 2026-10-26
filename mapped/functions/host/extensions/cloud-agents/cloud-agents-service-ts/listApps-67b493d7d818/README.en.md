# `listApps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538428-538431](../../../../../../../reference/runtime/host-main.cjs#L538428-L538431) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538428-538431](../../../../../../../reference/runtime/host-main.cjs#L538428-L538431) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:538428

Calls written directly in this body: `readCloudAgentPublishedApps`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 of the source span: `11fcb6027ced621d50286fb2bf1032be33eddc93e3e1ffb818b856fec7e71f18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
