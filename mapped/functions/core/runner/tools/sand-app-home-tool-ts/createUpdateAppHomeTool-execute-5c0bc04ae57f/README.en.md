# `createUpdateAppHomeTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-app-home-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-app-home-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771049-771052](../../../../../../../reference/runtime/host-main.cjs#L771049-L771052) | `ArrowFunctionExpression` | yes | `_ctx, args, home` |
| [evaluation:570155-570158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570155-L570158) | `ArrowFunctionExpression` | yes | `_ctx, args, home` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771049-771052](../../../../../../../reference/runtime/host-main.cjs#L771049-L771052) | 2 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:570155-570158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570155-L570158) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:771049

Calls written directly in this body: `home.clear`, `home.publish`, `sandAppHomeDocumentFromArgs`.

SHA-256 of the source span: `60630ca0b5f0c20f7b23147b81d54c9647449c1275aa9ef2738de13744c06743`.

### evaluation:570155

Calls written directly in this body: `home.clear`, `home.publish`, `sandAppHomeDocumentFromArgs`.

SHA-256 of the source span: `60630ca0b5f0c20f7b23147b81d54c9647449c1275aa9ef2738de13744c06743`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
