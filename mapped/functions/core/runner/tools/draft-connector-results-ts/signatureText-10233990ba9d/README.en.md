# `signatureText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732855-732857](../../../../../../../reference/runtime/host-main.cjs#L732855-L732857) | `FunctionDeclaration` | no | `html` |
| [evaluation:540377-540379](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540377-L540379) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732855-732857](../../../../../../../reference/runtime/host-main.cjs#L732855-L732857) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540377-540379](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540377-L540379) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732855

Calls written directly in this body: `.filter`, `.join`, `.map`, `.replace`, `.split`, `html.replace`.

SHA-256 of the source span: `116d8eec8cbda8961fa558998a387e1c724bbf2693d4a9cbd1d682598b422567`.

### evaluation:540377

Calls written directly in this body: `.filter`, `.join`, `.map`, `.replace`, `.split`, `html.replace`.

SHA-256 of the source span: `116d8eec8cbda8961fa558998a387e1c724bbf2693d4a9cbd1d682598b422567`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
