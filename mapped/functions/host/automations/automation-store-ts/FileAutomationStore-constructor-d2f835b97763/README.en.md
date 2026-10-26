# `FileAutomationStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720488-720499](../../../../../../reference/runtime/host-main.cjs#L720488-L720499) | `method` | no | `automationsDir, resolveUserTimeZone = () => void 0, clock = realClock` |
| [evaluation:627839-627850](../../../../../../reference/runtime/sand-eval-runner.cjs#L627839-L627850) | `method` | no | `automationsDir, resolveUserTimeZone = () => void 0, clock = realClock` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720488-720499](../../../../../../reference/runtime/host-main.cjs#L720488-L720499) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627839-627850](../../../../../../reference/runtime/sand-eval-runner.cjs#L627839-L627850) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720488

Calls written directly in this body: `createDebouncePolicy`, `new WatchedDirectory`.

Assignment or increment targets: `this.automationsDir`, `this.dir`, `this.resolveUserTimeZone`.

SHA-256 of the source span: `1fececb7c69368ee7df4df9512fa664b4c0f0e9871dbfabc552bbfb1f7a8339a`.

### evaluation:627839

Calls written directly in this body: `createDebouncePolicy`, `new WatchedDirectory`.

Assignment or increment targets: `this.automationsDir`, `this.dir`, `this.resolveUserTimeZone`.

SHA-256 of the source span: `1fececb7c69368ee7df4df9512fa664b4c0f0e9871dbfabc552bbfb1f7a8339a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
