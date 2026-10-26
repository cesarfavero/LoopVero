# `escapeForPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640961-640963](../../../../../../reference/runtime/host-main.cjs#L640961-L640963) | `FunctionDeclaration` | não | `value` |
| [evaluation:431574-431576](../../../../../../reference/runtime/sand-eval-runner.cjs#L431574-L431576) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640961-640963](../../../../../../reference/runtime/host-main.cjs#L640961-L640963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431574-431576](../../../../../../reference/runtime/sand-eval-runner.cjs#L431574-L431576) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640961

Chamadas escritas diretamente neste corpo: `.replaceAll`, `.slice`, `JSON.stringify`.

SHA-256 do trecho: `1c710326a0f1cc0add1f2d76b4471d61d8f134b9ae7b3710e2340180efed6cec`.

### evaluation:431574

Chamadas escritas diretamente neste corpo: `.replaceAll`, `.slice`, `JSON.stringify`.

SHA-256 do trecho: `1c710326a0f1cc0add1f2d76b4471d61d8f134b9ae7b3710e2340180efed6cec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
