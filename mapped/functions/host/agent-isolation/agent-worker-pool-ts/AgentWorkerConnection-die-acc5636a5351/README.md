# `AgentWorkerConnection.die`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715174-715180](../../../../../../reference/runtime/host-main.cjs#L715174-L715180) | `method` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715174-715180](../../../../../../reference/runtime/host-main.cjs#L715174-L715180) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:715174

Chamadas escritas diretamente neste corpo: `entry.reject`, `this.onExit`, `this.pending.clear`.

Alvos de atribuição ou incremento: `this.isDead`.

SHA-256 do trecho: `71bc816a072043e984cfe8c78c342a07b7dfe7e5d770264a4a600e51b0019c2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
