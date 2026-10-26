# `parseCanvaUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774199-774203](../../../../../../reference/runtime/host-main.cjs#L774199-L774203) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573414-573418](../../../../../../reference/runtime/sand-eval-runner.cjs#L573414-L573418) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774199-774203](../../../../../../reference/runtime/host-main.cjs#L774199-L774203) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573414-573418](../../../../../../reference/runtime/sand-eval-runner.cjs#L573414-L573418) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:774199

Calls written directly in this body: `canvaDoc`, `isHostOf`, `segmentsOf`.

SHA-256 of the source span: `2ac154e1d80d38af27dacfdae55fdda4b8044616f77b5765aac07d442820c4b3`.

### evaluation:573414

Calls written directly in this body: `canvaDoc`, `isHostOf`, `segmentsOf`.

SHA-256 of the source span: `2ac154e1d80d38af27dacfdae55fdda4b8044616f77b5765aac07d442820c4b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
