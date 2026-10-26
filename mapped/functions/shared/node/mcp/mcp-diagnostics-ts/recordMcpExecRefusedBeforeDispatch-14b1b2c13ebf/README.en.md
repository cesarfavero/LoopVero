# `recordMcpExecRefusedBeforeDispatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-diagnostics.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226208-226212](../../../../../../../reference/runtime/host-main.cjs#L226208-L226212) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:479061-479065](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479061-L479065) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226208-226212](../../../../../../../reference/runtime/host-main.cjs#L226208-L226212) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479061-479065](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479061-L479065) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:226208

Calls written directly in this body: `ctx.get`.

Assignment or increment targets: `attribution.refusedBeforeDispatch`.

SHA-256 of the source span: `4bf7040ad55563517057329b49c861190a1dd61b67a9a1a738b5e3b4f3efe9a9`.

### evaluation:479061

Calls written directly in this body: `ctx.get`.

Assignment or increment targets: `attribution.refusedBeforeDispatch`.

SHA-256 of the source span: `4bf7040ad55563517057329b49c861190a1dd61b67a9a1a738b5e3b4f3efe9a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
