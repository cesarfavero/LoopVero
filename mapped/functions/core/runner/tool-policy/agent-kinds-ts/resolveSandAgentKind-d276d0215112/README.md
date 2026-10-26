# `resolveSandAgentKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754413-754427](../../../../../../../reference/runtime/host-main.cjs#L754413-L754427) | `FunctionDeclaration` | não | `runner` |
| [evaluation:536881-536895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536881-L536895) | `FunctionDeclaration` | não | `runner` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754413-754427](../../../../../../../reference/runtime/host-main.cjs#L754413-L754427) | 11 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:536881-536895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536881-L536895) | 11 | 0 | 0 | 12 | 0 | 0 |

### host:754413

Chamadas escritas diretamente neste corpo: `isCarryOverSubagentType`, `isComputerUseSubagentType`, `isDreamSubagentType`, `isKnowledgeWorkSubagentType`, `isMediaReviewSubagentType`, `isMeetingRequestSubagentType`, `isSkillsSubagentType`, `isSortMemoriesSubagentType`, `isUserComputerUseSubagentType`.

SHA-256 do trecho: `c2ead7c10876ed19f936b795b0d4151c522fbe79b6e495e5e48dc5fbde2a1669`.

### evaluation:536881

Chamadas escritas diretamente neste corpo: `isCarryOverSubagentType`, `isComputerUseSubagentType`, `isDreamSubagentType`, `isKnowledgeWorkSubagentType`, `isMediaReviewSubagentType`, `isMeetingRequestSubagentType`, `isSkillsSubagentType`, `isSortMemoriesSubagentType`, `isUserComputerUseSubagentType`.

SHA-256 do trecho: `c2ead7c10876ed19f936b795b0d4151c522fbe79b6e495e5e48dc5fbde2a1669`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
