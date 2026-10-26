# `splitAgentInboundBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-messaging.ts` · [Module README](../../../../../modules/core/agents/agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479586-479613](../../../../../../reference/runtime/sand-eval-runner.cjs#L479586-L479613) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479586-479613](../../../../../../reference/runtime/sand-eval-runner.cjs#L479586-L479613) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:479586

Calls written directly in this body: `.trim`, `Math.max`, `closed2.filter`, `closed2.map`, `headers.flatMap`, `lines2.flatMap`, `lines2.slice`, `rest.join`, `starts.map`, `text3.split`.

SHA-256 of the source span: `564e7610a737990f83ed2cd4da047b4284762e3f7a70076a9c062027594d0889`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
