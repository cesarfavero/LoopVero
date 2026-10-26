# `writeProfileJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491544-491547](../../../../../../reference/runtime/host-main.cjs#L491544-L491547) | `FunctionDeclaration` | no | `path33, serialized` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491544-491547](../../../../../../reference/runtime/host-main.cjs#L491544-L491547) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:491544

Calls written directly in this body: `profileFileMode`, `readProfileText`, `writeSandDataFileSync`.

SHA-256 of the source span: `bb0729bca7f91a84a4eb6befaf6cc83e80cdc9d68653aaf16598c0de0f9a2e7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
