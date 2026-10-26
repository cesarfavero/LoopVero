# `refuseUnreviewableAutomationRemoval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762839-762847](../../../../../../../reference/runtime/host-main.cjs#L762839-L762847) | `FunctionDeclaration` | no | `deps, automationId` |
| [evaluation:555449-555457](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555449-L555457) | `FunctionDeclaration` | no | `deps, automationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762839-762847](../../../../../../../reference/runtime/host-main.cjs#L762839-L762847) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555449-555457](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555449-L555457) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762839

Calls written directly in this body: `.find`, `deps.automationStore.list`, `deps.canReviewAutomationWrites`.

SHA-256 of the source span: `cd068c1271d2e3e18dff6e9d0ca32db17f07b5505bc6d315c52413b7b2ac7643`.

### evaluation:555449

Calls written directly in this body: `.find`, `deps.automationStore.list`, `deps.canReviewAutomationWrites`.

SHA-256 of the source span: `cd068c1271d2e3e18dff6e9d0ca32db17f07b5505bc6d315c52413b7b2ac7643`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
