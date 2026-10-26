# `jitteredSandExperimentPollIntervalMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552538-552541](../../../../../../../reference/runtime/host-main.cjs#L552538-L552541) | `FunctionDeclaration` | não | `isDevBuild` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552538-552541](../../../../../../../reference/runtime/host-main.cjs#L552538-L552541) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552538

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.random`.

SHA-256 do trecho: `02f7dd3e9af6886ec75c6d455be8be6cb8fdabf7970a9241f632e12a15fe56d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
