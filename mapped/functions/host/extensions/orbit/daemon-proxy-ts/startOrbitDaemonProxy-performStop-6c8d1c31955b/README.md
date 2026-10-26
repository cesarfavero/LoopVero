# `startOrbitDaemonProxy/performStop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705397-705409](../../../../../../../reference/runtime/host-main.cjs#L705397-L705409) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705397-705409](../../../../../../../reference/runtime/host-main.cjs#L705397-L705409) | 1 | 1 | 2 | 0 | 0 | 0 |

### host:705397

Chamadas escritas diretamente neste corpo: `closeServer`, `http2Session.destroy`, `unlinkSocketIfSame`.

Alvos de atribuição ou incremento: `stopping`.

SHA-256 do trecho: `a7cc7dbf9d8c5dcdfef78aa73fbcf8f3e9d39d3429a566fc0be61ad42eedb627`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
