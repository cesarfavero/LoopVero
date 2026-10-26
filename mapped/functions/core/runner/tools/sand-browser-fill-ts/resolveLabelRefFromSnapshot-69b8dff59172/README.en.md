# `resolveLabelRefFromSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727089-727119](../../../../../../../reference/runtime/host-main.cjs#L727089-L727119) | `FunctionDeclaration` | no | `snapshot, label, preferredRole, disambiguation` |
| [evaluation:561700-561730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561700-L561730) | `FunctionDeclaration` | no | `snapshot, label, preferredRole, disambiguation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727089-727119](../../../../../../../reference/runtime/host-main.cjs#L727089-L727119) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:561700-561730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561700-L561730) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:727089

Calls written directly in this body: `.toLowerCase`, `disambiguation.frame.trim`, `exactAccessibleNameRef`, `label.trim`, `lettersAndDigitsSoAVisibleLabelMatchesItsCamelCaseAriaLabelName`, `pickRefLine`, `pickTheOnlyPreferredRoleRefWhoseNameCarriesEveryWordOfTheLabelInAnyOrder`, `pickTheOnlyPreferredRoleRefWhoseNameIsEntirelyContainedInTheLabel`, `snapshot.split`.

SHA-256 of the source span: `d69de0970ec133eb55a0df57e82d3b28532d2b15b08ff99bbec2f66c36f9fdd6`.

### evaluation:561700

Calls written directly in this body: `.toLowerCase`, `disambiguation.frame.trim`, `exactAccessibleNameRef`, `label.trim`, `lettersAndDigitsSoAVisibleLabelMatchesItsCamelCaseAriaLabelName`, `pickRefLine`, `pickTheOnlyPreferredRoleRefWhoseNameCarriesEveryWordOfTheLabelInAnyOrder`, `pickTheOnlyPreferredRoleRefWhoseNameIsEntirelyContainedInTheLabel`, `snapshot.split`.

SHA-256 of the source span: `d69de0970ec133eb55a0df57e82d3b28532d2b15b08ff99bbec2f66c36f9fdd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
