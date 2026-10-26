# `createRequestVirtualCardTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775382-775386](../../../../../../../reference/runtime/host-main.cjs#L775382-L775386) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:575027-575031](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575027-L575031) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775382-775386](../../../../../../../reference/runtime/host-main.cjs#L775382-L775386) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575027-575031](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575027-L575031) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:775382

Calls written directly in this body: `noteToolTargetHost`, `parseMerchantUrl`, `runRequestVirtualCard`.

SHA-256 of the source span: `529bf4fd6e2a206ca378f22307479d80fc1c86058f52d9d039147a233bafe746`.

### evaluation:575027

Calls written directly in this body: `noteToolTargetHost`, `parseMerchantUrl`, `runRequestVirtualCard`.

SHA-256 of the source span: `529bf4fd6e2a206ca378f22307479d80fc1c86058f52d9d039147a233bafe746`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
