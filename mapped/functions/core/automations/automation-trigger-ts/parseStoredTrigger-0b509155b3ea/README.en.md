# `parseStoredTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716363-716372](../../../../../../reference/runtime/host-main.cjs#L716363-L716372) | `FunctionDeclaration` | no | `value` |
| [evaluation:528046-528055](../../../../../../reference/runtime/sand-eval-runner.cjs#L528046-L528055) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716363-716372](../../../../../../reference/runtime/host-main.cjs#L716363-L716372) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:528046-528055](../../../../../../reference/runtime/sand-eval-runner.cjs#L528046-L528055) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:716363

Calls written directly in this body: `Array.isArray`, `isUnknownRecord2`, `parseTriggerMember`, `parseTriggerMembers`, `triggerParseFailure`.

SHA-256 of the source span: `afe8f1e97f2cee9297937e415ba22661e7780bbd682d3928d5a9ea35d7f0334d`.

### evaluation:528046

Calls written directly in this body: `Array.isArray`, `isUnknownRecord2`, `parseTriggerMember`, `parseTriggerMembers`, `triggerParseFailure`.

SHA-256 of the source span: `afe8f1e97f2cee9297937e415ba22661e7780bbd682d3928d5a9ea35d7f0334d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
