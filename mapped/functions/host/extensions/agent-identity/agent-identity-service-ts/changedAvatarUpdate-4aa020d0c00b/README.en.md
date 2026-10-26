# `changedAvatarUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495191-495195](../../../../../../../reference/runtime/host-main.cjs#L495191-L495195) | `FunctionDeclaration` | no | `dataUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495191-495195](../../../../../../../reference/runtime/host-main.cjs#L495191-L495195) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:495191

Calls written directly in this body: `isServerSupportedAvatarDataUrl`.

SHA-256 of the source span: `0e8caf309c0a4e5c881ade3b64531046936693bafb2bd703795b693b078b61d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
