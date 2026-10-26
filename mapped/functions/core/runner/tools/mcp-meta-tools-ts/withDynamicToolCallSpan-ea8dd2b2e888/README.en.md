# `withDynamicToolCallSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761864-761883](../../../../../../../reference/runtime/host-main.cjs#L761864-L761883) | `FunctionDeclaration` | no | `tool` |
| [evaluation:554138-554157](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554138-L554157) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761864-761883](../../../../../../../reference/runtime/host-main.cjs#L761864-L761883) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554138-554157](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554138-L554157) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761864

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a0d5cfdfaf0c229a9a81e293577ffffec8640925640e6bfab1126cb76ec3f2db`.

### evaluation:554138

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1f207e566f116fa1e1e3ab6f3c4b4c4e5053f0f509c0f8fb9fdb35b88e6fba35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
