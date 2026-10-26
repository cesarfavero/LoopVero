# `parseReactionEmoji`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716024-716035](../../../../../../reference/runtime/host-main.cjs#L716024-L716035) | `FunctionDeclaration` | no | `raw` |
| [evaluation:527707-527718](../../../../../../reference/runtime/sand-eval-runner.cjs#L527707-L527718) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716024-716035](../../../../../../reference/runtime/host-main.cjs#L716024-L716035) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:527707-527718](../../../../../../reference/runtime/sand-eval-runner.cjs#L527707-L527718) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:716024

Calls written directly in this body: `Array.isArray`, `REACTION_EMOJI_PATTERN.test`, `names3.includes`, `names3.push`, `normalizeReactionEmoji`.

SHA-256 of the source span: `b1296e4211dcf9dead2dbe353f189dabe3b8aa0314bb76214ac080bdf620bc6f`.

### evaluation:527707

Calls written directly in this body: `Array.isArray`, `REACTION_EMOJI_PATTERN.test`, `names3.includes`, `names3.push`, `normalizeReactionEmoji`.

SHA-256 of the source span: `b1296e4211dcf9dead2dbe353f189dabe3b8aa0314bb76214ac080bdf620bc6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
