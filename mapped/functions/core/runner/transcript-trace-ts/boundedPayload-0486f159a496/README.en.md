# `boundedPayload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765657-765667](../../../../../../reference/runtime/host-main.cjs#L765657-L765667) | `FunctionDeclaration` | no | `value` |
| [evaluation:559022-559032](../../../../../../reference/runtime/sand-eval-runner.cjs#L559022-L559032) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765657-765667](../../../../../../reference/runtime/host-main.cjs#L765657-L765667) | 3 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:559022-559032](../../../../../../reference/runtime/sand-eval-runner.cjs#L559022-L559032) | 3 | 0 | 0 | 4 | 0 | 1 |

### host:765657

Calls written directly in this body: `JSON.stringify`, `boundedText`.

Assignment or increment targets: `serialized`.

SHA-256 of the source span: `fcc386af7078d19ed32355015b4fd902415463189f0d52d59b73f1461dc7fdde`.

### evaluation:559022

Calls written directly in this body: `JSON.stringify`, `boundedText`.

Assignment or increment targets: `serialized`.

SHA-256 of the source span: `fcc386af7078d19ed32355015b4fd902415463189f0d52d59b73f1461dc7fdde`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
