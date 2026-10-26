# `displayName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/listener-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/listener-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770913-770915](../../../../../../../reference/runtime/host-main.cjs#L770913-L770915) | `FunctionDeclaration` | no | `platform2` |
| [evaluation:570019-570021](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570019-L570021) | `FunctionDeclaration` | no | `platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770913-770915](../../../../../../../reference/runtime/host-main.cjs#L770913-L770915) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570019-570021](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570019-L570021) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770913

Calls written directly in this body: `listenerIntegrationManifest`.

SHA-256 of the source span: `a791bdc4602a319cc6331d6ae3c0b3986a07c1cb75672a6ddf9eaf60558acb8c`.

### evaluation:570019

Calls written directly in this body: `listenerIntegrationManifest`.

SHA-256 of the source span: `1195da6840ffa0ce47bb34ec4c45eced6c1edb07bd5ab108a8552ae73ff93aa4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
