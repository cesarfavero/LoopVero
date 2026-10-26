# `stripOneLeadingNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491236-491249](../../../../../../reference/runtime/host-main.cjs#L491236-L491249) | `FunctionDeclaration` | no | `body` |
| [evaluation:526154-526167](../../../../../../reference/runtime/sand-eval-runner.cjs#L526154-L526167) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491236-491249](../../../../../../reference/runtime/host-main.cjs#L491236-L491249) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:526154-526167](../../../../../../reference/runtime/sand-eval-runner.cjs#L526154-L526167) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:491236

Calls written directly in this body: `.trimEnd`, `.trimStart`, `SINGLE_LINE_NOTE_RES.some`, `body.indexOf`, `body.match`, `body.slice`, `firstLine.startsWith`.

SHA-256 of the source span: `56f2932742ebb0fe5432a39e5dc8aafc59cacd74d56d4caecced0f5e156303cf`.

### evaluation:526154

Calls written directly in this body: `.trimEnd`, `.trimStart`, `SINGLE_LINE_NOTE_RES.some`, `body.indexOf`, `body.match`, `body.slice`, `firstLine.startsWith`.

SHA-256 of the source span: `56f2932742ebb0fe5432a39e5dc8aafc59cacd74d56d4caecced0f5e156303cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
