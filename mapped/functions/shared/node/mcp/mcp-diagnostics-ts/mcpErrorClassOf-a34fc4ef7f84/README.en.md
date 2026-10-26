# `mcpErrorClassOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-diagnostics.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226169-226172](../../../../../../../reference/runtime/host-main.cjs#L226169-L226172) | `FunctionDeclaration` | no | `error64` |
| [evaluation:479042-479045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479042-L479045) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226169-226172](../../../../../../../reference/runtime/host-main.cjs#L226169-L226172) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:479042-479045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479042-L479045) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:226169

Calls written directly in this body: `errorClassOf`.

SHA-256 of the source span: `f98e66e44c253d48e3eb30df65dfcc0a9ab1f45ab6c8c6f9c24cd64451235ad2`.

### evaluation:479042

Calls written directly in this body: `errorClassOf`.

SHA-256 of the source span: `6a164b6c02ec7cf96e1803e936507254da973bb99ea786639ad9daad591c3a5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
