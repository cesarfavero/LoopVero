# `createAvatarDataUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495196-495198](../../../../../../../reference/runtime/host-main.cjs#L495196-L495198) | `FunctionDeclaration` | no | `dataUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495196-495198](../../../../../../../reference/runtime/host-main.cjs#L495196-L495198) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:495196

Calls written directly in this body: `isServerSupportedAvatarDataUrl`.

SHA-256 of the source span: `68061c20ac2941a4e4b6e48bf4b102d35607330003a9e95ce55648c8a93536f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
