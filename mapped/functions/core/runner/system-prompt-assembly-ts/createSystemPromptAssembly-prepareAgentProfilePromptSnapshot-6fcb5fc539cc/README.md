# `createSystemPromptAssembly/prepareAgentProfilePromptSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552759-552778](../../../../../../reference/runtime/sand-eval-runner.cjs#L552759-L552778) | `FunctionDeclaration` | não | `store` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552759-552778](../../../../../../reference/runtime/sand-eval-runner.cjs#L552759-L552778) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552759

Chamadas escritas diretamente neste corpo: `deps.agentProfileProvider`, `deps.compactionEpoch`, `deps.gates.agentDescription`, `getProfileSection`, `promptedAgentProfileIdentity`, `resolveAgentProfilePromptSnapshot`, `resolveProfileForPrompt`, `store.getAgentProfilePromptSnapshot`, `store.setAgentProfilePromptSnapshot`.

Alvos de atribuição ou incremento: `inMemoryProfilePromptSnapshot`.

SHA-256 do trecho: `f41c4c37275062926273978471a7d047a42cdbaa3bc3809f4f4f9114b25d8231`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
