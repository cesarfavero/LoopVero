# `gmailDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774214-774217](../../../../../../reference/runtime/host-main.cjs#L774214-L774217) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573429-573432](../../../../../../reference/runtime/sand-eval-runner.cjs#L573429-L573432) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774214-774217](../../../../../../reference/runtime/host-main.cjs#L774214-L774217) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573429-573432](../../../../../../reference/runtime/sand-eval-runner.cjs#L573429-L573432) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774214

Calls written directly in this body: `matching`, `raw.trim`.

SHA-256 of the source span: `1b3f7fb39c94f8306fc02f446b755a9ac3d651565d8691ffd7c4b597441e3546`.

### evaluation:573429

Calls written directly in this body: `matching`, `raw.trim`.

SHA-256 of the source span: `1b3f7fb39c94f8306fc02f446b755a9ac3d651565d8691ffd7c4b597441e3546`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
