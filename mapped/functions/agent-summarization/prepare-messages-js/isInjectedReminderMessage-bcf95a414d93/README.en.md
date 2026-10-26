# `isInjectedReminderMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620555-620565](../../../../../reference/runtime/host-main.cjs#L620555-L620565) | `FunctionDeclaration` | no | `message` |
| [evaluation:304909-304919](../../../../../reference/runtime/sand-eval-runner.cjs#L304909-L304919) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620555-620565](../../../../../reference/runtime/host-main.cjs#L620555-L620565) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304909-304919](../../../../../reference/runtime/sand-eval-runner.cjs#L304909-L304919) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620555

Calls written directly in this body: `SYSTEM_REMINDER_ONLY_RE.test`, `text3.trim`, `textOnlyContentOf`, `trimmed.endsWith`, `trimmed.startsWith`.

SHA-256 of the source span: `d1e5e0c1d80e2f51310326f5533b7cb34b4f163cc40839f24963fae68524e672`.

### evaluation:304909

Calls written directly in this body: `SYSTEM_REMINDER_ONLY_RE.test`, `text3.trim`, `textOnlyContentOf`, `trimmed.endsWith`, `trimmed.startsWith`.

SHA-256 of the source span: `d1e5e0c1d80e2f51310326f5533b7cb34b4f163cc40839f24963fae68524e672`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
