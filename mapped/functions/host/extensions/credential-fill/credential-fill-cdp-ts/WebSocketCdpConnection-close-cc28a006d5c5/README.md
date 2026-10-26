# `WebSocketCdpConnection.close`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543097-543104](../../../../../../../reference/runtime/host-main.cjs#L543097-L543104) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543097-543104](../../../../../../../reference/runtime/host-main.cjs#L543097-L543104) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:543097

Chamadas escritas diretamente neste corpo: `errorLogTag`, `this.failPending`, `this.reportFailure`, `this.socket.close`.

SHA-256 do trecho: `737731e1403efec287fbaddec7d0110f31ad99d6869e8db48585192f4352bc45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
