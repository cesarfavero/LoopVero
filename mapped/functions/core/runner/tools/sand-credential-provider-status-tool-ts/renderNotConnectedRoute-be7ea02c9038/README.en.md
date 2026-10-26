# `renderNotConnectedRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-provider-status-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-provider-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751734-751738](../../../../../../../reference/runtime/host-main.cjs#L751734-L751738) | `FunctionDeclaration` | yes | `offer` |
| [evaluation:524800-524804](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524800-L524804) | `FunctionDeclaration` | yes | `offer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751734-751738](../../../../../../../reference/runtime/host-main.cjs#L751734-L751738) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:524800-524804](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524800-L524804) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:751734

Calls written directly in this body: `.catch`, `offer.isDeclined`.

SHA-256 of the source span: `e31cf745beff9e8afff16c799fe21f5689af6a32b65fd1df0b3cdd78536aacdc`.

### evaluation:524800

Calls written directly in this body: `.catch`, `offer.isDeclined`.

SHA-256 of the source span: `e31cf745beff9e8afff16c799fe21f5689af6a32b65fd1df0b3cdd78536aacdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
