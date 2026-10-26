# `refuseUntrustedFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454052-454055](../../../../../reference/runtime/host-main.cjs#L454052-L454055) | `FunctionDeclaration` | no | `file2, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454052-454055](../../../../../reference/runtime/host-main.cjs#L454052-L454055) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:454052

Calls written directly in this body: `new UntrustedSandDataFileError`, `untrustedFileReason`.

Explicit throw targets: `UntrustedSandDataFileError`.

SHA-256 of the source span: `23d923cc5d5560126d06a665e29799148372650643f62fb89d95dd7822a3e88a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
