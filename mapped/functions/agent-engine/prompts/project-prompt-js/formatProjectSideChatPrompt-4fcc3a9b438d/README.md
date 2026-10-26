# `formatProjectSideChatPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641355-641365](../../../../../../reference/runtime/host-main.cjs#L641355-L641365) | `FunctionDeclaration` | não | `options2` |
| [evaluation:431968-431978](../../../../../../reference/runtime/sand-eval-runner.cjs#L431968-L431978) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641355-641365](../../../../../../reference/runtime/host-main.cjs#L641355-L641365) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431968-431978](../../../../../../reference/runtime/sand-eval-runner.cjs#L431968-L431978) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:641355

Chamadas escritas diretamente neste corpo: `escapeProjectName`, `isSafeStorePathForPrompt`, `projectReference`, `promptOverrideOrDefault`, `sideChatBody`.

SHA-256 do trecho: `3a6f0ce0f690e61000c55d04ad358938da1880feb28dd397ec0343ebe1ad8405`.

### evaluation:431968

Chamadas escritas diretamente neste corpo: `escapeProjectName`, `isSafeStorePathForPrompt`, `projectReference`, `promptOverrideOrDefault`, `sideChatBody`.

SHA-256 do trecho: `3a6f0ce0f690e61000c55d04ad358938da1880feb28dd397ec0343ebe1ad8405`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
