# `stopAllRunningSubagents`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: subagents](../../components/subagents/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:780933-781021](../../../reference/runtime/host-main.cjs#L780933-L781021). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`stopAllRunningSubagents(controller,args)` attempts to stop active children and delegated work that the controller can reach. Returns an aggregate report; it does not promise universal cancellation of any remote service.

## Algorithm

First obtains `listRunningSubagents`. Starts child aborts in parallel and, in parallel with that group, `stopDelegatedWorkSafely`. Each abort has an independent try/catch. An ok return goes into stopped; not-running goes into alreadyFinished; an exception becomes failed with an error. The report aggregates delegated results and indicates `delegatedWorkUnavailable` when the port does not exist.

## Concurrency and failures

A child may finish between listing and aborting; this is treated as alreadyFinished without declaring a failure. An exception in one child does not prevent cancellation of the others. The initial listing sits outside these individual try/catch blocks and may fail as a whole operation. The delegated-work port has its own error handling.

## Connection to the tool

StopSubagent with `all:true` calls this helper, records interrupted delegations, and returns the report. Confirmation comes from the stop tool; the description states that the interrupted child will not produce a separate revival with a final result.

## Limits

An accepted abort does not prove instantaneous termination of a remote process. The controller's concrete contract defines how far the attempt propagates. The report preserves that distinction instead of simply returning “everything canceled.”
