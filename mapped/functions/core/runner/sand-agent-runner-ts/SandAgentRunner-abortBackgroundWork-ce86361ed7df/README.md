# `_SandAgentRunner.abortBackgroundWork`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593855-593860](../../../../../../reference/runtime/sand-eval-runner.cjs#L593855-L593860) | `method` | sim | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593855-593860](../../../../../../reference/runtime/sand-eval-runner.cjs#L593855-L593860) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:593855

Chamadas escritas diretamente neste corpo: `this.backgroundWatches.abortBackgroundShellWork`, `this.backgroundWatches.cancelCloudAgentWatches`, `this.interruptAll`, `this.subagents.drainBackgroundSubagents`.

SHA-256 do trecho: `e6bbcd706f0859ac9310b60a8c882b543e32c5441d30be6f5e7f05e1c64e4bd2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
