# `_SandAgentRunner.getResolvedOutline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593861-593872](../../../../../../reference/runtime/sand-eval-runner.cjs#L593861-L593872) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593861-593872](../../../../../../reference/runtime/sand-eval-runner.cjs#L593861-L593872) | 0 | 0 | 1 | 2 | 0 | 1 |

### evaluation:593861

Calls written directly in this body: `deriveConversationStateFromStructure`, `deriveOutlineFromConversationState`, `this.getBlobStore`, `this.getConversationState`.

SHA-256 of the source span: `b0bcc410d3411ba1b72a1c2521d975519a0b38117f299935f5aafbf6c6c87448`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
