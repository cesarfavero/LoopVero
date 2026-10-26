# `accountScopeOfToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175737-175739](../../../../../../reference/runtime/host-main.cjs#L175737-L175739) | `FunctionDeclaration` | no | `{ accessToken }` |
| [evaluation:511716-511718](../../../../../../reference/runtime/sand-eval-runner.cjs#L511716-L511718) | `FunctionDeclaration` | no | `{ accessToken }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175737-175739](../../../../../../reference/runtime/host-main.cjs#L175737-L175739) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511716-511718](../../../../../../reference/runtime/sand-eval-runner.cjs#L511716-L511718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175737

Calls written directly in this body: `accountScopeOfPrincipal`, `parseJwtPayload`.

SHA-256 of the source span: `1dcbf4ca59262bee786af2b11c94c17ecebf79dcb9034d8d717161af363efd45`.

### evaluation:511716

Calls written directly in this body: `accountScopeOfPrincipal`, `parseJwtPayload`.

SHA-256 of the source span: `1dcbf4ca59262bee786af2b11c94c17ecebf79dcb9034d8d717161af363efd45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
