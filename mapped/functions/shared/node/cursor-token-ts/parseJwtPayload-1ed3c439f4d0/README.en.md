# `parseJwtPayload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175715-175725](../../../../../../reference/runtime/host-main.cjs#L175715-L175725) | `FunctionDeclaration` | no | `token` |
| [evaluation:511694-511704](../../../../../../reference/runtime/sand-eval-runner.cjs#L511694-L511704) | `FunctionDeclaration` | no | `token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175715-175725](../../../../../../reference/runtime/host-main.cjs#L175715-L175725) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:511694-511704](../../../../../../reference/runtime/sand-eval-runner.cjs#L511694-L511704) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:175715

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.parse`, `jwtPayloadSchema.safeParse`, `token.split`.

SHA-256 of the source span: `5dc0b17970850f9c14fc0637fa2afea7cc492d3f1ae5058c080dc73d356c4e91`.

### evaluation:511694

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.parse`, `jwtPayloadSchema.safeParse`, `token.split`.

SHA-256 of the source span: `1c4fb2bef80f6cef31acd47ea27f519e5e74d0e0d4c047db34d113bead0343a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
