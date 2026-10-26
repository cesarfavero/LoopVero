# `FileAutomationStore.readRuns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720528-720537](../../../../../../reference/runtime/host-main.cjs#L720528-L720537) | `method` | no | `id` |
| [evaluation:627879-627888](../../../../../../reference/runtime/sand-eval-runner.cjs#L627879-L627888) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720528-720537](../../../../../../reference/runtime/host-main.cjs#L720528-L720537) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:627879-627888](../../../../../../reference/runtime/sand-eval-runner.cjs#L627879-L627888) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:720528

Calls written directly in this body: `parseStoredAutomationRuns`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.runsPath`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `7ff884facc5c7fa14d4e90208b7f8ef780aa0c263b37b786aaa5aa156e969787`.

### evaluation:627879

Calls written directly in this body: `parseStoredAutomationRuns`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.runsPath`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `17855c76d339b4094c64ab6ca3dab74e811aa6937db01ca8a3de24f3ba640387`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
