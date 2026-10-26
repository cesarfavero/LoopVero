# `clearFilledSecretsInPage/secretInputs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-clear.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-clear-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543221-543229](../../../../../../../reference/runtime/host-main.cjs#L543221-L543229) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543221-543229](../../../../../../../reference/runtime/host-main.cjs#L543221-L543229) | 1 | 1 | 2 | 1 | 0 | 0 |

### host:543221

Calls written directly in this body: `boxes.has`, `collectInputs`, `found.push`, `holdsSecretValue`, `splitCodeBoxes`.

SHA-256 of the source span: `ec9512fc47c30a5209870dc211cabfd630a16ce795163528d7e4928358e589ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
