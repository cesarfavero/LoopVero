# `stripSystemReminderBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491199-491201](../../../../../../reference/runtime/host-main.cjs#L491199-L491201) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526117-526119](../../../../../../reference/runtime/sand-eval-runner.cjs#L526117-L526119) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491199-491201](../../../../../../reference/runtime/host-main.cjs#L491199-L491201) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526117-526119](../../../../../../reference/runtime/sand-eval-runner.cjs#L526117-L526119) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491199

Calls written directly in this body: `.replace`, `.trim`, `text3.replace`.

SHA-256 of the source span: `af4ed28e8a071d4535110377f9df9818c017a22a897c975298a56cad32b91f22`.

### evaluation:526117

Calls written directly in this body: `.replace`, `.trim`, `text3.replace`.

SHA-256 of the source span: `af4ed28e8a071d4535110377f9df9818c017a22a897c975298a56cad32b91f22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
