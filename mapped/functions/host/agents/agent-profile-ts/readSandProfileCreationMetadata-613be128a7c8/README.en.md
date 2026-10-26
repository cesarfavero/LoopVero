# `readSandProfileCreationMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491538-491542](../../../../../../reference/runtime/host-main.cjs#L491538-L491542) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491538-491542](../../../../../../reference/runtime/host-main.cjs#L491538-L491542) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:491538

Calls written directly in this body: `parseProfileJson2`, `profileServerBindingFromJson`.

SHA-256 of the source span: `6a921a7ba5d8b3ded499553aea177d8177eccc0829163f60e7e6abc98801876a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
