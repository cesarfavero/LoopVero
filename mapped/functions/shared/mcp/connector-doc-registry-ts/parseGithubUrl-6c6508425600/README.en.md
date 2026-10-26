# `parseGithubUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774091-774111](../../../../../../reference/runtime/host-main.cjs#L774091-L774111) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573306-573326](../../../../../../reference/runtime/sand-eval-runner.cjs#L573306-L573326) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774091-774111](../../../../../../reference/runtime/host-main.cjs#L774091-L774111) | 7 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:573306-573326](../../../../../../reference/runtime/sand-eval-runner.cjs#L573306-L573326) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:774091

Calls written directly in this body: `/^\d+$/.test`, `matching`, `path33.join`, `segments.at`, `segmentsOf`.

SHA-256 of the source span: `72e459a0f8af7e468c719573b1651e62193a4d3f2e001dca4220db4611d0deea`.

### evaluation:573306

Calls written directly in this body: `/^\d+$/.test`, `matching`, `path33.join`, `segments.at`, `segmentsOf`.

SHA-256 of the source span: `72e459a0f8af7e468c719573b1651e62193a4d3f2e001dca4220db4611d0deea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
