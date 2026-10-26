# `parseOriginListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716132-716163](../../../../../../reference/runtime/host-main.cjs#L716132-L716163) | `FunctionDeclaration` | no | `value` |
| [evaluation:527815-527846](../../../../../../reference/runtime/sand-eval-runner.cjs#L527815-L527846) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716132-716163](../../../../../../reference/runtime/host-main.cjs#L716132-L716163) | 9 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:527815-527846](../../../../../../reference/runtime/sand-eval-runner.cjs#L527815-L527846) | 9 | 1 | 0 | 4 | 0 | 0 |

### host:716132

Calls written directly in this body: `Array.isArray`, `Number.isSafeInteger`, `isOriginEventKind`, `isValidOriginRepo`, `normalizeScopeToken`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 of the source span: `fa92c0bffc97f44d37b8ac83f259157a1ac33ae18800c09cbaca6df2c14a3163`.

### evaluation:527815

Calls written directly in this body: `Array.isArray`, `Number.isSafeInteger`, `isOriginEventKind`, `isValidOriginRepo`, `normalizeScopeToken`, `parseGithubUserAllowlist`, `parsedEvents.filter`, `parsedEvents.includes`, `parsedEvents.push`, `triggerParseFailure`.

SHA-256 of the source span: `fa92c0bffc97f44d37b8ac83f259157a1ac33ae18800c09cbaca6df2c14a3163`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
