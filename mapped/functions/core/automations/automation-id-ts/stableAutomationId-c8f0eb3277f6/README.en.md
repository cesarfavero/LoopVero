# `stableAutomationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-id.ts` · [Module README](../../../../../modules/core/automations/automation-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505708-505718](../../../../../../reference/runtime/host-main.cjs#L505708-L505718) | `FunctionDeclaration` | no | `{   agentId,   localId }` |
| [evaluation:554500-554510](../../../../../../reference/runtime/sand-eval-runner.cjs#L554500-L554510) | `FunctionDeclaration` | no | `{   agentId,   localId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505708-505718](../../../../../../reference/runtime/host-main.cjs#L505708-L505718) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554500-554510](../../../../../../reference/runtime/sand-eval-runner.cjs#L554500-L554510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505708

Calls written directly in this body: `.toString`, `Buffer.from`, `Number.parseInt`, `hex3.slice`, `sha256Hex`.

SHA-256 of the source span: `63a6897ee141af25b2435dfd924712facfc5c1716e848ac60d14941e0d421be1`.

### evaluation:554500

Calls written directly in this body: `.toString`, `Buffer.from`, `Number.parseInt`, `hex3.slice`, `sha256Hex3`.

SHA-256 of the source span: `52b62605b0d04bcad8c03c3aa02fdd6c691720f5ece16e446be77a3b5c0f02eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
