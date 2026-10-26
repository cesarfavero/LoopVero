# `isDefinitiveOAuthCompletionRejection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486886-486888](../../../../../../../reference/runtime/host-main.cjs#L486886-L486888) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486886-486888](../../../../../../../reference/runtime/host-main.cjs#L486886-L486888) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:486886

Calls written directly in this body: `DEFINITIVE_OAUTH_REJECTION_CODES.has`.

SHA-256 of the source span: `92402846f74b2813564ec39aa4d88282335d75af1e0952af4d99df7521d8dda6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
