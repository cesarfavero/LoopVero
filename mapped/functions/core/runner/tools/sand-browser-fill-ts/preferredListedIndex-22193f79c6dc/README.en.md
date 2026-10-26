# `preferredListedIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727318-727321](../../../../../../../reference/runtime/host-main.cjs#L727318-L727321) | `FunctionDeclaration` | no | `matches, wanted` |
| [evaluation:561824-561827](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561824-L561827) | `FunctionDeclaration` | no | `matches, wanted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727318-727321](../../../../../../../reference/runtime/host-main.cjs#L727318-L727321) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561824-561827](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561824-L561827) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:727318

Calls written directly in this body: `matches.includes`.

SHA-256 of the source span: `cf475ad3598749547fbbb190fcbe014192b949fba1afca9ff97d96852ee92a1c`.

### evaluation:561824

Calls written directly in this body: `matches.includes`.

SHA-256 of the source span: `cf475ad3598749547fbbb190fcbe014192b949fba1afca9ff97d96852ee92a1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
