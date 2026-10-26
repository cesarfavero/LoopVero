# `BoxLogShipper.listLogFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:730912-730948](../../../../../../../reference/runtime/host-main.cjs#L730912-L730948) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730912-730948](../../../../../../../reference/runtime/host-main.cjs#L730912-L730948) | 5 | 2 | 2 | 2 | 0 | 2 |

### host:730912

Chamadas escritas diretamente neste corpo: `entry.isDirectory`, `entry.isFile`, `entry.name.endsWith`, `files.push`, `reportFallbackUnlessAbsent`, `sub.isFile`, `sub.name.endsWith`, `this.isExcludedSource`, `this.skip.has`, `this.subdirPattern.test`, `toSourceName`.

Alvos de atribuição ou incremento: `complete`, `entries`, `subEntries`.

SHA-256 do trecho: `5f5469da6f939200c835bc8c062d4d3e63930047b61c522753c9388f54027ecc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
