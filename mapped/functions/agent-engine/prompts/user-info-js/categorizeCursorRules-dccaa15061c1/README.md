# `categorizeCursorRules`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640651-640706](../../../../../../reference/runtime/host-main.cjs#L640651-L640706) | `FunctionDeclaration` | não | `cursorRules, workspacePaths = [], agentType, options2` |
| [evaluation:431265-431320](../../../../../../reference/runtime/sand-eval-runner.cjs#L431265-L431320) | `FunctionDeclaration` | não | `cursorRules, workspacePaths = [], agentType, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640651-640706](../../../../../../reference/runtime/host-main.cjs#L640651-L640706) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431265-431320](../../../../../../reference/runtime/sand-eval-runner.cjs#L431265-L431320) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640651

Chamadas escritas diretamente neste corpo: `filterByAgentEnvironment`, `measureFrontmatterBatch`.

SHA-256 do trecho: `7e55df960de0820c502b68dd208db6407351c8e1b3a8c31caee09b91d38d30e1`.

### evaluation:431265

Chamadas escritas diretamente neste corpo: `filterByAgentEnvironment`, `measureFrontmatterBatch`.

SHA-256 do trecho: `7e55df960de0820c502b68dd208db6407351c8e1b3a8c31caee09b91d38d30e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
