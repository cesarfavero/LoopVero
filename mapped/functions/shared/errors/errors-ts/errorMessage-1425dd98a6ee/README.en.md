# `errorMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/errors.ts` · [Module README](../../../../../modules/shared/errors/errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:798-800](../../../../../../reference/runtime/host-main.cjs#L798-L800) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:798-800](../../../../../../reference/runtime/host-main.cjs#L798-L800) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:798

Calls written directly in this body: `String`.

SHA-256 of the source span: `a9000b6f996443d40d8c86ae92db56074cd7857d50d6ea7c8d479fbec6bac747`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
