# `formatSandTranscriptTraceLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765726-765737](../../../../../../reference/runtime/host-main.cjs#L765726-L765737) | `FunctionDeclaration` | no | `message, options2` |
| [evaluation:559091-559102](../../../../../../reference/runtime/sand-eval-runner.cjs#L559091-L559102) | `FunctionDeclaration` | no | `message, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765726-765737](../../../../../../reference/runtime/host-main.cjs#L765726-L765737) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559091-559102](../../../../../../reference/runtime/sand-eval-runner.cjs#L559091-L559102) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:765726

Calls written directly in this body: `JSON.stringify`, `contentParts`, `parts.filter`, `promptMessageSchema.safeParse`.

SHA-256 of the source span: `017500385e757307b6d4e2fbe294a4c42a0b84a55e50057086a5028645ca0fd0`.

### evaluation:559091

Calls written directly in this body: `JSON.stringify`, `contentParts`, `parts.filter`, `promptMessageSchema.safeParse`.

SHA-256 of the source span: `4145ac70b350ba4824b728932491aeff6a22e78cfb2f11228dcbda58d00e63d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
