# `createSendMessageToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-encoding.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759656-759663](../../../../../../../reference/runtime/host-main.cjs#L759656-L759663) | `FunctionDeclaration` | não | `toolCall2` |
| [evaluation:550260-550267](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550260-L550267) | `FunctionDeclaration` | não | `toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759656-759663](../../../../../../../reference/runtime/host-main.cjs#L759656-L759663) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550260-550267](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550260-L550267) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759656

Chamadas escritas diretamente neste corpo: `new ToolCall`.

SHA-256 do trecho: `d4c443151664e338c2516dd14bf09777a5c7b206c050b7b521f43d8843e5d2b4`.

### evaluation:550260

Chamadas escritas diretamente neste corpo: `new ToolCall`.

SHA-256 do trecho: `d4c443151664e338c2516dd14bf09777a5c7b206c050b7b521f43d8843e5d2b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
