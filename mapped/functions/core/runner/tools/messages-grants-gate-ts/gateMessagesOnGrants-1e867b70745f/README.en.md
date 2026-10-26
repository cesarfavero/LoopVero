# `gateMessagesOnGrants`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777844-777911](../../../../../../../reference/runtime/host-main.cjs#L777844-L777911) | `FunctionDeclaration` | no | `messages2, grants, report` |
| [evaluation:577579-577646](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577579-L577646) | `FunctionDeclaration` | no | `messages, grants, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777844-777911](../../../../../../../reference/runtime/host-main.cjs#L777844-L777911) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577579-577646](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577579-L577646) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777844

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2a0709f193581c0979b7459b9e7613edd956ac4289dce9dbcb98cedbb5079925`.

### evaluation:577579

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `929325f009521ae6fcd1f416644667fdc0a782e5b6373cd7c483857d6e99d942`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
