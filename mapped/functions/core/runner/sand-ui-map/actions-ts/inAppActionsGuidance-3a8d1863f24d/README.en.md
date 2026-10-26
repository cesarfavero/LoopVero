# `inAppActionsGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557981-557993](../../../../../../../reference/runtime/host-main.cjs#L557981-L557993) | `FunctionDeclaration` | no | `visibility = {}` |
| [evaluation:550789-550801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550789-L550801) | `FunctionDeclaration` | no | `visibility = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557981-557993](../../../../../../../reference/runtime/host-main.cjs#L557981-L557993) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:550789-550801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550789-L550801) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:557981

Calls written directly in this body: `.join`, `.map`, `actionTerm`, `byRisk.get`, `byRisk.set`, `new Map`, `sandUiFactsForToolDescription`, `taughtActions`, `terms.push`.

SHA-256 of the source span: `a58c2b1b729968af94b96a156b4f69a8016fce2ab5c551c88d6eb92f9848bd98`.

### evaluation:550789

Calls written directly in this body: `.join`, `.map`, `actionTerm`, `byRisk.get`, `byRisk.set`, `new Map`, `sandUiFactsForToolDescription`, `taughtActions`, `terms.push`.

SHA-256 of the source span: `a58c2b1b729968af94b96a156b4f69a8016fce2ab5c551c88d6eb92f9848bd98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
