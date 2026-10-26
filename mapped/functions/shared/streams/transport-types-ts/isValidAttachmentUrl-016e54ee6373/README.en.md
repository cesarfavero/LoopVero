# `isValidAttachmentUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/streams/transport-types.ts` · [Module README](../../../../../modules/shared/streams/transport-types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741009-741016](../../../../../../reference/runtime/host-main.cjs#L741009-L741016) | `FunctionDeclaration` | no | `rawUrl` |
| [evaluation:480960-480967](../../../../../../reference/runtime/sand-eval-runner.cjs#L480960-L480967) | `FunctionDeclaration` | no | `rawUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741009-741016](../../../../../../reference/runtime/host-main.cjs#L741009-L741016) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:480960-480967](../../../../../../reference/runtime/sand-eval-runner.cjs#L480960-L480967) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:741009

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `301721c6db794fba51eb32fec27e6dbebffc3bc6681c0acffb8ed1b023c363f1`.

### evaluation:480960

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `301721c6db794fba51eb32fec27e6dbebffc3bc6681c0acffb8ed1b023c363f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
