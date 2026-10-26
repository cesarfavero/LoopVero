# `RunLifecycle.enqueueExclusiveRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739956-739973](../../../../../../../reference/runtime/host-main.cjs#L739956-L739973) | `method` | não | `agentId, task, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739956-739973](../../../../../../../reference/runtime/host-main.cjs#L739956-L739973) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:739956

Chamadas escritas diretamente neste corpo: `.then`, `Promise.allSettled`, `Promise.resolve`, `previous.then`, `scheduler.enqueue`, `this.runChains.get`, `this.runChains.set`.

SHA-256 do trecho: `6c1a16f79c60064ff3936ba90b9fbafe9adc451ea759c35a79c68aef59d45579`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
