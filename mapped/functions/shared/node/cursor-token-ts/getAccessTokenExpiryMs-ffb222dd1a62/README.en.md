# `getAccessTokenExpiryMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175740-175743](../../../../../../reference/runtime/host-main.cjs#L175740-L175743) | `FunctionDeclaration` | no | `token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175740-175743](../../../../../../reference/runtime/host-main.cjs#L175740-L175743) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:175740

Calls written directly in this body: `parseJwtPayload`.

SHA-256 of the source span: `5390a04896312da9a9b9c8bf50325b5d1b49afde3610268a40dacae78e2b8eb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
