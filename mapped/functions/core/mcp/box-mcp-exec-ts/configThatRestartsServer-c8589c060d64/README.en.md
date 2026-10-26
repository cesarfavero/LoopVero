# `configThatRestartsServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684872-684879](../../../../../../reference/runtime/host-main.cjs#L684872-L684879) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |
| [evaluation:514660-514667](../../../../../../reference/runtime/sand-eval-runner.cjs#L514660-L514667) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684872-684879](../../../../../../reference/runtime/host-main.cjs#L684872-L684879) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:514660-514667](../../../../../../reference/runtime/sand-eval-runner.cjs#L514660-L514667) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:684872

Calls written directly in this body: `JSON.stringify`, `serverEntry`.

SHA-256 of the source span: `4e8c5aa2e10c0678dc2f5706ec8d6e2effabf57900e8ff2a9f7d4c6dbd02cc8d`.

### evaluation:514660

Calls written directly in this body: `JSON.stringify`, `serverEntry`.

SHA-256 of the source span: `4e8c5aa2e10c0678dc2f5706ec8d6e2effabf57900e8ff2a9f7d4c6dbd02cc8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
