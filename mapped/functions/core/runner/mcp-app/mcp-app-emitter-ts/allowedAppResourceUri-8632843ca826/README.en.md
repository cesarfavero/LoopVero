# `allowedAppResourceUri`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585406-585410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585406-L585410) | `FunctionDeclaration` | no | `tool, isAppServer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585406-585410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585406-L585410) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585406

Calls written directly in this body: `isAppServer`, `resolveMcpAppResourceUri`.

SHA-256 of the source span: `fc56a27a22e9c8cfacc260594b878419f10a29e77529e8527777d278b5cf01b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
