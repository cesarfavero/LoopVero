# `nameKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770798-770800](../../../../../../../../reference/runtime/host-main.cjs#L770798-L770800) | `FunctionDeclaration` | no | `name18` |
| [evaluation:569893-569895](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569893-L569895) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770798-770800](../../../../../../../../reference/runtime/host-main.cjs#L770798-L770800) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569893-569895](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569893-L569895) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770798

Calls written directly in this body: `.toLowerCase`, `name18.trim`.

SHA-256 of the source span: `c8a16ad0d51542b3fb262acba91261009ec3f7bc54428b9d40cc43484cc515f3`.

### evaluation:569893

Calls written directly in this body: `.toLowerCase`, `name18.trim`.

SHA-256 of the source span: `c8a16ad0d51542b3fb262acba91261009ec3f7bc54428b9d40cc43484cc515f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
