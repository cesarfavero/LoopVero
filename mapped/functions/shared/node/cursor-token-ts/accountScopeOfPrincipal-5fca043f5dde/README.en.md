# `accountScopeOfPrincipal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175734-175736](../../../../../../reference/runtime/host-main.cjs#L175734-L175736) | `FunctionDeclaration` | no | `{ principal }` |
| [evaluation:511713-511715](../../../../../../reference/runtime/sand-eval-runner.cjs#L511713-L511715) | `FunctionDeclaration` | no | `{ principal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175734-175736](../../../../../../reference/runtime/host-main.cjs#L175734-L175736) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511713-511715](../../../../../../reference/runtime/sand-eval-runner.cjs#L511713-L511715) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175734

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `a394ebc170283cbcc6509c2757d81517ee6a510e99434e6b8d6eefd234faa023`.

### evaluation:511713

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `09226d192536cb2413abd6ae46e3da9e907b5d6d614ca23a0193f3f4791bc96e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
