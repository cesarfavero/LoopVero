# `serializeStoredAutomationConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716532-716558](../../../../../../reference/runtime/host-main.cjs#L716532-L716558) | `FunctionDeclaration` | no | `config2` |
| [evaluation:627246-627272](../../../../../../reference/runtime/sand-eval-runner.cjs#L627246-L627272) | `FunctionDeclaration` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716532-716558](../../../../../../reference/runtime/host-main.cjs#L716532-L716558) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627246-627272](../../../../../../reference/runtime/sand-eval-runner.cjs#L627246-L627272) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:716532

Calls written directly in this body: `JSON.stringify`, `serializeStoredTrigger`, `triggerSchedule`.

SHA-256 of the source span: `9d3f4768d4c49d1e88d96519f0940d8e61005f6c538a5d65c7c01546ee596ff9`.

### evaluation:627246

Calls written directly in this body: `JSON.stringify`, `serializeStoredTrigger`, `triggerSchedule`.

SHA-256 of the source span: `9d3f4768d4c49d1e88d96519f0940d8e61005f6c538a5d65c7c01546ee596ff9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
