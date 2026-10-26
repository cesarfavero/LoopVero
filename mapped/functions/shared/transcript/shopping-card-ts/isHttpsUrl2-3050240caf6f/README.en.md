# `isHttpsUrl2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707270-707272](../../../../../../reference/runtime/host-main.cjs#L707270-L707272) | `FunctionDeclaration` | no | `value` |
| [evaluation:481392-481394](../../../../../../reference/runtime/sand-eval-runner.cjs#L481392-L481394) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707270-707272](../../../../../../reference/runtime/host-main.cjs#L707270-L707272) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481392-481394](../../../../../../reference/runtime/sand-eval-runner.cjs#L481392-L481394) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707270

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `219d33e966b337711edd0a8b8297294f8c5b62a179f295b5355786e3b920f135`.

### evaluation:481392

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `219d33e966b337711edd0a8b8297294f8c5b62a179f295b5355786e3b920f135`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
