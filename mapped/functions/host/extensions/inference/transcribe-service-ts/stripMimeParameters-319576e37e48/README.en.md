# `stripMimeParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `host/extensions/inference/transcribe-service.ts` · [Module README](../../../../../../modules/host/extensions/inference/transcribe-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681973-681975](../../../../../../../reference/runtime/host-main.cjs#L681973-L681975) | `FunctionDeclaration` | no | `mimeType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681973-681975](../../../../../../../reference/runtime/host-main.cjs#L681973-L681975) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:681973

Calls written directly in this body: `.trim`, `mimeType.split`.

SHA-256 of the source span: `c43bbab38135bf60343e9b39ab29e00c1906f260cfe84c1dc0f6e04fbd55a132`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
