# `sortMemoriesSubagentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/subagent-toolsets.ts` · [README do módulo](../../../../../../modules/core/runner/tools/subagent-toolsets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582491-582520](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582491-L582520) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582491-582520](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582491-L582520) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582491

Chamadas escritas diretamente neste corpo: `.filter`, `createSandSplitStateTools`, `createSortMemoriesTool`, `recallMemoryTools`, `scopes.userBot.listMemories`, `tools.push`.

SHA-256 do trecho: `36acd5355a6ff5605b6d7e6d2e35b68140959ba9eac1b142ca93bef53c788e41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
