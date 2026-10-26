# `createServerTranscriptTail/cancelBodyRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713124-713127](../../../../../../../reference/runtime/host-main.cjs#L713124-L713127) | `ArrowFunctionExpression` | não | `state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713124-713127](../../../../../../../reference/runtime/host-main.cjs#L713124-L713127) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:713124

Chamadas escritas diretamente neste corpo: `state.bodyRetry.handle.dispose`.

Alvos de atribuição ou incremento: `state.bodyRetry`.

SHA-256 do trecho: `c3195b411c210f0766318a1a750f4102b2d4e25e0f627c122c4b9aa86e5f4f5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
