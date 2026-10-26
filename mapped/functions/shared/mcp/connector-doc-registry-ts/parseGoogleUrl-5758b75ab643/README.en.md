# `parseGoogleUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774006-774019](../../../../../../reference/runtime/host-main.cjs#L774006-L774019) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573221-573234](../../../../../../reference/runtime/sand-eval-runner.cjs#L573221-L573234) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774006-774019](../../../../../../reference/runtime/host-main.cjs#L774006-L774019) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:573221-573234](../../../../../../reference/runtime/sand-eval-runner.cjs#L573221-L573234) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:774006

Calls written directly in this body: `googleDoc`, `segments.includes`, `segments.indexOf`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 of the source span: `91a06e89bce7c88ebc4cc64a47f9ed64b6cd49924f6073bc434ddc7ca97baec8`.

### evaluation:573221

Calls written directly in this body: `googleDoc`, `segments.includes`, `segments.indexOf`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 of the source span: `91a06e89bce7c88ebc4cc64a47f9ed64b6cd49924f6073bc434ddc7ca97baec8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
