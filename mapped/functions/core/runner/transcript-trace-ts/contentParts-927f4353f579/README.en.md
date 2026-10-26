# `contentParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765711-765725](../../../../../../reference/runtime/host-main.cjs#L765711-L765725) | `FunctionDeclaration` | no | `message` |
| [evaluation:559076-559090](../../../../../../reference/runtime/sand-eval-runner.cjs#L559076-L559090) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765711-765725](../../../../../../reference/runtime/host-main.cjs#L765711-L765725) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:559076-559090](../../../../../../reference/runtime/sand-eval-runner.cjs#L559076-L559090) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:765711

Calls written directly in this body: `boundedText`, `content.trim`, `messagePartSchema.safeParse`, `parts.push`, `tracePartOf`, `userTextOf`.

SHA-256 of the source span: `11a5e1f0285c448c586585d8bc33e4e81e23c9e97b406ea62f6cf4f42ad2f33e`.

### evaluation:559076

Calls written directly in this body: `boundedText`, `content.trim`, `messagePartSchema.safeParse`, `parts.push`, `tracePartOf`, `userTextOf`.

SHA-256 of the source span: `6b9ed31d4ba3352a27ffe5268430fceb2d354eccdd3e94778b7e1c53f7ddc6b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
