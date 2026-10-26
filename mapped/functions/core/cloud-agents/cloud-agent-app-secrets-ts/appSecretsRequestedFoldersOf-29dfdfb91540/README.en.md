# `appSecretsRequestedFoldersOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-app-secrets.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-app-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509423-509442](../../../../../../reference/runtime/host-main.cjs#L509423-L509442) | `FunctionDeclaration` | no | `conversation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509423-509442](../../../../../../reference/runtime/host-main.cjs#L509423-L509442) | 3 | 3 | 0 | 1 | 0 | 0 |

### host:509423

Calls written directly in this body: `.sort`, `folders.add`, `new Set`, `parseAppSecretsRequestMcpCall`.

SHA-256 of the source span: `339184d1fcef1e06557509099a3ecdee19f5a487946aa0f8a2d572ed5d871cc1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
