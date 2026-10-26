# `causeIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-write-failure.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-write-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724166-724168](../../../../../../../../reference/runtime/host-main.cjs#L724166-L724168) | `FunctionDeclaration` | no | `phrases, error64` |
| [evaluation:560060-560062](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560060-L560062) | `FunctionDeclaration` | no | `phrases, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724166-724168](../../../../../../../../reference/runtime/host-main.cjs#L724166-L724168) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560060-560062](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560060-L560062) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724166

Calls written directly in this body: `phrases.find`.

SHA-256 of the source span: `c51222b32d826b3c636c50ee8acd41829655abaf83ef88d2539f6b185c1dd003`.

### evaluation:560060

Calls written directly in this body: `phrases.find`.

SHA-256 of the source span: `82cc6e58af55bab553005853729b515720e42f14c7ce47fdf706513a26b6f90a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
