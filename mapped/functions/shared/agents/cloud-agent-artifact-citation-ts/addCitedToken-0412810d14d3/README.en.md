# `addCitedToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/cloud-agent-artifact-citation.ts` · [Module README](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508157-508167](../../../../../../reference/runtime/host-main.cjs#L508157-L508167) | `FunctionDeclaration` | no | `cited, raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508157-508167](../../../../../../reference/runtime/host-main.cjs#L508157-L508167) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:508157

Calls written directly in this body: `.at`, `.replace`, `cited.add`, `raw.replace`, `token.split`.

SHA-256 of the source span: `a11f58c9db20d5cae49c329d275af0827feeec4fee748f2e36e1c2cfc352a3d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
