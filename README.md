# LoopVero · Inside the Harness

[English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Español](README.es.md) · [简体中文](README.zh-CN.md)

**You know that bot people call “the best in the world”? Suppose you could follow the machinery behind the answer.**

LoopVero is a source-linked study of an agent harness: tools, memory, checkpoints, subagents, and the visible mechanisms behind proactive work. Follow the reference files, inspect the function maps, and see where the evidence ends.

**1,070 original files · 19,741 named-function occurrences · 14,935 function reference pages.**

The reference files are the source of truth: the guide explains what they implement, the function pages map their functions, and every conclusion points to the code that supports it.

This is static analysis of the available artifacts, not an installable agent or a claim about the complete production system.

The reconstructed application, frontend, and their tests have been removed. The structure uses its own English names and provides no instructions for obtaining the files or reproducing an extraction.

## Beyond replies: the mechanics of proactive agents

**What happens when an agent works before your next message?** Start with LoopVero’s [proactivity deep dive](guide/components/proactivity/README.en.md): automation dispatch, quiet background work, `WakeParent` handoffs, revival, and handling stale results, all linked to reference code.

**The boundary matters:** the initial opportunity-selection algorithm and the complete remote scheduler were not found in these artifacts. This repository explains the mechanisms that are present, not a recovered end-to-end proactivity engine.

## Start here

The guides and generated catalog are available in English and Brazilian Portuguese. Each English page links to its unchanged Portuguese original.

1. [Complete guide](guide/README.en.md): reading path, responsibilities, and contracts.
2. [End-to-end architecture](guide/architecture/README.en.md): host, gateway, remote execution, evaluation runner, and persistence.
3. [Proactivity](guide/components/proactivity/README.en.md): triggers, automations, silent runner, WakeParent, and limits of the evidence.
4. [Verified findings](guide/findings/README.en.md): findings that change how the harness should be understood.
5. [Complete module and function map](mapped/README.en.md): a README page for every cataloged named function.

## Organization

| Directory | Contents | Use |
| --- | --- | --- |
| [reference](reference/README.en.md) | Original files, with their bytes preserved and directories reorganized | Primary evidence |
| [guide](guide/README.en.md) | Manually written explanations, decisions, flows, algorithms, and diagrams | Understand behavior |
| [mapped](mapped/README.en.md) | Module and function READMEs, parameters, calls, and locations | Navigate the implementation |
| [tools/research](tools/research/README.en.md) | AST indexing, generation, and static verification | Reproduce the map from the references already present |

## Three essential findings

**The host does not provide an active local BOX loop at this entry point.** `SendPipeline.sendPrompt` returns without doing any work for an empty prompt with no attachments; a substantive input encounters the BOX refusal path, including `refuseBoxTurn`, which throws `SandBoxHarnessRetiredError`. For agents marked as `temporal`, the gateway uses a proxy for remote actions and transcripts. This was verified in the code, not inferred from class names. [Gateway](guide/components/gateway/README.en.md), [turns](guide/components/turns/README.en.md).

**The evaluation runner contains concrete implementations of the loop.** Its path connects session creation, tool composition, streaming, checkpoints, subagents, and shutdown. It makes the behavior present in the artifact available for study, without proving that production uses this exact configuration. [Inference](guide/components/inference/README.en.md).

**Proactivity is a chain of responsibilities.** There is concrete code for automation, silent execution, and communication with the parent. The initial selection of spontaneous opportunities and the complete remote scheduling implementation were not found in the available references. `WakeParent` should not be confused with the algorithm that decides to investigate an opportunity. [Proactivity](guide/components/proactivity/README.en.md).

## Coverage and rigor

- 1,070 original files retain the same Git blob SHA-1. Only directories were reorganized; Finder metadata and one empty marker were removed.
- 3 core bundles analyzed through their ASTs, with 1,466 selected modules.
- 19,741 occurrences of named functions, grouped into 14,935 README pages. Methods and named closures are included; anonymous callbacks do not receive their own pages.
- The functional guides are manual analyses. Generated pages record syntactic facts and do not claim complete semantic validation or execution in production.
- The snapshot is associated with commit `655acca99bff0d17466547611108f94ed6a8a5e7`. The original build marker contains `fcbae14`; it has not been converted into an assumed product version.

See [method and limitations](guide/methodology/README.en.md) and [coverage](guide/coverage/README.en.md). Internal symbol names remain intact: they are necessary to trace the original code accurately.

## Verify the study

```bash
npm ci --prefix tools/research --ignore-scripts
node --expose-gc --max-old-space-size=4096 tools/research/index-harness.cjs
python3 tools/research/render-catalog.py
python3 tools/research/verify-reference.py
```

These commands read and analyze files. They do not start the host, open inference sessions, or execute the original bundles.
