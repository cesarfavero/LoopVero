# `fillablePageOfUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727288-727295](../../../../../../../reference/runtime/host-main.cjs#L727288-L727295) | `FunctionDeclaration` | no | `url2` |
| [evaluation:561794-561801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561794-L561801) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727288-727295](../../../../../../../reference/runtime/host-main.cjs#L727288-L727295) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:561794-561801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561794-L561801) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:727288

Calls written directly in this body: `URL.parse`, `isLoopbackUserFormHost`.

SHA-256 of the source span: `63871b35a53e4c105a09c82c204e49f97ddac4608f99333313a6cd61c3593603`.

### evaluation:561794

Calls written directly in this body: `URL.parse`, `isLoopbackUserFormHost`.

SHA-256 of the source span: `a766553beb36d37af286ee45b49cbd5e5185116692c68c28d4efc6507751a8f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
