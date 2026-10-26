# `originUrlsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538288-538293](../../../../../../../reference/runtime/host-main.cjs#L538288-L538293) | `FunctionDeclaration` | no | `backend` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538288-538293](../../../../../../../reference/runtime/host-main.cjs#L538288-L538293) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:538288

Calls written directly in this body: `new URL`, `originGitHostFromBackendUrl`, `parsedApi.toString`.

SHA-256 of the source span: `1078a07c30640c450e64131b477d75d209abce8c158297cff5578245d5e1f4ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
