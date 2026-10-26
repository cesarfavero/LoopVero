# `UserFormService.createRunner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/user-form-service.ts` · [Module README](../../../../../../modules/host/extensions/session/user-form-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728141-728146](../../../../../../../reference/runtime/host-main.cjs#L728141-L728146) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728141-728146](../../../../../../../reference/runtime/host-main.cjs#L728141-L728146) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:728141

Calls written directly in this body: `.schedule`, `this.createRunnerOnce`.

SHA-256 of the source span: `13025453b69497ee0d9df982f36ad581eba2e0b21913e9cb2ffa26652ee29fca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
