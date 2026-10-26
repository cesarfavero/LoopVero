# `roleNameAndAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767401-767412](../../../../../../../../reference/runtime/host-main.cjs#L767401-L767412) | `FunctionDeclaration` | no | `key` |
| [evaluation:562918-562929](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562918-L562929) | `FunctionDeclaration` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767401-767412](../../../../../../../../reference/runtime/host-main.cjs#L767401-L767412) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:562918-562929](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562918-L562929) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:767401

Calls written directly in this body: `SNAPSHOT_QUOTED_NAME_PATTERN.exec`, `SNAPSHOT_ROLE_PATTERN.exec`, `rest.startsWith`, `unescapeName`.

SHA-256 of the source span: `bad9bc4e77d41de24a096eff8308ba33ac31cf4542a0113964a427787988bbff`.

### evaluation:562918

Calls written directly in this body: `SNAPSHOT_QUOTED_NAME_PATTERN.exec`, `SNAPSHOT_ROLE_PATTERN.exec`, `rest.startsWith`, `unescapeName`.

SHA-256 of the source span: `bad9bc4e77d41de24a096eff8308ba33ac31cf4542a0113964a427787988bbff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
