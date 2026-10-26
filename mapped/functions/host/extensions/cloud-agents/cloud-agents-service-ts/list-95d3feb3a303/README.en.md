# `list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538424-538427](../../../../../../../reference/runtime/host-main.cjs#L538424-L538427) | `ArrowFunctionExpression` | yes | `bcId` |
| [host:538450-538453](../../../../../../../reference/runtime/host-main.cjs#L538450-L538453) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538424-538427](../../../../../../../reference/runtime/host-main.cjs#L538424-L538427) | 1 | 0 | 1 | 2 | 0 | 0 |
| [host:538450-538453](../../../../../../../reference/runtime/host-main.cjs#L538450-L538453) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:538424

Calls written directly in this body: `readCloudAgentPublishProposals`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 of the source span: `22a8d6b3c0915f01d24b1184e11349d9ca59d95941b0ec371e7e99ec4306885f`.

### host:538450

Calls written directly in this body: `readCloudAgentAppSecrets`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 of the source span: `c4265b23acc862c1bb23ecf82a507bea837b0d453b4f072c40bd3cd24fd2e5c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
