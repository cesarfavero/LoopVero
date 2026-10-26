# `getToolCallActivityArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-outline.ts` · [README do módulo](../../../../../modules/core/runner/conversation-outline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:526223-526243](../../../../../../reference/runtime/sand-eval-runner.cjs#L526223-L526243) | `FunctionDeclaration` | não | `toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526223-526243](../../../../../../reference/runtime/sand-eval-runner.cjs#L526223-L526243) | 4 | 1 | 0 | 6 | 0 | 1 |

### evaluation:526223

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `shortenJsonValue`, `tool.args.toJson`.

Alvos de atribuição ou incremento: `json3`, `text3`.

SHA-256 do trecho: `00d312a8daef47d9a8fa33dfa400a35dec4d72e2e7aab36ea25681706eb45fa9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
