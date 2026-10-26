# `patternOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767594-767600](../../../../../../../../reference/runtime/host-main.cjs#L767594-L767600) | `FunctionDeclaration` | no | `value` |
| [evaluation:563111-563117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563111-L563117) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767594-767600](../../../../../../../../reference/runtime/host-main.cjs#L767594-L767600) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563111-563117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563111-L563117) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767594

Calls written directly in this body: `.join`, `.map`, `/^(\s*)(.*?)(\s*)$/su.exec`, `DIGIT_FORM_VALUE.test`, `core2.split`, `escapeRegExp6`, `value.replace`.

SHA-256 of the source span: `946ab1310175594febcb1730ce92fe747ab624b0f5ae17c538c0aac3dfc4a10b`.

### evaluation:563111

Calls written directly in this body: `.join`, `.map`, `/^(\s*)(.*?)(\s*)$/su.exec`, `DIGIT_FORM_VALUE.test`, `core2.split`, `escapeRegExp5`, `value.replace`.

SHA-256 of the source span: `431bb767fc36180ff676f22aaf2c1fce1a5e5d06e8bdce2aba6a7a94a3680d28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
