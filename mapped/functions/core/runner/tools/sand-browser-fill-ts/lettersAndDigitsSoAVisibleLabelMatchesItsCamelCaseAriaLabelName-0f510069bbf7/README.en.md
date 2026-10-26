# `lettersAndDigitsSoAVisibleLabelMatchesItsCamelCaseAriaLabelName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726982-726984](../../../../../../../reference/runtime/host-main.cjs#L726982-L726984) | `FunctionDeclaration` | no | `text3` |
| [evaluation:561593-561595](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561593-L561595) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726982-726984](../../../../../../../reference/runtime/host-main.cjs#L726982-L726984) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561593-561595](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561593-L561595) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726982

Calls written directly in this body: `.replace`, `text3.toLowerCase`.

SHA-256 of the source span: `45d0868eb76062abb33364f361a28f71ef4afd9e507bed3c8a59d13d57875638`.

### evaluation:561593

Calls written directly in this body: `.replace`, `text3.toLowerCase`.

SHA-256 of the source span: `45d0868eb76062abb33364f361a28f71ef4afd9e507bed3c8a59d13d57875638`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
