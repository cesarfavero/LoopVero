# `buildCloudAgentRequestedModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510105-510123](../../../../../../reference/runtime/host-main.cjs#L510105-L510123) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510105-510123](../../../../../../reference/runtime/host-main.cjs#L510105-L510123) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:510105

Calls written directly in this body: `Array.from`, `Object.entries`, `args.modelId.trim`, `new Map`, `new RequestedModel`, `new SandCloudAgentLaunchError`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `47f19e14f6f982aa482c08dffceadc795f3b62f45127009c4a19be3098b97310`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
