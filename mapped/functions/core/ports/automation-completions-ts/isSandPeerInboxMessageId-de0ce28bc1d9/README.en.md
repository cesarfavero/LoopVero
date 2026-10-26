# `isSandPeerInboxMessageId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/ports/automation-completions.ts` · [Module README](../../../../../modules/core/ports/automation-completions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716990-716992](../../../../../../reference/runtime/host-main.cjs#L716990-L716992) | `FunctionDeclaration` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716990-716992](../../../../../../reference/runtime/host-main.cjs#L716990-L716992) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716990

Calls written directly in this body: `id.startsWith`.

SHA-256 of the source span: `80ff228a8c10f3757e4d39a04194fd0a43f8bf690cecc939e603ee8857348c88`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
