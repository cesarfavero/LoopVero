# `recordMcpExecErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-diagnostics.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226203-226207](../../../../../../../reference/runtime/host-main.cjs#L226203-L226207) | `FunctionDeclaration` | no | `ctx, error64` |
| [evaluation:479056-479060](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479056-L479060) | `FunctionDeclaration` | no | `ctx, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226203-226207](../../../../../../../reference/runtime/host-main.cjs#L226203-L226207) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479056-479060](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479056-L479060) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:226203

Calls written directly in this body: `ctx.get`, `mcpErrorClassOf`.

Assignment or increment targets: `attribution.errorClass`.

SHA-256 of the source span: `124546fc3439105d48745bf7fcd7e5fc95331abaa5188de9c107509499d54b9c`.

### evaluation:479056

Calls written directly in this body: `ctx.get`, `mcpErrorClassOf`.

Assignment or increment targets: `attribution.errorClass`.

SHA-256 of the source span: `302269d99ccbcebecbad859b6ec4b09cad7b3ffd238139806d84abbacfce9487`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
