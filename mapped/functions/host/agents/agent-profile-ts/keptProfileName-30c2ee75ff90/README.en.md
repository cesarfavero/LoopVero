# `keptProfileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491582-491585](../../../../../../reference/runtime/host-main.cjs#L491582-L491585) | `FunctionDeclaration` | no | `current2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491582-491585](../../../../../../reference/runtime/host-main.cjs#L491582-L491585) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:491582

Calls written directly in this body: `current2.name.trim`.

SHA-256 of the source span: `5fd57191e84aca58219d8996be124cca84f02c90efae2e78fc166c7d1d07b698`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
