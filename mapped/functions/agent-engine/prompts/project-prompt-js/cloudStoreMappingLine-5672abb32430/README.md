# `cloudStoreMappingLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641241-641258](../../../../../../reference/runtime/host-main.cjs#L641241-L641258) | `FunctionDeclaration` | não | `storeDir` |
| [evaluation:431854-431871](../../../../../../reference/runtime/sand-eval-runner.cjs#L431854-L431871) | `FunctionDeclaration` | não | `storeDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641241-641258](../../../../../../reference/runtime/host-main.cjs#L641241-L641258) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:431854-431871](../../../../../../reference/runtime/sand-eval-runner.cjs#L431854-L431871) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:641241

Chamadas escritas diretamente neste corpo: `derivedLocalPrefix.includes`, `isSafeStorePathForPrompt`, `matchAgentStorePathForDisplay`, `normalized.startsWith`, `storeDir.replace`.

SHA-256 do trecho: `4dbd67bd3af4a7e784680c0194e4b80a027c83a02bd8c54865dd2a9f49e27b62`.

### evaluation:431854

Chamadas escritas diretamente neste corpo: `derivedLocalPrefix.includes`, `isSafeStorePathForPrompt`, `matchAgentStorePathForDisplay`, `normalized.startsWith`, `storeDir.replace`.

SHA-256 do trecho: `4dbd67bd3af4a7e784680c0194e4b80a027c83a02bd8c54865dd2a9f49e27b62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
