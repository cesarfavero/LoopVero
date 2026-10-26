# `parseMiroUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774190-774194](../../../../../../reference/runtime/host-main.cjs#L774190-L774194) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573405-573409](../../../../../../reference/runtime/sand-eval-runner.cjs#L573405-L573409) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774190-774194](../../../../../../reference/runtime/host-main.cjs#L774190-L774194) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573405-573409](../../../../../../reference/runtime/sand-eval-runner.cjs#L573405-L573409) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:774190

Calls written directly in this body: `isHostOf`, `miroDoc`, `segmentsOf`.

SHA-256 of the source span: `9203ad9c995d5188e839fe8186f200b2eb5aa181fbf3495421eb892621d768ad`.

### evaluation:573405

Calls written directly in this body: `isHostOf`, `miroDoc`, `segmentsOf`.

SHA-256 of the source span: `9203ad9c995d5188e839fe8186f200b2eb5aa181fbf3495421eb892621d768ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
