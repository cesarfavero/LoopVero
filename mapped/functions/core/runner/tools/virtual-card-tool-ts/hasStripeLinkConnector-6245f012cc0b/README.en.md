# `hasStripeLinkConnector`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/virtual-card-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775283-775285](../../../../../../../reference/runtime/host-main.cjs#L775283-L775285) | `FunctionDeclaration` | no | `mcpTools` |
| [evaluation:574928-574930](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574928-L574930) | `FunctionDeclaration` | no | `mcpTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775283-775285](../../../../../../../reference/runtime/host-main.cjs#L775283-L775285) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574928-574930](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574928-L574930) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775283

Calls written directly in this body: `mcpTools.some`.

SHA-256 of the source span: `51c9ec3bb6c522a44e9f439e52666fccff718307a66b8636d5fc09a7db514f38`.

### evaluation:574928

Calls written directly in this body: `mcpTools.some`.

SHA-256 of the source span: `51c9ec3bb6c522a44e9f439e52666fccff718307a66b8636d5fc09a7db514f38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
