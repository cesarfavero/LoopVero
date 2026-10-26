# `applyAutomationTiming`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/tools/state-tools/automation-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761964-761993](../../../../../../../../reference/runtime/host-main.cjs#L761964-L761993) | `FunctionDeclaration` | no | `{   trigger: trigger2,   args,   existing,   writeSetsTrigger,   offered }` |
| [evaluation:554542-554571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554542-L554571) | `FunctionDeclaration` | no | `{   trigger,   args,   existing,   writeSetsTrigger,   offered }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761964-761993](../../../../../../../../reference/runtime/host-main.cjs#L761964-L761993) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:554542-554571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554542-L554571) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:761964

Calls written directly in this body: `chosenByModel`, `cronMembers`, `withCronMembers`, `withoutCronTiming`.

SHA-256 of the source span: `3129a7b13aa62a6efa2189873edc8a34b4fa8eaa8ce8871aa0b7b7db829ff945`.

### evaluation:554542

Calls written directly in this body: `chosenByModel`, `cronMembers`, `withCronMembers`, `withoutCronTiming`.

SHA-256 of the source span: `11bf33128b9586223f75d0491c49feba46e75fb892ad73bb52f868c463352b84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
