# `parseStoredAutomationRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716570-716595](../../../../../../reference/runtime/host-main.cjs#L716570-L716595) | `FunctionDeclaration` | no | `entry` |
| [evaluation:627284-627309](../../../../../../reference/runtime/sand-eval-runner.cjs#L627284-L627309) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716570-716595](../../../../../../reference/runtime/host-main.cjs#L716570-L716595) | 14 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627284-627309](../../../../../../reference/runtime/sand-eval-runner.cjs#L627284-L627309) | 14 | 0 | 0 | 3 | 0 | 0 |

### host:716570

Calls written directly in this body: `Number.isFinite`, `clampAutomationCoalescedRunIds`, `clampAutomationRunDetail`.

SHA-256 of the source span: `dd537e02907605d2bfd910c61965e467386a4996e5ffdabdf509a59971f42b86`.

### evaluation:627284

Calls written directly in this body: `Number.isFinite`, `clampAutomationCoalescedRunIds`, `clampAutomationRunDetail`.

SHA-256 of the source span: `3e6c6052be26de9f069c51de85c3b5dc393d91f5083aa7085520cd3d4e07516c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
