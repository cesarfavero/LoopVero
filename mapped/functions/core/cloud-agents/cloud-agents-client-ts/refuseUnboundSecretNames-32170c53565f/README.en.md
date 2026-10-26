# `refuseUnboundSecretNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512502-512506](../../../../../../reference/runtime/host-main.cjs#L512502-L512506) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512502-512506](../../../../../../reference/runtime/host-main.cjs#L512502-L512506) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:512502

Calls written directly in this body: `new SandCloudAgentSecretForwardError`.

Explicit throw targets: `SandCloudAgentSecretForwardError`.

SHA-256 of the source span: `ad5a7fa6760d12e7f08384833c335b9626dff7f94df6b8127d928a2fea8c3ba4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
