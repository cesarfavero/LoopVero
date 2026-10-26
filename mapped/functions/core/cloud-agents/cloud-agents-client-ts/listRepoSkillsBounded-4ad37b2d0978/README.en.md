# `listRepoSkillsBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512866-512885](../../../../../../reference/runtime/host-main.cjs#L512866-L512885) | `FunctionDeclaration` | yes | `dashboard, repoUrl, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512866-512885](../../../../../../reference/runtime/host-main.cjs#L512866-L512885) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:512866

Calls written directly in this body: `Date.now`, `customModeListingDeadline.run`, `process.stderr.write`.

SHA-256 of the source span: `809f202809045ea99882374b0bc7f5e9cd9364168b50d618baf1949071e8edf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
