# `describeStdioSignInWait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/stdio-sign-in-watch.ts` · [Module README](../../../../../modules/core/mcp/stdio-sign-in-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779434-779438](../../../../../../reference/runtime/host-main.cjs#L779434-L779438) | `FunctionDeclaration` | no | `serverName, surfaced, resumesOnSignIn` |
| [evaluation:579606-579610](../../../../../../reference/runtime/sand-eval-runner.cjs#L579606-L579610) | `FunctionDeclaration` | no | `serverName, surfaced, resumesOnSignIn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779434-779438](../../../../../../reference/runtime/host-main.cjs#L779434-L779438) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579606-579610](../../../../../../reference/runtime/sand-eval-runner.cjs#L579606-L579610) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:779434

Calls written directly in this body: `surfaceDisplayName`.

SHA-256 of the source span: `79e2233f15cfe357c228c5664bf419e66f6c1ca1cc826845da99d47a7785619d`.

### evaluation:579606

Calls written directly in this body: `surfaceDisplayName`.

SHA-256 of the source span: `79e2233f15cfe357c228c5664bf419e66f6c1ca1cc826845da99d47a7785619d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
