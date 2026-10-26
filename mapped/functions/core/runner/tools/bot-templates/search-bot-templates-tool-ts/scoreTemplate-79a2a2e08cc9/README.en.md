# `scoreTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770778-770787](../../../../../../../../reference/runtime/host-main.cjs#L770778-L770787) | `FunctionDeclaration` | no | `template, terms` |
| [evaluation:569873-569882](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569873-L569882) | `FunctionDeclaration` | no | `template, terms` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770778-770787](../../../../../../../../reference/runtime/host-main.cjs#L770778-L770787) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:569873-569882](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569873-L569882) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:770778

Calls written directly in this body: `.join`, `.toLowerCase`, `body.includes`, `name18.includes`, `template.name.toLowerCase`.

Assignment or increment targets: `score`.

SHA-256 of the source span: `52c147ea0b5cabc1f3ee585b85fa22af5f1875baa08172874cbed8c2f387b668`.

### evaluation:569873

Calls written directly in this body: `.join`, `.toLowerCase`, `body.includes`, `name18.includes`, `template.name.toLowerCase`.

Assignment or increment targets: `score`.

SHA-256 of the source span: `52c147ea0b5cabc1f3ee585b85fa22af5f1875baa08172874cbed8c2f387b668`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
