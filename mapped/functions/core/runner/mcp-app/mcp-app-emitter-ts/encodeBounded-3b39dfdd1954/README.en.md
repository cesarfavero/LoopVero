# `encodeBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585368-585374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585368-L585374) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585368-585374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585368-L585374) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585368

Calls written directly in this body: `writeMcpAppJson`.

SHA-256 of the source span: `b62733ead9d6b900cb3b28f3e095ced928edf408dbbd9ef16a9b5d80a988c924`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
