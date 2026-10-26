# `createMcpAppEmitter/capturePage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585413-585440](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585413-L585440) | `FunctionDeclaration` | yes | `pages, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585413-585440](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585413-L585440) | 1 | 0 | 1 | 2 | 0 | 1 |

### evaluation:585413

Calls written directly in this body: `deadline.run`, `deps.agentId`, `pages.noteCapture`.

SHA-256 of the source span: `b69e95ef58c7116c830cb3858fe17d6c888613949d98d7cde285ba67f15348d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
