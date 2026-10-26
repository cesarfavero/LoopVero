# `requireCustomModesEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512853-512859](../../../../../../reference/runtime/host-main.cjs#L512853-L512859) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512853-512859](../../../../../../reference/runtime/host-main.cjs#L512853-L512859) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:512853

Calls written directly in this body: `deps.isCustomModeEnabled`, `new SandCloudAgentCustomModeError`.

Explicit throw targets: `SandCloudAgentCustomModeError`.

SHA-256 of the source span: `5da5be5cd458161f0983aa90e5692e1bbf3fb753931acdd0b9acb3d606ebb52e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
