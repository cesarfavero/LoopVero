# `rootPromptFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641168-641173](../../../../../../reference/runtime/host-main.cjs#L641168-L641173) | `FunctionDeclaration` | no | `body, options2` |
| [evaluation:431781-431786](../../../../../../reference/runtime/sand-eval-runner.cjs#L431781-L431786) | `FunctionDeclaration` | no | `body, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641168-641173](../../../../../../reference/runtime/host-main.cjs#L641168-L641173) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431781-431786](../../../../../../reference/runtime/sand-eval-runner.cjs#L431781-L431786) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:641168

Calls written directly in this body: `.join`, `capabilitySections`.

SHA-256 of the source span: `5045763f1d910591bd41fc25f48b0db61c75c1eb30509486e5ee31e68f8c3465`.

### evaluation:431781

Calls written directly in this body: `.join`, `capabilitySections`.

SHA-256 of the source span: `5045763f1d910591bd41fc25f48b0db61c75c1eb30509486e5ee31e68f8c3465`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
