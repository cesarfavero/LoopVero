# `formatCountdown`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766592-766595](../../../../../../../reference/runtime/host-main.cjs#L766592-L766595) | `FunctionDeclaration` | no | `verb, atMs, nowMs2` |
| [evaluation:562105-562108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562105-L562108) | `FunctionDeclaration` | no | `verb, atMs, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766592-766595](../../../../../../../reference/runtime/host-main.cjs#L766592-L766595) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562105-562108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562105-L562108) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766592

Calls written directly in this body: `formatDurationMs`, `formatUtcTimestamp`.

SHA-256 of the source span: `b1512eabda7b93e73c881379235460319dfd571b193aae00144373bc169ddc0b`.

### evaluation:562105

Calls written directly in this body: `formatDurationMs`, `formatUtcTimestamp`.

SHA-256 of the source span: `e1f89043062b299b0bbfd1aff8f33e1b276ee6faf07c7449634847d8256936ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
