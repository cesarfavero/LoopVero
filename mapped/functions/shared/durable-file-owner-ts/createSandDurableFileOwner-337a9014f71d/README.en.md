# `createSandDurableFileOwner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/durable-file-owner.ts` · [Module README](../../../../modules/shared/durable-file-owner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453434-453483](../../../../../reference/runtime/host-main.cjs#L453434-L453483) | `FunctionDeclaration` | no | `{   log: log5,   report }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453434-453483](../../../../../reference/runtime/host-main.cjs#L453434-L453483) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453434

Calls written directly in this body: `new Set`.

SHA-256 of the source span: `f65cd0f77577e7f1cd693df05064de7ec8eb70bca3fe1d555d3332d396dc0990`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
