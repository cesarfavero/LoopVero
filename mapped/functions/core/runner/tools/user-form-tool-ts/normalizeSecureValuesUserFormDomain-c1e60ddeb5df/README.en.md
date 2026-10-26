# `normalizeSecureValuesUserFormDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726252-726264](../../../../../../../reference/runtime/host-main.cjs#L726252-L726264) | `FunctionDeclaration` | no | `raw` |
| [evaluation:560870-560882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560870-L560882) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726252-726264](../../../../../../../reference/runtime/host-main.cjs#L726252-L726264) | 5 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:560870-560882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560870-L560882) | 5 | 0 | 0 | 5 | 0 | 1 |

### host:726252

Calls written directly in this body: `.toLowerCase`, `new URL`, `normalizeUserFormDomain`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `13f24faca81ea092bfa8bb9b6139627d8d50ddc44b7c2c99978a5aaa11b7ee6c`.

### evaluation:560870

Calls written directly in this body: `.toLowerCase`, `new URL`, `normalizeUserFormDomain`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `02694148fa31789dd8c1804701cffc1b66ed645c48200acd45428fb4f52df58c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
