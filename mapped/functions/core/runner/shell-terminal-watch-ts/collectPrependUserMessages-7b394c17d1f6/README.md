# `collectPrependUserMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/shell-terminal-watch.ts` · [README do módulo](../../../../../modules/core/runner/shell-terminal-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533376-533402](../../../../../../reference/runtime/sand-eval-runner.cjs#L533376-L533402) | `FunctionDeclaration` | sim | `host, recentUserMessages, currentMessageId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533376-533402](../../../../../../reference/runtime/sand-eval-runner.cjs#L533376-L533402) | 2 | 0 | 1 | 2 | 0 | 0 |

### evaluation:533376

Chamadas escritas diretamente neste corpo: `findConfirmedUserTurnWatermark`, `host.getConversationState`, `selectUnconfirmedUserMessages`, `selected.map`.

SHA-256 do trecho: `42c749e5e0ab11394d179841ad886cd1f8b0f292c3a8eecd9130c961e9e21b65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
