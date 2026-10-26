# `renderRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766348-766371](../../../../../../../reference/runtime/host-main.cjs#L766348-L766371) | `FunctionDeclaration` | no | `read2` |
| [evaluation:559712-559735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559712-L559735) | `FunctionDeclaration` | no | `read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766348-766371](../../../../../../../reference/runtime/host-main.cjs#L766348-L766371) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559712-559735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559712-L559735) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:766348

Calls written directly in this body: `.join`.

SHA-256 of the source span: `fa3124617861715c07b74a7fdd138ddb14279677da1c6767876b1c142882fb74`.

### evaluation:559712

Calls written directly in this body: `.join`.

SHA-256 of the source span: `fa3124617861715c07b74a7fdd138ddb14279677da1c6767876b1c142882fb74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
