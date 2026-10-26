# `SandExperimentServiceCore.whenReady`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552897-552922](../../../../../../../reference/runtime/host-main.cjs#L552897-L552922) | `method` | sim | `timeoutMs = GATE_READY_TIMEOUT_MS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552897-552922](../../../../../../../reference/runtime/host-main.cjs#L552897-L552922) | 3 | 0 | 2 | 2 | 1 | 1 |

### host:552897

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `deadline.run`, `drain`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ca919c648bad70a49f9fc963360bf64662f01afd7ac63b212e30a9217c1aa254`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
