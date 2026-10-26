# `ownerVoiceWakeText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/voice-call/owner-voice-wake.ts` · [Module README](../../../../../../modules/core/runner/voice-call/owner-voice-wake-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752185-752203](../../../../../../../reference/runtime/host-main.cjs#L752185-L752203) | `FunctionDeclaration` | no | `text3` |
| [evaluation:529883-529901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529883-L529901) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752185-752203](../../../../../../../reference/runtime/host-main.cjs#L752185-L752203) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:529883-529901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529883-L529901) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:752185

Calls written directly in this body: `.replace`, `.trim`, `WAKE_OPENINGS.includes`, `addresses.map`, `lines2.flatMap`, `new Set`, `said.join`, `text3.split`.

SHA-256 of the source span: `33b3affd06202bc3b29cafe278351e17095caca703caf6ade83f8cea55caf3ef`.

### evaluation:529883

Calls written directly in this body: `.replace`, `.trim`, `WAKE_OPENINGS.includes`, `addresses.map`, `lines2.flatMap`, `new Set`, `said.join`, `text3.split`.

SHA-256 of the source span: `33b3affd06202bc3b29cafe278351e17095caca703caf6ade83f8cea55caf3ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
