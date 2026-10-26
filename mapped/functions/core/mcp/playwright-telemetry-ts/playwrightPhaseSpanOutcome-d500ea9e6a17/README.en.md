# `playwrightPhaseSpanOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700302-700304](../../../../../../reference/runtime/host-main.cjs#L700302-L700304) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:514091-514093](../../../../../../reference/runtime/sand-eval-runner.cjs#L514091-L514093) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700302-700304](../../../../../../reference/runtime/host-main.cjs#L700302-L700304) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514091-514093](../../../../../../reference/runtime/sand-eval-runner.cjs#L514091-L514093) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700302

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `cf716fa9764e03a08a72f72df21b0bcbefc945c54773ce4a0d527468e6057238`.

### evaluation:514091

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `cf716fa9764e03a08a72f72df21b0bcbefc945c54773ce4a0d527468e6057238`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
