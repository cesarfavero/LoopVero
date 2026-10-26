# `voiceCallUtterance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476023-476027](../../../../../reference/runtime/host-main.cjs#L476023-L476027) | `FunctionExpression` | no | `utterance` |
| [evaluation:255333-255337](../../../../../reference/runtime/sand-eval-runner.cjs#L255333-L255337) | `FunctionExpression` | no | `utterance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476023-476027](../../../../../reference/runtime/host-main.cjs#L476023-L476027) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255333-255337](../../../../../reference/runtime/sand-eval-runner.cjs#L255333-L255337) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476023

Calls written directly in this body: `new InteractionUpdate`.

SHA-256 of the source span: `03a5e46f905bb9ce346b329c66976805b83f4514ad816ec4a5e632b6fc2c62a1`.

### evaluation:255333

Calls written directly in this body: `new InteractionUpdate`.

SHA-256 of the source span: `03a5e46f905bb9ce346b329c66976805b83f4514ad816ec4a5e632b6fc2c62a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
