# `visitPromptContextParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476230-476238](../../../../../../reference/runtime/host-main.cjs#L476230-L476238) | `FunctionDeclaration` | não | `messages2, visit3` |
| [evaluation:255540-255548](../../../../../../reference/runtime/sand-eval-runner.cjs#L255540-L255548) | `FunctionDeclaration` | não | `messages, visit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476230-476238](../../../../../../reference/runtime/host-main.cjs#L476230-L476238) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:255540-255548](../../../../../../reference/runtime/sand-eval-runner.cjs#L255540-L255548) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:476230

Chamadas escritas diretamente neste corpo: `findInitialUserPromptIndex`, `visitPromptContextMessageParts`.

Alvos de atribuição ou incremento: `messageIndex`.

SHA-256 do trecho: `32acd56e70bc8598f9d7f2da849c63cf793f0fb597eee004fa9443411175e239`.

### evaluation:255540

Chamadas escritas diretamente neste corpo: `findInitialUserPromptIndex`, `visitPromptContextMessageParts`.

Alvos de atribuição ou incremento: `messageIndex`.

SHA-256 do trecho: `748ed8accc07250f852c2219ad4c6956a1c15bd92ab2b59f69f7afa82a767b97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
