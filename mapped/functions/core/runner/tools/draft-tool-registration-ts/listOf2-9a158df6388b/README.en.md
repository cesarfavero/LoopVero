# `listOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756259-756262](../../../../../../../reference/runtime/host-main.cjs#L756259-L756262) | `FunctionDeclaration` | no | `items` |
| [evaluation:542180-542183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542180-L542183) | `FunctionDeclaration` | no | `items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756259-756262](../../../../../../../reference/runtime/host-main.cjs#L756259-L756262) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:542180-542183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542180-L542183) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:756259

Calls written directly in this body: `.join`, `items.at`, `items.join`, `items.slice`.

SHA-256 of the source span: `8044dc0b9438b00161a89d70106997ecf173eb328a2792032d844a1902c0d98a`.

### evaluation:542180

Calls written directly in this body: `.join`, `items.at`, `items.join`, `items.slice`.

SHA-256 of the source span: `8044dc0b9438b00161a89d70106997ecf173eb328a2792032d844a1902c0d98a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
