# `createSystemPromptAssembly/getAgentProfileUpdateForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552789-552805](../../../../../../reference/runtime/sand-eval-runner.cjs#L552789-L552805) | `FunctionDeclaration` | não | `snapshot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552789-552805](../../../../../../reference/runtime/sand-eval-runner.cjs#L552789-L552805) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552789

Chamadas escritas diretamente neste corpo: `agentProfileIdentitiesEqual`, `deps.agentProfileProvider`, `deps.gates.agentDescription`, `deps.gates.renamedPromptMarkers`, `promptedAgentProfileIdentity`, `provider`, `renderAgentProfileUpdate`.

SHA-256 do trecho: `0592f99a15d38ea38255026670e35f82d702b7676d89fe30e6831567eea1fd7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
