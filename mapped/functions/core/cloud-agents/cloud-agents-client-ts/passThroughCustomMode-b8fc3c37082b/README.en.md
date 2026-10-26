# `passThroughCustomMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512844-512852](../../../../../../reference/runtime/host-main.cjs#L512844-L512852) | `FunctionDeclaration` | no | `requested` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512844-512852](../../../../../../reference/runtime/host-main.cjs#L512844-L512852) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:512844

Calls written directly in this body: `buildCloudAgentCustomModeMessageFields`, `customModeSlashName`, `new SandCloudAgentCustomModeError`.

Explicit throw targets: `SandCloudAgentCustomModeError`.

SHA-256 of the source span: `7e48afda028d65fcba83c02ddd745440dc609e555ec4d5643d77fc1c393233b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
