# `visitPromptContextMessageParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476239-476260](../../../../../../reference/runtime/host-main.cjs#L476239-L476260) | `FunctionDeclaration` | não | `message, messageIndex, isInitialUserPrompt, visit3` |
| [evaluation:255549-255570](../../../../../../reference/runtime/sand-eval-runner.cjs#L255549-L255570) | `FunctionDeclaration` | não | `message, messageIndex, isInitialUserPrompt, visit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476239-476260](../../../../../../reference/runtime/host-main.cjs#L476239-L476260) | 2 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:255549-255570](../../../../../../reference/runtime/sand-eval-runner.cjs#L255549-L255570) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:476239

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isSummaryCarrierMessage`, `visitContentPart`, `visitValue`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `916fb1221378d57701a1034f49c005f71cb34fa69c1ffc6ab7dd53d9301697ff`.

### evaluation:255549

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isSummaryCarrierMessage`, `visitContentPart`, `visitValue`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `916fb1221378d57701a1034f49c005f71cb34fa69c1ffc6ab7dd53d9301697ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
