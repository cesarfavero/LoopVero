# `listenServer/<callback>/finish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705501-705513](../../../../../../../reference/runtime/host-main.cjs#L705501-L705513) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705501-705513](../../../../../../../reference/runtime/host-main.cjs#L705501-L705513) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:705501

Chamadas escritas diretamente neste corpo: `reject2`, `resolve31`, `server.off`, `signal.removeEventListener`.

Alvos de atribuição ou incremento: `settled`.

SHA-256 do trecho: `c08f565b5d23f5b871c726206820953c9a24ccb9ae4c88a28d4a05a3a9667ded`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
