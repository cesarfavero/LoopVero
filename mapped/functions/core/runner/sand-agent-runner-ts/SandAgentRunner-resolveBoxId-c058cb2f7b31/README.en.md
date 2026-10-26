# `_SandAgentRunner.resolveBoxId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593955-593957](../../../../../../reference/runtime/sand-eval-runner.cjs#L593955-L593957) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593955-593957](../../../../../../reference/runtime/sand-eval-runner.cjs#L593955-L593957) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593955

Calls written directly in this body: `this.getBoxIdImpl`, `this.getConversationId`.

SHA-256 of the source span: `d3a0a38e0afba1ede5faf0fae43a22ef854d6adc3d21c2b881f5f5a425b84459`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
