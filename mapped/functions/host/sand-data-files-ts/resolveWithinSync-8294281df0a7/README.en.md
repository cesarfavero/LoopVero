# `resolveWithinSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453822-453829](../../../../../reference/runtime/host-main.cjs#L453822-L453829) | `FunctionDeclaration` | no | `root, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453822-453829](../../../../../reference/runtime/host-main.cjs#L453822-L453829) | 2 | 0 | 0 | 1 | 2 | 0 |

### host:453822

Calls written directly in this body: `isPathWithin`, `new UntrustedSandDataFileError`.

Explicit throw targets: `UntrustedSandDataFileError`.

SHA-256 of the source span: `86c46907b00900624ece611369173db8b49d5859dd976b30e21b71e4d29629fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
