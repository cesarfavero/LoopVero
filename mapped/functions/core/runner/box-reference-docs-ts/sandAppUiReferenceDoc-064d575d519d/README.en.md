# `sandAppUiReferenceDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558473-558503](../../../../../../reference/runtime/host-main.cjs#L558473-L558503) | `FunctionDeclaration` | no | `facts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558473-558503](../../../../../../reference/runtime/host-main.cjs#L558473-L558503) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:558473

Calls written directly in this body: `.concat`, `.filter`, `.join`, `.map`, `MAP.settings.openers.join`, `MAP.settings.sections.flatMap`, `aQuoted`, `annotationsFor`, `detailsPaneLines`, `factRead`, `joinClauses`, `menuLine`, `pluginsLines`, `proseLines`, `quote`, `settingsTabsLine`, `shortcutsLine`, `sidebarTargetsLine`, `taughtOverviewTabIds2`.

SHA-256 of the source span: `58fded76d932966aa2ecde6a68f9f21d2be81a5ed2519e66baa4ca650f3a3368`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
