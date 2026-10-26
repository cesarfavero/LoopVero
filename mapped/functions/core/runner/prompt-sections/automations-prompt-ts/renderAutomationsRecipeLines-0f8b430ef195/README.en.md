# `renderAutomationsRecipeLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528462-528507](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528462-L528507) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528462-528507](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528462-L528507) | 8 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528462

Calls written directly in this body: `authoringLines.map`, `automationDeliveryLine`, `slackChannelListenerLine`.

SHA-256 of the source span: `14994d6b7e65200eabd7078cb62e0ca4317d73e779ddf3c8de1727a6334de1b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
