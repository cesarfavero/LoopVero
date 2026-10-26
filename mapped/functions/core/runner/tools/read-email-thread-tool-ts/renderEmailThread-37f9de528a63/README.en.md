# `renderEmailThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-thread-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765085-765093](../../../../../../../reference/runtime/host-main.cjs#L765085-L765093) | `FunctionDeclaration` | no | `threadId, thread` |
| [evaluation:558453-558461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558453-L558461) | `FunctionDeclaration` | no | `threadId, thread` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765085-765093](../../../../../../../reference/runtime/host-main.cjs#L765085-L765093) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558453-558461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558453-L558461) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:765085

Calls written directly in this body: `lines2.join`, `thread.messages.forEach`.

SHA-256 of the source span: `5b2371bcbb65845ec8fb12d329496f15e22f4f7abdb8ca3c5a04521a52aed8a2`.

### evaluation:558453

Calls written directly in this body: `lines2.join`, `thread.messages.forEach`.

SHA-256 of the source span: `5b2371bcbb65845ec8fb12d329496f15e22f4f7abdb8ca3c5a04521a52aed8a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
