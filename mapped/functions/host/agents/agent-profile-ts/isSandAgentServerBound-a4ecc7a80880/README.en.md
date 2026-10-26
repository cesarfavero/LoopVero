# `isSandAgentServerBound`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491531-491533](../../../../../../reference/runtime/host-main.cjs#L491531-L491533) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491531-491533](../../../../../../reference/runtime/host-main.cjs#L491531-L491533) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491531

Calls written directly in this body: `getSandProfilePath`, `readSandProfileServerId`.

SHA-256 of the source span: `c73abbce29f09db0312e968c27a4e4dc0fa6269d3e071a41e974250eaf695b26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
