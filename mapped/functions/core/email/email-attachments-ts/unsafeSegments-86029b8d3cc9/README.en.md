# `unsafeSegments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-attachments.ts` · [Module README](../../../../../modules/core/email/email-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734844-734846](../../../../../../reference/runtime/host-main.cjs#L734844-L734846) | `FunctionDeclaration` | no | `path33` |
| [evaluation:539269-539271](../../../../../../reference/runtime/sand-eval-runner.cjs#L539269-L539271) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734844-734846](../../../../../../reference/runtime/host-main.cjs#L734844-L734846) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539269-539271](../../../../../../reference/runtime/sand-eval-runner.cjs#L539269-L539271) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734844

Calls written directly in this body: `.some`, `path33.split`.

SHA-256 of the source span: `d9d91c78a064499f90fe8b2523397044c829a424e602a2cfa9a075dcd2412dbd`.

### evaluation:539269

Calls written directly in this body: `.some`, `path33.split`.

SHA-256 of the source span: `d9d91c78a064499f90fe8b2523397044c829a424e602a2cfa9a075dcd2412dbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
