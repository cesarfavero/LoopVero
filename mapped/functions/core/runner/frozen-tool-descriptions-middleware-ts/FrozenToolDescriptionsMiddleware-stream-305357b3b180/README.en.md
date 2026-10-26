# `FrozenToolDescriptionsMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions-middleware.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586603-586628](../../../../../../reference/runtime/sand-eval-runner.cjs#L586603-L586628) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586603-586628](../../../../../../reference/runtime/sand-eval-runner.cjs#L586603-L586628) | 3 | 1 | 0 | 2 | 0 | 0 |

### evaluation:586603

Calls written directly in this body: `isDescribedTool2`, `live.set`, `new Map`, `resolveFrozenToolDescriptions`, `schemaShaOf`, `this.deps.compactionEpoch`, `this.deps.store.getToolDescriptionSnapshot`, `this.deps.store.setToolDescriptionSnapshot`, `this.innerExecutor.stream`, `tools.map`.

SHA-256 of the source span: `63f6f3e040bf9f5789d7ab817f2119df3ec352a17da9400f76d5fba38bdfd6d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
