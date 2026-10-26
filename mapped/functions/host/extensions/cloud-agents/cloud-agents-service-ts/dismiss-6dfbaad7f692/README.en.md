# `dismiss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538436-538439](../../../../../../../reference/runtime/host-main.cjs#L538436-L538439) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538436-538439](../../../../../../../reference/runtime/host-main.cjs#L538436-L538439) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:538436

Calls written directly in this body: `dismissCloudAgentPublishProposal`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 of the source span: `a0578a08c4837f219e18e90af902bb919205909606098f9e244d23d6902dbb4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
