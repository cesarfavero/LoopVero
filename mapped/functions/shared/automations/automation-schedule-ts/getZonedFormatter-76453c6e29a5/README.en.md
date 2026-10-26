# `getZonedFormatter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682389-682409](../../../../../../reference/runtime/host-main.cjs#L682389-L682409) | `FunctionDeclaration` | no | `timeZone` |
| [evaluation:526603-526623](../../../../../../reference/runtime/sand-eval-runner.cjs#L526603-L526623) | `FunctionDeclaration` | no | `timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682389-682409](../../../../../../reference/runtime/host-main.cjs#L682389-L682409) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:526603-526623](../../../../../../reference/runtime/sand-eval-runner.cjs#L526603-L526623) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:682389

Calls written directly in this body: `new Intl.DateTimeFormat`, `zonedFormatterCache.get`, `zonedFormatterCache.set`.

Assignment or increment targets: `formatter`.

SHA-256 of the source span: `c948f6b17287067997329ff8d221c0ce3491513609355fdb6c2791781c601487`.

### evaluation:526603

Calls written directly in this body: `new Intl.DateTimeFormat`, `zonedFormatterCache.get`, `zonedFormatterCache.set`.

Assignment or increment targets: `formatter`.

SHA-256 of the source span: `c948f6b17287067997329ff8d221c0ce3491513609355fdb6c2791781c601487`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
