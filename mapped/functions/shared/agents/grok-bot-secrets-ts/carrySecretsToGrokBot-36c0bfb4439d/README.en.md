# `carrySecretsToGrokBot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/grok-bot-secrets.ts` · [Module README](../../../../../modules/shared/agents/grok-bot-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708996-709002](../../../../../../reference/runtime/host-main.cjs#L708996-L709002) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708996-709002](../../../../../../reference/runtime/host-main.cjs#L708996-L709002) | 0 | 1 | 1 | 1 | 0 | 0 |

### host:708996

Calls written directly in this body: `carryOneSecret`, `new Set`, `results.push`.

SHA-256 of the source span: `8312f381f4bb121139e041b453bb37a90080c0e80bd26adff63e4e419c376a9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
