# `showsTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732559-732561](../../../../../../../reference/runtime/host-main.cjs#L732559-L732561) | `FunctionDeclaration` | no | `text3, target` |
| [evaluation:539571-539573](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539571-L539573) | `FunctionDeclaration` | no | `text3, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732559-732561](../../../../../../../reference/runtime/host-main.cjs#L732559-L732561) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539571-539573](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539571-L539573) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732559

Calls written directly in this body: `.replace`, `normalizedTarget`, `text3.trim`.

SHA-256 of the source span: `cec2e13ad1dd6386d7fa5d710ed48e7aacdc095ee8cfd9c1b34f8d6f37f8ae39`.

### evaluation:539571

Calls written directly in this body: `.replace`, `normalizedTarget`, `text3.trim`.

SHA-256 of the source span: `cec2e13ad1dd6386d7fa5d710ed48e7aacdc095ee8cfd9c1b34f8d6f37f8ae39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
