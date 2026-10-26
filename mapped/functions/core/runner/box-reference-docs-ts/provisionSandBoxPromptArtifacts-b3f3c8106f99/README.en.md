# `provisionSandBoxPromptArtifacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558530-558543](../../../../../../reference/runtime/host-main.cjs#L558530-L558543) | `FunctionDeclaration` | yes | `facts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558530-558543](../../../../../../reference/runtime/host-main.cjs#L558530-L558543) | 2 | 0 | 1 | 0 | 1 | 0 |

### host:558530

Calls written directly in this body: `Promise.allSettled`, `Promise.resolve`, `ensureDataRootAlias`, `getSandRootDir`, `outcomes.find`, `writeSandBoxReferenceDocs`.

Explicit throw targets: `failed2.reason`.

SHA-256 of the source span: `eb1cbcf1e7c2f11c1c076366a275980e4f954b4616be6dd6ee4343598a8c8a76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
