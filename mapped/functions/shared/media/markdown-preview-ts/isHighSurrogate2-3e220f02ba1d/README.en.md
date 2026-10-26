# `isHighSurrogate2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722130-722132](../../../../../../reference/runtime/host-main.cjs#L722130-L722132) | `FunctionDeclaration` | no | `codeUnit` |
| [evaluation:540107-540109](../../../../../../reference/runtime/sand-eval-runner.cjs#L540107-L540109) | `FunctionDeclaration` | no | `codeUnit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722130-722132](../../../../../../reference/runtime/host-main.cjs#L722130-L722132) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540107-540109](../../../../../../reference/runtime/sand-eval-runner.cjs#L540107-L540109) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722130

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f1e3da878a8e77b808729e196c0bd67cec7d4f829fb1a16eec2ec8a1e6caccff`.

### evaluation:540107

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f1e3da878a8e77b808729e196c0bd67cec7d4f829fb1a16eec2ec8a1e6caccff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
