# `buildFriendlyDate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639918-639946](../../../../../../reference/runtime/host-main.cjs#L639918-L639946) | `FunctionDeclaration` | no | `date6, timeZone` |
| [evaluation:430532-430560](../../../../../../reference/runtime/sand-eval-runner.cjs#L430532-L430560) | `FunctionDeclaration` | no | `date6, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639918-639946](../../../../../../reference/runtime/host-main.cjs#L639918-L639946) | 2 | 1 | 0 | 2 | 0 | 1 |
| [evaluation:430532-430560](../../../../../../reference/runtime/sand-eval-runner.cjs#L430532-L430560) | 2 | 1 | 0 | 2 | 0 | 1 |

### host:639918

Calls written directly in this body: `.toString`, `Number.parseInt`, `formatter.formatToParts`, `new Intl.DateTimeFormat`.

Assignment or increment targets: `partLookup[computed]`.

SHA-256 of the source span: `b3f4278b16e0e8e555f3d5c8631e48daa3231e135969c757c3d6d2a37a832d0f`.

### evaluation:430532

Calls written directly in this body: `.toString`, `Number.parseInt`, `formatter.formatToParts`, `new Intl.DateTimeFormat`.

Assignment or increment targets: `partLookup[computed]`.

SHA-256 of the source span: `b3f4278b16e0e8e555f3d5c8631e48daa3231e135969c757c3d6d2a37a832d0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
