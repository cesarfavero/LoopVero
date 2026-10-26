# `runCdpCommands/<callback>/<callback>/send`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549393-549402](../../../../../../../reference/runtime/host-main.cjs#L549393-L549402) | `ArrowFunctionExpression` | não | `index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549393-549402](../../../../../../../reference/runtime/host-main.cjs#L549393-L549402) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:549393

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `resolve31`, `socket.send`.

SHA-256 do trecho: `48d65f9c3c273766f29002c9d2111b7628cd6590826a25cc19c12d5852111881`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
