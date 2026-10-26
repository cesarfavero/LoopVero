# `formatUtcOffset`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/time-zone-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/time-zone-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538907-538920](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538907-L538920) | `FunctionDeclaration` | no | `now, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538907-538920](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538907-L538920) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:538907

Calls written directly in this body: `.formatToParts`, `new Intl.DateTimeFormat`, `parts.find`, `raw.replace`.

SHA-256 of the source span: `fcf26c629883588578270f86e65649b9c6da26d64687a7ffbfe5bd6d0e3d8a21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
