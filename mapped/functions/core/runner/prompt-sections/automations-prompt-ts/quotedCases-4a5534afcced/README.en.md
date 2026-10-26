# `quotedCases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733888-733888](../../../../../../../reference/runtime/host-main.cjs#L733888-L733888) | `ArrowFunctionExpression` | no | `cases` |
| [evaluation:528388-528388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528388-L528388) | `ArrowFunctionExpression` | no | `cases` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733888-733888](../../../../../../../reference/runtime/host-main.cjs#L733888-L733888) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:733888 uses an implicit arrow-function return.
| [evaluation:528388-528388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528388-L528388) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:528388 uses an implicit arrow-function return.

### host:733888

Calls written directly in this body: `.join`, `cases.map`.

SHA-256 of the source span: `fc424e32cb4ee05044c105b9d60c2b477a99562e87154cc24ff218d03c65cdbf`.

### evaluation:528388

Calls written directly in this body: `.join`, `cases.map`.

SHA-256 of the source span: `fc424e32cb4ee05044c105b9d60c2b477a99562e87154cc24ff218d03c65cdbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
