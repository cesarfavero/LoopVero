# `isConnectRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/connect-errors.ts` · [Module README](../../../../../modules/shared/errors/connect-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451230-451232](../../../../../../reference/runtime/host-main.cjs#L451230-L451232) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451230-451232](../../../../../../reference/runtime/host-main.cjs#L451230-L451232) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451230

Calls written directly in this body: `REFUSAL_CODES.has`.

SHA-256 of the source span: `6b564eecf0fa13cf69510541d4e20c02cb52de70387b6d11e615f3c322be08b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
