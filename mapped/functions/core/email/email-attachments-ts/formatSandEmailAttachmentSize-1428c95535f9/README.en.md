# `formatSandEmailAttachmentSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-attachments.ts` · [Module README](../../../../../modules/core/email/email-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734880-734884](../../../../../../reference/runtime/host-main.cjs#L734880-L734884) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:539305-539309](../../../../../../reference/runtime/sand-eval-runner.cjs#L539305-L539309) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734880-734884](../../../../../../reference/runtime/host-main.cjs#L734880-L734884) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:539305-539309](../../../../../../reference/runtime/sand-eval-runner.cjs#L539305-L539309) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:734880

Calls written directly in this body: `.toFixed`.

SHA-256 of the source span: `66a0e2dbeb67602c94bf3c2965deb2c806a1a9d64603d5b9ac641955cbce14ae`.

### evaluation:539305

Calls written directly in this body: `.toFixed`.

SHA-256 of the source span: `66a0e2dbeb67602c94bf3c2965deb2c806a1a9d64603d5b9ac641955cbce14ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
