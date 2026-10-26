# `sameWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732581-732583](../../../../../../../reference/runtime/host-main.cjs#L732581-L732583) | `FunctionDeclaration` | no | `left, right` |
| [evaluation:539593-539595](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539593-L539595) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732581-732583](../../../../../../../reference/runtime/host-main.cjs#L732581-L732583) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539593-539595](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539593-L539595) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732581

Calls written directly in this body: `left.every`.

SHA-256 of the source span: `f8acf4f112b290a656d996e135eeeb6c011d02822e94a9426c7714598801e81c`.

### evaluation:539593

Calls written directly in this body: `left.every`.

SHA-256 of the source span: `f8acf4f112b290a656d996e135eeeb6c011d02822e94a9426c7714598801e81c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
