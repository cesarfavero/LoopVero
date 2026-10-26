# `formatSandTimeZoneWithOffset`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/time-zone-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/time-zone-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538921-538924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538921-L538924) | `FunctionDeclaration` | no | `timeZone, now` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538921-538924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538921-L538924) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538921

Calls written directly in this body: `formatUtcOffset`.

SHA-256 of the source span: `fd4e6678929bf70928aa13dbb2803098652c44fd608d989850c32b380b2310b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
