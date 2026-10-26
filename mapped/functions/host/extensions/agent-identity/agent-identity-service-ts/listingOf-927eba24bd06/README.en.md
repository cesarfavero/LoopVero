# `listingOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495200-495206](../../../../../../../reference/runtime/host-main.cjs#L495200-L495206) | `FunctionDeclaration` | no | `roster` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495200-495206](../../../../../../../reference/runtime/host-main.cjs#L495200-L495206) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495200

Calls written directly in this body: `.filter`, `new Set`, `roster.map`.

SHA-256 of the source span: `15e80337ff2d5d83e012b3a11e07a0862e60acd008fc309a30eae0548cca49e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
