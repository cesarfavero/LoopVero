# `parseBoxUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774157-774162](../../../../../../reference/runtime/host-main.cjs#L774157-L774162) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573372-573377](../../../../../../reference/runtime/sand-eval-runner.cjs#L573372-L573377) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774157-774162](../../../../../../reference/runtime/host-main.cjs#L774157-L774162) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573372-573377](../../../../../../reference/runtime/sand-eval-runner.cjs#L573372-L573377) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:774157

Calls written directly in this body: `isHostOf`, `matching`, `segmentsOf`.

SHA-256 of the source span: `1ec973d3f17068ce4559c8e2433e7260d875db4583020d6f026d5e44b059db08`.

### evaluation:573372

Calls written directly in this body: `isHostOf`, `matching`, `segmentsOf`.

SHA-256 of the source span: `1ec973d3f17068ce4559c8e2433e7260d875db4583020d6f026d5e44b059db08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
