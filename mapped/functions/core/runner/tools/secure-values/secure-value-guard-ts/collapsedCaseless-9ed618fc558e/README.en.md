# `collapsedCaseless`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767591-767593](../../../../../../../../reference/runtime/host-main.cjs#L767591-L767593) | `FunctionDeclaration` | no | `text3` |
| [evaluation:563108-563110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563108-L563110) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767591-767593](../../../../../../../../reference/runtime/host-main.cjs#L767591-L767593) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563108-563110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563108-L563110) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767591

Calls written directly in this body: `.replace`, `.toLowerCase`, `text3.trim`.

SHA-256 of the source span: `0a9f14b49e0e084cdf5e58dcd5d019b7b60fee676862310892caf9fb71af7fa9`.

### evaluation:563108

Calls written directly in this body: `.replace`, `.toLowerCase`, `text3.trim`.

SHA-256 of the source span: `0a9f14b49e0e084cdf5e58dcd5d019b7b60fee676862310892caf9fb71af7fa9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
