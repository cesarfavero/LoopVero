# `canvaDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774195-774198](../../../../../../reference/runtime/host-main.cjs#L774195-L774198) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573410-573413](../../../../../../reference/runtime/sand-eval-runner.cjs#L573410-L573413) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774195-774198](../../../../../../reference/runtime/host-main.cjs#L774195-L774198) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573410-573413](../../../../../../reference/runtime/sand-eval-runner.cjs#L573410-L573413) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774195

Calls written directly in this body: `matching`, `raw.trim`.

SHA-256 of the source span: `ae375fd524571b145d8f2d11957c852f12d69e0975472c3690dd08ff305c7c5e`.

### evaluation:573410

Calls written directly in this body: `matching`, `raw.trim`.

SHA-256 of the source span: `ae375fd524571b145d8f2d11957c852f12d69e0975472c3690dd08ff305c7c5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
