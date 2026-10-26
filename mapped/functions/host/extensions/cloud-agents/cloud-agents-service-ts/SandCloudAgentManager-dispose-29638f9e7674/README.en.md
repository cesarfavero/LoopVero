# `SandCloudAgentManager.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538371-538374](../../../../../../../reference/runtime/host-main.cjs#L538371-L538374) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538371-538374](../../../../../../../reference/runtime/host-main.cjs#L538371-L538374) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:538371

Calls written directly in this body: `this.completionPoller.dispose`, `this.updatesStream.dispose`.

SHA-256 of the source span: `fbc51c2f06280387ac0d09c5f3585f159def7ef6990a3380e5c67c807bcac05b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
