# `AgentWorkerConnection.getBlobsByHexIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715281-715286](../../../../../../reference/runtime/host-main.cjs#L715281-L715286) | `method` | sim | `blobIdsHex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715281-715286](../../../../../../reference/runtime/host-main.cjs#L715281-L715286) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:715281

Chamadas escritas diretamente neste corpo: `this.send`.

SHA-256 do trecho: `ebd2f1a2b1d4db4d7766df2fb12c670f8fc4e074c9ef1b50eaab0d6ece40a0e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
