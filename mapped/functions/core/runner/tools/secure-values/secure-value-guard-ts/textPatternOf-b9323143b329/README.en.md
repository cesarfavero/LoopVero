# `textPatternOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767604-767606](../../../../../../../../reference/runtime/host-main.cjs#L767604-L767606) | `FunctionDeclaration` | no | `entry` |
| [evaluation:563121-563123](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563121-L563123) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767604-767606](../../../../../../../../reference/runtime/host-main.cjs#L767604-L767606) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563121-563123](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563121-L563123) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767604

Calls written directly in this body: `escapeRegExp6`, `patternOf`.

SHA-256 of the source span: `6a84e94d9b3e77308621f5b6832128bec4a9daec8b050bd38420edc286856a67`.

### evaluation:563121

Calls written directly in this body: `escapeRegExp5`, `patternOf`.

SHA-256 of the source span: `9e2f06bd8db14dba9c9a60f49a573f8ec11fab29c5682f46ebab61a45725a149`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
