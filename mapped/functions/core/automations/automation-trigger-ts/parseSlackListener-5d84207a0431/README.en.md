# `parseSlackListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716067-716075](../../../../../../reference/runtime/host-main.cjs#L716067-L716075) | `FunctionDeclaration` | no | `value` |
| [evaluation:527750-527758](../../../../../../reference/runtime/sand-eval-runner.cjs#L527750-L527758) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716067-716075](../../../../../../reference/runtime/host-main.cjs#L716067-L716075) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527750-527758](../../../../../../reference/runtime/sand-eval-runner.cjs#L527750-L527758) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:716067

Calls written directly in this body: `isTriggerParseFailure`, `normalizeScopeToken`, `parseSlackMatch`, `triggerParseFailure`.

SHA-256 of the source span: `3b74fd11e4f404dfd600af203d349dd5eaf3f31201cc045f880deb147f8aab08`.

### evaluation:527750

Calls written directly in this body: `isTriggerParseFailure`, `normalizeScopeToken`, `parseSlackMatch`, `triggerParseFailure`.

SHA-256 of the source span: `3b74fd11e4f404dfd600af203d349dd5eaf3f31201cc045f880deb147f8aab08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
