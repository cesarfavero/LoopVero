# `parseTriggerPresentation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716472-716479](../../../../../../reference/runtime/host-main.cjs#L716472-L716479) | `FunctionDeclaration` | no | `value, trigger2` |
| [evaluation:627186-627193](../../../../../../reference/runtime/sand-eval-runner.cjs#L627186-L627193) | `FunctionDeclaration` | no | `value, trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716472-716479](../../../../../../reference/runtime/host-main.cjs#L716472-L716479) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627186-627193](../../../../../../reference/runtime/sand-eval-runner.cjs#L627186-L627193) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:716472

Calls written directly in this body: `isTriggerParseFailure`, `isUnknownRecord2`, `parseStoredTrigger`, `triggerIdentity`.

SHA-256 of the source span: `3bce5670f3f830d3311c961a29fd1de0fc133130b0d9e45e25822d4ac003385a`.

### evaluation:627186

Calls written directly in this body: `isTriggerParseFailure`, `isUnknownRecord2`, `parseStoredTrigger`, `triggerIdentity`.

SHA-256 of the source span: `246a34ddbca3fe505b21c8af3073436f5a7c9d66930bd8b470441f83f36e6c71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
