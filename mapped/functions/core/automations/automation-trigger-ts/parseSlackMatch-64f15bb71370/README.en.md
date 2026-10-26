# `parseSlackMatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716036-716066](../../../../../../reference/runtime/host-main.cjs#L716036-L716066) | `FunctionDeclaration` | no | `value` |
| [evaluation:527719-527749](../../../../../../reference/runtime/sand-eval-runner.cjs#L527719-L527749) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716036-716066](../../../../../../reference/runtime/host-main.cjs#L716036-L716066) | 9 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:527719-527749](../../../../../../reference/runtime/sand-eval-runner.cjs#L527719-L527749) | 9 | 0 | 0 | 6 | 0 | 0 |

### host:716036

Calls written directly in this body: `isUnknownRecord2`, `normalizeScopeToken`, `parseReactionEmoji`, `triggerParseFailure`.

SHA-256 of the source span: `933ccf9d9946f9a942d2e59b5c15acba448a89e359c72bd9f3f2fd836e9cc128`.

### evaluation:527719

Calls written directly in this body: `isUnknownRecord2`, `normalizeScopeToken`, `parseReactionEmoji`, `triggerParseFailure`.

SHA-256 of the source span: `933ccf9d9946f9a942d2e59b5c15acba448a89e359c72bd9f3f2fd836e9cc128`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
