# `normalizeLineItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775319-775332](../../../../../../../reference/runtime/host-main.cjs#L775319-L775332) | `FunctionDeclaration` | no | `items, amountCents` |
| [evaluation:574964-574977](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574964-L574977) | `FunctionDeclaration` | no | `items, amountCents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775319-775332](../../../../../../../reference/runtime/host-main.cjs#L775319-L775332) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:574964-574977](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574964-L574977) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:775319

Calls written directly in this body: `items.map`, `items.reduce`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `739730eff258f73f5959374c3858bd3f96e9bdf839e33c74df2b0a4392d70703`.

### evaluation:574964

Calls written directly in this body: `items.map`, `items.reduce`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `739730eff258f73f5959374c3858bd3f96e9bdf839e33c74df2b0a4392d70703`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
