# `isLocalDevBackendHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175767-175769](../../../../../../reference/runtime/host-main.cjs#L175767-L175769) | `FunctionDeclaration` | no | `hostname4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175767-175769](../../../../../../reference/runtime/host-main.cjs#L175767-L175769) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175767

Calls written directly in this body: `hostname4.includes`, `isLoopbackHostname`.

SHA-256 of the source span: `23b6a9533e3803bbdea6f08f70695cfabfde0d6e3c59e8746e1d86a2f3a1d390`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
