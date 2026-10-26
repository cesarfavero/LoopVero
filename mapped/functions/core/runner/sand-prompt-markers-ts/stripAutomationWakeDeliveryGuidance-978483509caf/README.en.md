# `stripAutomationWakeDeliveryGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491202-491206](../../../../../../reference/runtime/host-main.cjs#L491202-L491206) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526120-526124](../../../../../../reference/runtime/sand-eval-runner.cjs#L526120-L526124) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491202-491206](../../../../../../reference/runtime/host-main.cjs#L491202-L491206) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526120-526124](../../../../../../reference/runtime/sand-eval-runner.cjs#L526120-L526124) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:491202

Calls written directly in this body: `.trimEnd`, `lastLineStartingWith`, `text3.slice`, `text3.startsWith`.

SHA-256 of the source span: `ee5c06159a20b02d338c505f7465dc98e21a3c0c2d3badbe11c75181a3506bc1`.

### evaluation:526120

Calls written directly in this body: `.trimEnd`, `lastLineStartingWith`, `text3.slice`, `text3.startsWith`.

SHA-256 of the source span: `ee5c06159a20b02d338c505f7465dc98e21a3c0c2d3badbe11c75181a3506bc1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
