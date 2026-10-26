# `navigationHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/navigation-telemetry.ts` · [Module README](../../../../../modules/core/runner/navigation-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484601-484609](../../../../../../reference/runtime/sand-eval-runner.cjs#L484601-L484609) | `FunctionDeclaration` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484601-484609](../../../../../../reference/runtime/sand-eval-runner.cjs#L484601-L484609) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:484601

Calls written directly in this body: `.hostname.toLowerCase`, `new URL`.

SHA-256 of the source span: `bf218fb5f87e0a2023aafb9dc424692decac49eccced354cccf9e6d943907114`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
