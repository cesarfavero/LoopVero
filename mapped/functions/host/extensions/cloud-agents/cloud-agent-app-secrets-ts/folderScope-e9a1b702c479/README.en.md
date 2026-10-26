# `folderScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-app-secrets.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-app-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537985-537987](../../../../../../../reference/runtime/host-main.cjs#L537985-L537987) | `FunctionDeclaration` | no | `{ bcId, projectDir }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537985-537987](../../../../../../../reference/runtime/host-main.cjs#L537985-L537987) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:537985

Calls written directly in this body: `new AppSecretsScope`.

SHA-256 of the source span: `8cde32b35cebfe55eb26e22a96ec6587f790ca61b4c21221bf043fefa93ba0cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
