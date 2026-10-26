# `stringifyPromptContextValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-message.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-message-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476215-476227](../../../../../../reference/runtime/host-main.cjs#L476215-L476227) | `FunctionDeclaration` | não | `value` |
| [evaluation:255525-255537](../../../../../../reference/runtime/sand-eval-runner.cjs#L255525-L255537) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476215-476227](../../../../../../reference/runtime/host-main.cjs#L476215-L476227) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:255525-255537](../../../../../../reference/runtime/sand-eval-runner.cjs#L255525-L255537) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:476215

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `061fb748fee204e577a078f812c6f8628a51dd643979c265492db64136eb7c89`.

### evaluation:255525

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `061fb748fee204e577a078f812c6f8628a51dd643979c265492db64136eb7c89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
