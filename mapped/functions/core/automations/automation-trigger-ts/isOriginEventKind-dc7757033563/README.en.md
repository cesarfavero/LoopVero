# `isOriginEventKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716006-716008](../../../../../../reference/runtime/host-main.cjs#L716006-L716008) | `FunctionDeclaration` | no | `value` |
| [evaluation:527689-527691](../../../../../../reference/runtime/sand-eval-runner.cjs#L527689-L527691) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716006-716008](../../../../../../reference/runtime/host-main.cjs#L716006-L716008) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527689-527691](../../../../../../reference/runtime/sand-eval-runner.cjs#L527689-L527691) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716006

Calls written directly in this body: `ORIGIN_EVENT_KINDS.some`.

SHA-256 of the source span: `61bc1cc5320701c821c7f390754559d3ab7684211c61fc84dde8f641ef911354`.

### evaluation:527689

Calls written directly in this body: `ORIGIN_EVENT_KINDS.some`.

SHA-256 of the source span: `61bc1cc5320701c821c7f390754559d3ab7684211c61fc84dde8f641ef911354`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
