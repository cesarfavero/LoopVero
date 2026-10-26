# `_MeetingRequestPrompt.firstWake`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/meetings/meeting-request-prompt.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754095-754098](../../../../../../reference/runtime/host-main.cjs#L754095-L754098) | `method` | no | `{ header, notes, wake }` |
| [evaluation:535891-535894](../../../../../../reference/runtime/sand-eval-runner.cjs#L535891-L535894) | `method` | no | `{ header, notes, wake }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754095-754098](../../../../../../reference/runtime/host-main.cjs#L754095-L754098) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:535891-535894](../../../../../../reference/runtime/sand-eval-runner.cjs#L535891-L535894) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:754095

Calls written directly in this body: `.join`.

SHA-256 of the source span: `b7b285dc06720368ecedd2f9615d9c512792c953234ba4bcb9f9b7e13eb7b1d6`.

### evaluation:535891

Calls written directly in this body: `.join`.

SHA-256 of the source span: `b7b285dc06720368ecedd2f9615d9c512792c953234ba4bcb9f9b7e13eb7b1d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
