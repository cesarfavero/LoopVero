# `observeShellTerminal/<callback>/read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/background-shell-reporting.ts` · [Module README](../../../../../modules/core/box/background-shell-reporting-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590383-590383](../../../../../../reference/runtime/host-main.cjs#L590383-L590383) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590383-590383](../../../../../../reference/runtime/host-main.cjs#L590383-L590383) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:590383 uses an implicit arrow-function return.

### host:590383

Calls written directly in this body: `createContext`, `readShellTerminalSnapshot`.

SHA-256 of the source span: `3e0ef9a61b643f29a0badc6394e4004de02f800cb71c05ab39f56ff71d022a76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
