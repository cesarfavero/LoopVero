# `cronIntervalIsAtLeast`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682495-682521](../../../../../../reference/runtime/host-main.cjs#L682495-L682521) | `FunctionDeclaration` | no | `matcher, minimumIntervalMs` |
| [evaluation:526719-526745](../../../../../../reference/runtime/sand-eval-runner.cjs#L526719-L526745) | `FunctionDeclaration` | no | `matcher, minimumIntervalMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682495-682521](../../../../../../reference/runtime/host-main.cjs#L682495-L682521) | 3 | 2 | 0 | 4 | 0 | 0 |
| [evaluation:526719-526745](../../../../../../reference/runtime/sand-eval-runner.cjs#L526719-L526745) | 3 | 2 | 0 | 4 | 0 | 0 |

### host:682495

Calls written directly in this body: `.flatMap`, `.sort`, `Date.UTC`, `cronDayMatches`, `date6.getUTCDate`, `date6.getUTCDay`, `date6.getUTCMonth`, `new Date`.

Assignment or increment targets: `dayMs`, `index`, `previousDayMatches`.

SHA-256 of the source span: `759f12dcceb3e4f925b7a05a038668511d211547dbc662fbdc01aa205eb6472b`.

### evaluation:526719

Calls written directly in this body: `.flatMap`, `.sort`, `Date.UTC`, `cronDayMatches`, `date6.getUTCDate`, `date6.getUTCDay`, `date6.getUTCMonth`, `new Date`.

Assignment or increment targets: `dayMs`, `index`, `previousDayMatches`.

SHA-256 of the source span: `a721d8cc6b6b7b8075a10b891035d3076efd337b6ec07ab235cb5a1b114a29d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
