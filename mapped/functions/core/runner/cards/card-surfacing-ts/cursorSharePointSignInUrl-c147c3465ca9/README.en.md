# `cursorSharePointSignInUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/card-surfacing.ts` · [Module README](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763813-763819](../../../../../../../reference/runtime/host-main.cjs#L763813-L763819) | `FunctionDeclaration` | no | `readPortalBaseUrl` |
| [evaluation:557147-557153](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557147-L557153) | `FunctionDeclaration` | no | `readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763813-763819](../../../../../../../reference/runtime/host-main.cjs#L763813-L763819) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557147-557153](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557147-L557153) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763813

Calls written directly in this body: `resolvePortalBaseUrl`.

SHA-256 of the source span: `e5c4edd66df728d1aabccd1c011bbb564d7c86bdee3e2c5631b8d4b3134314cf`.

### evaluation:557147

Calls written directly in this body: `resolvePortalBaseUrl`.

SHA-256 of the source span: `e5c4edd66df728d1aabccd1c011bbb564d7c86bdee3e2c5631b8d4b3134314cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
