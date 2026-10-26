# `parseChannelDisplayName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735124-735130](../../../../../../../reference/runtime/host-main.cjs#L735124-L735130) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540698-540704](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540698-L540704) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735124-735130](../../../../../../../reference/runtime/host-main.cjs#L735124-L735130) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540698-540704](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540698-L540704) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:735124

Calls written directly in this body: `/^Channel:\s*(.+?)\s*\(([^)]+)\)/.exec`, `slackReadMessages`.

SHA-256 of the source span: `10d2494a3742b13b6c532232bb31cbe7ebab8ee6ac0bdd6114d455963b550eab`.

### evaluation:540698

Calls written directly in this body: `/^Channel:\s*(.+?)\s*\(([^)]+)\)/.exec`, `slackReadMessages`.

SHA-256 of the source span: `10d2494a3742b13b6c532232bb31cbe7ebab8ee6ac0bdd6114d455963b550eab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
