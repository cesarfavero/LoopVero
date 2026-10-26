# `SandAutomationCloudSync.reconcileNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505594-505609](../../../../../../../reference/runtime/host-main.cjs#L505594-L505609) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505594-505609](../../../../../../../reference/runtime/host-main.cjs#L505594-L505609) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:505594

Calls written directly in this body: `.catch`, `.finally`, `this.retryPendingAgentDeletions`.

Assignment or increment targets: `this.inFlight`, `this.rerun`.

SHA-256 of the source span: `76a48b7bc86efec07d947c0288134ca7d8bef8c05da0683effe5a170d77c6730`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
