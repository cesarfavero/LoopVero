# `redactMcpValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693750-693779](../../../../../../reference/runtime/host-main.cjs#L693750-L693779) | `FunctionDeclaration` | no | `value, key, depth = 0` |
| [evaluation:491019-491048](../../../../../../reference/runtime/sand-eval-runner.cjs#L491019-L491048) | `FunctionDeclaration` | no | `value, key, depth = 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693750-693779](../../../../../../reference/runtime/host-main.cjs#L693750-L693779) | 9 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:491019-491048](../../../../../../reference/runtime/sand-eval-runner.cjs#L491019-L491048) | 9 | 0 | 0 | 6 | 0 | 0 |

### host:693750

Calls written directly in this body: `Array.isArray`, `Object.entries`, `Object.fromEntries`, `SAND_AUTO_REVIEW_SECRET_KEY_PATTERN.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `allEntries.slice`, `compactHeadAndTail`, `entries.map`, `redactSandAutoReviewInlineSecrets`, `selected.map`, `value.slice`.

SHA-256 of the source span: `a17b04fb2103a6af13e8dca0ecd4ea703408851370533e5648730dd4a2039273`.

### evaluation:491019

Calls written directly in this body: `Array.isArray`, `Object.entries`, `Object.fromEntries`, `SAND_AUTO_REVIEW_SECRET_KEY_PATTERN.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `allEntries.slice`, `compactHeadAndTail`, `entries.map`, `redactSandAutoReviewInlineSecrets`, `selected.map`, `value.slice`.

SHA-256 of the source span: `a17b04fb2103a6af13e8dca0ecd4ea703408851370533e5648730dd4a2039273`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
