# `readSandAgentLoopModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-stream/agent-loop-model.ts` · [Module README](../../../../../../modules/core/runner/model-stream/agent-loop-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700027-700029](../../../../../../../reference/runtime/host-main.cjs#L700027-L700029) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:513783-513785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513783-L513785) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700027-700029](../../../../../../../reference/runtime/host-main.cjs#L700027-L700029) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513783-513785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513783-L513785) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700027

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `303f48d865244ea870ffb4aab346bb05cc20a3734753c85f808dd72c44843f0a`.

### evaluation:513783

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `303f48d865244ea870ffb4aab346bb05cc20a3734753c85f808dd72c44843f0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
