# `evaluateOnTarget/<callback>/<callback>/socket.onmessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547195-547212](../../../../../../../reference/runtime/host-main.cjs#L547195-L547212) | `ArrowFunctionExpression` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547195-547212](../../../../../../../reference/runtime/host-main.cjs#L547195-L547212) | 3 | 0 | 0 | 4 | 0 | 1 |

### host:547195

Chamadas escritas diretamente neste corpo: `JSON.parse`, `cdpMessageIdSchema.safeParse`, `cdpRuntimeResponseSchema.safeParse`, `finish`, `new Error`.

Alvos de atribuição ou incremento: `message`.

SHA-256 do trecho: `ce991a970f5a1e02828470b5adc465cc84893d0cad4740816f5bc7c29a82b781`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
