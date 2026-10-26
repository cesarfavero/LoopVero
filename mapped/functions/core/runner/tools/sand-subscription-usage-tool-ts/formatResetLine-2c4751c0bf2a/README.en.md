# `formatResetLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766635-766640](../../../../../../../reference/runtime/host-main.cjs#L766635-L766640) | `FunctionDeclaration` | no | `nextResetMs, nowMs2` |
| [evaluation:562148-562153](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562148-L562153) | `FunctionDeclaration` | no | `nextResetMs, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766635-766640](../../../../../../../reference/runtime/host-main.cjs#L766635-L766640) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562148-562153](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562148-L562153) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:766635

Calls written directly in this body: `formatCountdown`.

SHA-256 of the source span: `e133b9e2353d2cafd451660a425941f3113a35e39d9f49d2b39c077d4363afdf`.

### evaluation:562148

Calls written directly in this body: `formatCountdown`.

SHA-256 of the source span: `cd87be52b04084cecfb6301da30dd730ce969673ffd54bbd4ce0587abf8b73b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
