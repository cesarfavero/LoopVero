# `lstatIfExists`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430861-430868](../../../../../reference/runtime/host-main.cjs#L430861-L430868) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430861-430868](../../../../../reference/runtime/host-main.cjs#L430861-L430868) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:430861

Calls written directly in this body: `findSystemErrno`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `bbc88d18534dc5375d8229b9bec8e21cd51ca6f43174b92a37542d59269ad52e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
