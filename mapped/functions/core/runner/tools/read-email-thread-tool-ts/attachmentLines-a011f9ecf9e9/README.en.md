# `attachmentLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-thread-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765068-765084](../../../../../../../reference/runtime/host-main.cjs#L765068-L765084) | `FunctionDeclaration` | no | `message` |
| [evaluation:558436-558452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558436-L558452) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765068-765084](../../../../../../../reference/runtime/host-main.cjs#L765068-L765084) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558436-558452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558436-L558452) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:765068

Calls written directly in this body: `message.attachments.map`.

SHA-256 of the source span: `9fe663a35b6edd7c6f281ebb2aeea1d2334aca532ff4c03cda630a99e277739a`.

### evaluation:558436

Calls written directly in this body: `message.attachments.map`.

SHA-256 of the source span: `9fe663a35b6edd7c6f281ebb2aeea1d2334aca532ff4c03cda630a99e277739a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
