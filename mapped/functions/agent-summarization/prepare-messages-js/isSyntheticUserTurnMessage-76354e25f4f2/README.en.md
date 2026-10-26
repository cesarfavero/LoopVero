# `isSyntheticUserTurnMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620567-620569](../../../../../reference/runtime/host-main.cjs#L620567-L620569) | `FunctionDeclaration` | no | `message` |
| [evaluation:304921-304923](../../../../../reference/runtime/sand-eval-runner.cjs#L304921-L304923) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620567-620569](../../../../../reference/runtime/host-main.cjs#L620567-L620569) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304921-304923](../../../../../reference/runtime/sand-eval-runner.cjs#L304921-L304923) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620567

Calls written directly in this body: `isInjectedReminderMessage`.

SHA-256 of the source span: `fb15f768909d67406c97b11a1e2594ef7e3bfa0658914939833ffe8615cf16ad`.

### evaluation:304921

Calls written directly in this body: `isInjectedReminderMessage`.

SHA-256 of the source span: `fb15f768909d67406c97b11a1e2594ef7e3bfa0658914939833ffe8615cf16ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
