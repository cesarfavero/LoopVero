# `sharePassSubagentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/subagent-toolsets.ts` · [README do módulo](../../../../../../modules/core/runner/tools/subagent-toolsets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582531-582537](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582531-L582537) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582531-582537](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582531-L582537) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:582531

Chamadas escritas diretamente neste corpo: `carryOverSubagentTools`, `isCarryOverSubagentType`, `isSkillsSubagentType`, `isSortMemoriesSubagentType`, `skillsSubagentTools`, `sortMemoriesSubagentTools`.

SHA-256 do trecho: `9f6d436b1bfd5eb3b089ec31051a49a693a9d01196542e66ab7070720dca89e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
