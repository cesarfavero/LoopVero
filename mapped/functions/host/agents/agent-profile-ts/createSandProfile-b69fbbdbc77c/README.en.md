# `createSandProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491574-491581](../../../../../../reference/runtime/host-main.cjs#L491574-L491581) | `FunctionDeclaration` | no | `agentDir, profile, binding` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491574-491581](../../../../../../reference/runtime/host-main.cjs#L491574-L491581) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:491574

Calls written directly in this body: `getSandProfilePath`, `writeSandProfileFile`, `writeServerBackedProfileFile`.

SHA-256 of the source span: `d113c9f2af39c038748e34fe37c2107ef098c3d44f4362c5660f47b1dbf57e6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
