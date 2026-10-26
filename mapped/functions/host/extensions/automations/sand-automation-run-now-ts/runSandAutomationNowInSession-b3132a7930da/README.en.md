# `runSandAutomationNowInSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-run-now.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-run-now-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505725-505746](../../../../../../../reference/runtime/host-main.cjs#L505725-L505746) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505725-505746](../../../../../../../reference/runtime/host-main.cjs#L505725-L505746) | 2 | 0 | 2 | 0 | 3 | 1 |

### host:505725

Calls written directly in this body: `.find`, `deps.client.testAutomation`, `deps.listAutomations`, `isConnectRefusal`, `isScheduleOnlyTrigger`, `new CronSamplePayload`, `new SandAutomationRunNowRefusedError`, `new TestAutomationRequest`, `stableAutomationId`.

Explicit throw targets: `SandAutomationRunNowRefusedError`, `error64`.

SHA-256 of the source span: `463e02bbf840cf8a46438803b66ac665a4f6bcc062e1e8d3c92d48ab51663f35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
