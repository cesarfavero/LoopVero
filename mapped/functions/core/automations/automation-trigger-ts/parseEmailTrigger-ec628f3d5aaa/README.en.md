# `parseEmailTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716274-716286](../../../../../../reference/runtime/host-main.cjs#L716274-L716286) | `FunctionDeclaration` | no | `value` |
| [evaluation:527957-527969](../../../../../../reference/runtime/sand-eval-runner.cjs#L527957-L527969) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716274-716286](../../../../../../reference/runtime/host-main.cjs#L716274-L716286) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527957-527969](../../../../../../reference/runtime/sand-eval-runner.cjs#L527957-L527969) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:716274

Calls written directly in this body: `normalizeEmailAddress`, `parseEmailFromAddresses`, `triggerParseFailure`.

SHA-256 of the source span: `fc9b34a795f9c8ede5f57488e6c0a656e26709154b0ac64f862ea570722c0e8f`.

### evaluation:527957

Calls written directly in this body: `normalizeEmailAddress`, `parseEmailFromAddresses`, `triggerParseFailure`.

SHA-256 of the source span: `fc9b34a795f9c8ede5f57488e6c0a656e26709154b0ac64f862ea570722c0e8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
