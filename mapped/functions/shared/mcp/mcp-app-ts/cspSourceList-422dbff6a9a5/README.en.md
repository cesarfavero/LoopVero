# `cspSourceList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486812-486816](../../../../../../reference/runtime/host-main.cjs#L486812-L486816) | `FunctionDeclaration` | no | `value` |
| [evaluation:495128-495132](../../../../../../reference/runtime/sand-eval-runner.cjs#L495128-L495132) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486812-486816](../../../../../../reference/runtime/host-main.cjs#L486812-L486816) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495128-495132](../../../../../../reference/runtime/sand-eval-runner.cjs#L495128-L495132) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:486812

Calls written directly in this body: `Array.isArray`, `value.filter`.

SHA-256 of the source span: `353f8568034880aa23f509dff23f36a08868b57f23c5a33d269a3c514ec88103`.

### evaluation:495128

Calls written directly in this body: `Array.isArray`, `value.filter`.

SHA-256 of the source span: `353f8568034880aa23f509dff23f36a08868b57f23c5a33d269a3c514ec88103`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
