# `singleLine2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768739-768741](../../../../../../reference/runtime/host-main.cjs#L768739-L768741) | `FunctionDeclaration` | no | `text3` |
| [evaluation:564250-564252](../../../../../../reference/runtime/sand-eval-runner.cjs#L564250-L564252) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768739-768741](../../../../../../reference/runtime/host-main.cjs#L768739-L768741) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564250-564252](../../../../../../reference/runtime/sand-eval-runner.cjs#L564250-L564252) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768739

Calls written directly in this body: `.trim`, `text3.replace`.

SHA-256 of the source span: `3c79228cf75a2d570c8e9b8230182137bcb11324a5e64dc9adca6c6b663d5a4a`.

### evaluation:564250

Calls written directly in this body: `.trim`, `text3.replace`.

SHA-256 of the source span: `3c79228cf75a2d570c8e9b8230182137bcb11324a5e64dc9adca6c6b663d5a4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
