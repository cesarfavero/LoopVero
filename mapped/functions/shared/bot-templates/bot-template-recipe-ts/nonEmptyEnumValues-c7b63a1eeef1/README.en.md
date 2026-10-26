# `nonEmptyEnumValues`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/bot-templates/bot-template-recipe.ts` · [Module README](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494662-494666](../../../../../../reference/runtime/host-main.cjs#L494662-L494666) | `FunctionDeclaration` | no | `values` |
| [evaluation:570169-570173](../../../../../../reference/runtime/sand-eval-runner.cjs#L570169-L570173) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494662-494666](../../../../../../reference/runtime/host-main.cjs#L494662-L494666) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570169-570173](../../../../../../reference/runtime/sand-eval-runner.cjs#L570169-L570173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494662

Calls written directly in this body: `invariant`, `values.slice`.

SHA-256 of the source span: `e39ec1945c48375e6b666e14ae255face846394afd129f7fc09a2abe39ae8865`.

### evaluation:570169

Calls written directly in this body: `invariant`, `values.slice`.

SHA-256 of the source span: `e39ec1945c48375e6b666e14ae255face846394afd129f7fc09a2abe39ae8865`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
