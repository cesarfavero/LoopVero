# `readPublishState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537794-537807](../../../../../../../reference/runtime/host-main.cjs#L537794-L537807) | `FunctionDeclaration` | yes | `client, proposal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537794-537807](../../../../../../../reference/runtime/host-main.cjs#L537794-L537807) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:537794

Calls written directly in this body: `client.getPublishStatus`, `isNotFound`, `new GetPublishStatusRequest`, `toSandCloudAgentPublishState`.

SHA-256 of the source span: `4da62f63d2d52406bb9728164c54c2836b52576563a7e6d912f2bf55a6f5ec1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
