# `looksLikeBinary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/attachment-preview.ts` · [Module README](../../../../../modules/shared/media/attachment-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497184-497194](../../../../../../reference/runtime/host-main.cjs#L497184-L497194) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:480721-480731](../../../../../../reference/runtime/sand-eval-runner.cjs#L480721-L480731) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497184-497194](../../../../../../reference/runtime/host-main.cjs#L497184-L497194) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:480721-480731](../../../../../../reference/runtime/sand-eval-runner.cjs#L480721-L480731) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:497184

Calls written directly in this body: `bytes.subarray`.

Assignment or increment targets: `controlBytes`.

SHA-256 of the source span: `9462f3bab5424a2e40f8e9a6d18640870e4490a5299a311bcc631dab8e0329a4`.

### evaluation:480721

Calls written directly in this body: `bytes.subarray`.

Assignment or increment targets: `controlBytes`.

SHA-256 of the source span: `9462f3bab5424a2e40f8e9a6d18640870e4490a5299a311bcc631dab8e0329a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
