# `AgentWorkerPool.startSweep`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715495-715501](../../../../../../reference/runtime/host-main.cjs#L715495-L715501) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715495-715501](../../../../../../reference/runtime/host-main.cjs#L715495-L715501) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:715495

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `setInterval`, `timer.unref`.

Alvos de atribuição ou incremento: `this.sweepTimer`.

SHA-256 do trecho: `9f58ee1cf77eb2367c32876d26a35ae064e067c048240cc2ee64414c0815f7cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
