# `hasPlaceholderProfileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491494-491500](../../../../../../reference/runtime/host-main.cjs#L491494-L491500) | `FunctionDeclaration` | no | `profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491494-491500](../../../../../../reference/runtime/host-main.cjs#L491494-L491500) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:491494

Calls written directly in this body: `isSandDefaultAgentName`, `profile.name.trim`.

SHA-256 of the source span: `98612cf4d6c4511296f2a1819f6678d9cff152ab2c1a011790c41ea25f75eed3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
