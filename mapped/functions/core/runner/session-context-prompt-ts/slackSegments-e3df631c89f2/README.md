# `slackSegments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/session-context-prompt.ts` · [README do módulo](../../../../../modules/core/runner/session-context-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538305-538310](../../../../../../reference/runtime/sand-eval-runner.cjs#L538305-L538310) | `FunctionDeclaration` | não | `sessionId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538305-538310](../../../../../../reference/runtime/sand-eval-runner.cjs#L538305-L538310) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538305

Chamadas escritas diretamente neste corpo: `rest.join`, `sessionId.split`.

SHA-256 do trecho: `a700555fcd9b7297f5bdabe7086b89e36fd275a55c409ff42a31f302ec055ade`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
