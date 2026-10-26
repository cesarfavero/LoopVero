# `createMessagesGrantsAsks/attach`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/messages-grants/asks.ts` · [README do módulo](../../../../../../modules/core/runner/messages-grants/asks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703073-703085](../../../../../../../reference/runtime/host-main.cjs#L703073-L703085) | `ArrowFunctionExpression` | não | `requestId2, grants` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703073-703085](../../../../../../../reference/runtime/host-main.cjs#L703073-L703085) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:703073

Chamadas escritas diretamente neste corpo: `ask.waiters.has`, `ask.waiters.set`, `deps.hasDesktopClient`, `grants.every`, `open13`, `park`, `takeSettled`, `tombstones.has`.

SHA-256 do trecho: `09d1883463bdea557c9cd780790a7f097466f35d3a9b852b554b3c34bf875763`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
