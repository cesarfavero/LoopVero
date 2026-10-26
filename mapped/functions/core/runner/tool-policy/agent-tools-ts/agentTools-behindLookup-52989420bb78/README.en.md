# `agentTools/behindLookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756570-756570](../../../../../../../reference/runtime/host-main.cjs#L756570-L756570) | `ArrowFunctionExpression` | no | `tool` |
| [evaluation:542490-542490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542490-L542490) | `ArrowFunctionExpression` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756570-756570](../../../../../../../reference/runtime/host-main.cjs#L756570-L756570) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:756570 uses an implicit arrow-function return.
| [evaluation:542490-542490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542490-L542490) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:542490 uses an implicit arrow-function return.

### host:756570

Calls written directly in this body: `lookupOnly.has`, `topLevel.has`.

SHA-256 of the source span: `1b6da2081a57602e045882eec66dd951f17573c7bcd3b68c8b7bb52390b491c3`.

### evaluation:542490

Calls written directly in this body: `lookupOnly.has`, `topLevel.has`.

SHA-256 of the source span: `1b6da2081a57602e045882eec66dd951f17573c7bcd3b68c8b7bb52390b491c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
