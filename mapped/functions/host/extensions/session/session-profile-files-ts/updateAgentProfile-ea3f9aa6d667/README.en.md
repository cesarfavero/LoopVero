# `updateAgentProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-profile-files.ts` · [Module README](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722789-722803](../../../../../../../reference/runtime/host-main.cjs#L722789-L722803) | `FunctionDeclaration` | yes | `host, agentId, profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722789-722803](../../../../../../../reference/runtime/host-main.cjs#L722789-L722803) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:722789

Calls written directly in this body: `host.withAgentDb`.

SHA-256 of the source span: `f3fc69b6cc028bfe457ae4a89e4c084177a46fde876fda415a3e52d58c7b7a51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
