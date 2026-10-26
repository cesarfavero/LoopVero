# `layoutClauses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558353-558360](../../../../../../reference/runtime/host-main.cjs#L558353-L558360) | `FunctionDeclaration` | no | `layout, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558353-558360](../../../../../../reference/runtime/host-main.cjs#L558353-L558360) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:558353

Calls written directly in this body: `.join`, `joinClauses`, `layout.headerControls.map`, `layout.identityControls.map`, `layout.settingsSubpage.fields.map`, `layout.tabs.map`, `quote`.

SHA-256 of the source span: `150b142e172ad1e3ea94952360323d59dac321773e51e45980dc25f335cfcc8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
