# `createSandNavigationProbe/runProbe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512680-512764](../../../../../../reference/runtime/sand-eval-runner.cjs#L512680-L512764) | `ArrowFunctionExpression` | sim | `ctx, remoteAccessor, displayNumber, mode, generation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512680-512764](../../../../../../reference/runtime/sand-eval-runner.cjs#L512680-L512764) | 16 | 2 | 2 | 4 | 0 | 0 |

### evaluation:512680

Chamadas escritas diretamente neste corpo: `.includes`, `Number.isInteger`, `Promise.all`, `captcha.observePages`, `captcha.scanEmbedded`, `ctx.get`, `deps.auditor.record`, `deps.buildShellArgs`, `deps.getBoxId`, `navigationAuditProbeCommand`, `navigationPagesOf`, `nextNavigationObservation`, `now`, `observationByPageId.get`, `observationByPageId.set`, `pages.flatMap`, `pages.map`, `parseBrowserIdentity`, `probeBotBlockText`, `remoteAccessor.get`, `scanCaptchas`, `shell.execute`, `stdout.split`, `verdicts.get`.

SHA-256 do trecho: `3698f99a7868e2b36c52f6e7d74746de067aa4f3bb1f67392d620234bf39a260`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
