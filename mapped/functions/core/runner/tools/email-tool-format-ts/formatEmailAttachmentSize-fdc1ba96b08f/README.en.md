# `formatEmailAttachmentSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-tool-format.ts` · [Module README](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764135-764140](../../../../../../../reference/runtime/host-main.cjs#L764135-L764140) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:557506-557511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557506-L557511) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764135-764140](../../../../../../../reference/runtime/host-main.cjs#L764135-L764140) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:557506-557511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557506-L557511) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:764135

Calls written directly in this body: `.toFixed`, `Number.isFinite`.

SHA-256 of the source span: `54f2376eb72c8b2d4f0efa60faff0143259b1a852108a0afc1ed00d2370da7c7`.

### evaluation:557506

Calls written directly in this body: `.toFixed`, `Number.isFinite`.

SHA-256 of the source span: `54f2376eb72c8b2d4f0efa60faff0143259b1a852108a0afc1ed00d2370da7c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
