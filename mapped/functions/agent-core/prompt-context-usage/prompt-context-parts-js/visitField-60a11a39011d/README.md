# `visitField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476337-476344](../../../../../../reference/runtime/host-main.cjs#L476337-L476344) | `FunctionDeclaration` | não | `scope, index, field, value, valueKind, toolName` |
| [evaluation:255647-255654](../../../../../../reference/runtime/sand-eval-runner.cjs#L255647-L255654) | `FunctionDeclaration` | não | `scope, index, field, value, valueKind, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476337-476344](../../../../../../reference/runtime/host-main.cjs#L476337-L476344) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:255647-255654](../../../../../../reference/runtime/sand-eval-runner.cjs#L255647-L255654) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:476337

Chamadas escritas diretamente neste corpo: `contentPath`, `stringifyPromptContextValue`, `visitValue`.

SHA-256 do trecho: `ddb62f4a5269f7fa37f89c96d5ba2fb7e51d0ea6c2908474f6e22d2a0f8b14c3`.

### evaluation:255647

Chamadas escritas diretamente neste corpo: `contentPath`, `stringifyPromptContextValue`, `visitValue`.

SHA-256 do trecho: `ddb62f4a5269f7fa37f89c96d5ba2fb7e51d0ea6c2908474f6e22d2a0f8b14c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
