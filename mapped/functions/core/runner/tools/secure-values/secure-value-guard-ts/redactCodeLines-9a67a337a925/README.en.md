# `redactCodeLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767672-767699](../../../../../../../../reference/runtime/host-main.cjs#L767672-L767699) | `FunctionDeclaration` | no | `text3, values, placeholder, hits` |
| [evaluation:563189-563216](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563189-L563216) | `FunctionDeclaration` | no | `text3, values, placeholder, hits` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767672-767699](../../../../../../../../reference/runtime/host-main.cjs#L767672-L767699) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563189-563216](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563189-L563216) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767672

Calls written directly in this body: `endRun`, `lines2.forEach`, `lines2.join`, `text3.split`.

SHA-256 of the source span: `2d65c8f21f7178e4118186c66e41dabc1336f6f5c91908f3e4283688acb8b72a`.

### evaluation:563189

Calls written directly in this body: `endRun`, `lines2.forEach`, `lines2.join`, `text3.split`.

SHA-256 of the source span: `2d65c8f21f7178e4118186c66e41dabc1336f6f5c91908f3e4283688acb8b72a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
