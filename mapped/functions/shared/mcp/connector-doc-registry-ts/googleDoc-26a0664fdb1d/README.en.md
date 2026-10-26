# `googleDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773997-774005](../../../../../../reference/runtime/host-main.cjs#L773997-L774005) | `FunctionDeclaration` | no | `editor, raw` |
| [evaluation:573212-573220](../../../../../../reference/runtime/sand-eval-runner.cjs#L573212-L573220) | `FunctionDeclaration` | no | `editor, raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773997-774005](../../../../../../reference/runtime/host-main.cjs#L773997-L774005) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573212-573220](../../../../../../reference/runtime/sand-eval-runner.cjs#L573212-L573220) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:773997

Calls written directly in this body: `GOOGLE_EDITORS.get`, `matching`, `raw.trim`.

SHA-256 of the source span: `5179d0dcaefacd5822c70081dc3cf1debdafb6408faa5657f334563cd82a0ca7`.

### evaluation:573212

Calls written directly in this body: `GOOGLE_EDITORS.get`, `matching`, `raw.trim`.

SHA-256 of the source span: `5179d0dcaefacd5822c70081dc3cf1debdafb6408faa5657f334563cd82a0ca7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
