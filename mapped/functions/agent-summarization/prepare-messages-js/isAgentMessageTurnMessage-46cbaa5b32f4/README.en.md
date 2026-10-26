# `isAgentMessageTurnMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620571-620573](../../../../../reference/runtime/host-main.cjs#L620571-L620573) | `FunctionDeclaration` | no | `message` |
| [evaluation:304925-304927](../../../../../reference/runtime/sand-eval-runner.cjs#L304925-L304927) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620571-620573](../../../../../reference/runtime/host-main.cjs#L620571-L620573) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304925-304927](../../../../../reference/runtime/sand-eval-runner.cjs#L304925-L304927) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620571

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ce56d92ca908e3c8fba702f365a32a2c75cd0dcdc3d6115cb2d53f4b95ad8d90`.

### evaluation:304925

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ce56d92ca908e3c8fba702f365a32a2c75cd0dcdc3d6115cb2d53f4b95ad8d90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
