# `createReadMeetingTranscriptTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773612-773621](../../../../../../reference/runtime/host-main.cjs#L773612-L773621) | `FunctionDeclaration` | no | `deps` |
| [evaluation:572838-572847](../../../../../../reference/runtime/sand-eval-runner.cjs#L572838-L572847) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773612-773621](../../../../../../reference/runtime/host-main.cjs#L773612-L773621) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572838-572847](../../../../../../reference/runtime/sand-eval-runner.cjs#L572838-L572847) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773612

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `97d019d3938b7c59786b77c0ecc8b80ca1c4c73d0ac804f36ad60cb509907c26`.

### evaluation:572838

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `97d019d3938b7c59786b77c0ecc8b80ca1c4c73d0ac804f36ad60cb509907c26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
