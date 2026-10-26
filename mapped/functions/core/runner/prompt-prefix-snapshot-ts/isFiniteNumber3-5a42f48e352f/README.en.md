# `isFiniteNumber3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-snapshot.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-snapshot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717113-717115](../../../../../../reference/runtime/host-main.cjs#L717113-L717115) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717113-717115](../../../../../../reference/runtime/host-main.cjs#L717113-L717115) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717113

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `b1821a87056dd7541a528f638bbc2abd5c71653903ac2e643735095686add4ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
