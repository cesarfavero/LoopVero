# `refusedParentOr2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453637-453641](../../../../../reference/runtime/host-main.cjs#L453637-L453641) | `FunctionDeclaration` | yes | `error64, entry, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453637-453641](../../../../../reference/runtime/host-main.cjs#L453637-L453641) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:453637

Calls written directly in this body: `findSystemErrno`, `holdsLink`, `new NoFollowRefusedError`.

SHA-256 of the source span: `3f0e9c900490501c564b7e561168c06d411ada540153cc9bfac49185e280d805`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
