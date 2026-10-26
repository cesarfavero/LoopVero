# `parseTriggerMember`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716302-716335](../../../../../../reference/runtime/host-main.cjs#L716302-L716335) | `FunctionDeclaration` | no | `value` |
| [evaluation:527985-528018](../../../../../../reference/runtime/sand-eval-runner.cjs#L527985-L528018) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716302-716335](../../../../../../reference/runtime/host-main.cjs#L716302-L716335) | 13 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:527985-528018](../../../../../../reference/runtime/sand-eval-runner.cjs#L527985-L528018) | 13 | 0 | 0 | 12 | 0 | 0 |

### host:716302

Calls written directly in this body: `cronTrigger`, `isUnknownRecord2`, `normalizeScopeToken`, `parseCronTiming`, `parseEmailTrigger`, `parseGithubListener`, `parseLinearTrigger`, `parseMicrosoftTeamsTrigger`, `parseOriginListener`, `parsePagerDutyTrigger`, `parseSentryTrigger`, `parseSlackListener`, `triggerParseFailure`.

SHA-256 of the source span: `8c666b64e776344f75a266731c30631287b8fdc388c87de75e5198ba3ec9b3ec`.

### evaluation:527985

Calls written directly in this body: `cronTrigger`, `isUnknownRecord2`, `normalizeScopeToken`, `parseCronTiming`, `parseEmailTrigger`, `parseGithubListener`, `parseLinearTrigger`, `parseMicrosoftTeamsTrigger`, `parseOriginListener`, `parsePagerDutyTrigger`, `parseSentryTrigger`, `parseSlackListener`, `triggerParseFailure`.

SHA-256 of the source span: `8c666b64e776344f75a266731c30631287b8fdc388c87de75e5198ba3ec9b3ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
