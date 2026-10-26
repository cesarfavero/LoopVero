# `rejectBareRepoSlug`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510241-510246](../../../../../../reference/runtime/host-main.cjs#L510241-L510246) | `FunctionDeclaration` | no | `requested` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510241-510246](../../../../../../reference/runtime/host-main.cjs#L510241-L510246) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:510241

Calls written directly in this body: `isRepoShorthand`, `new SandCloudAgentLaunchError`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `4fd5aa1a4326277d051b7061f68e1b71db672175c111bd4ac6f7fec920e4ba50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
