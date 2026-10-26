# `isPublicTlsOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486805-486811](../../../../../../reference/runtime/host-main.cjs#L486805-L486811) | `FunctionDeclaration` | no | `value` |
| [evaluation:495121-495127](../../../../../../reference/runtime/sand-eval-runner.cjs#L495121-L495127) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486805-486811](../../../../../../reference/runtime/host-main.cjs#L486805-L486811) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495121-495127](../../../../../../reference/runtime/sand-eval-runner.cjs#L495121-L495127) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:486805

Calls written directly in this body: `.replace`, `.toLowerCase`, `PUBLIC_TLS_ORIGIN.test`, `SPECIAL_USE_AND_REBINDING_SUFFIXES.some`, `value.replace`.

SHA-256 of the source span: `b064d642d148c1f889c05f2a9402cb2c81394448519155be1350fe70097fa48e`.

### evaluation:495121

Calls written directly in this body: `.replace`, `.toLowerCase`, `PUBLIC_TLS_ORIGIN.test`, `SPECIAL_USE_AND_REBINDING_SUFFIXES.some`, `value.replace`.

SHA-256 of the source span: `b064d642d148c1f889c05f2a9402cb2c81394448519155be1350fe70097fa48e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
