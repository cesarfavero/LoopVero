# `clampAutomationCoalescedRunIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716565-716569](../../../../../../reference/runtime/host-main.cjs#L716565-L716569) | `FunctionDeclaration` | no | `value` |
| [evaluation:627279-627283](../../../../../../reference/runtime/sand-eval-runner.cjs#L627279-L627283) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716565-716569](../../../../../../reference/runtime/host-main.cjs#L716565-L716569) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627279-627283](../../../../../../reference/runtime/sand-eval-runner.cjs#L627279-L627283) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:716565

Calls written directly in this body: `.slice`, `Array.isArray`, `value.filter`.

SHA-256 of the source span: `f87f14715ffe7d3ddf62499a650bf6d0df5caba2ed5091dfced02f46e518a34b`.

### evaluation:627279

Calls written directly in this body: `.slice`, `Array.isArray`, `value.filter`.

SHA-256 of the source span: `f87f14715ffe7d3ddf62499a650bf6d0df5caba2ed5091dfced02f46e518a34b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
