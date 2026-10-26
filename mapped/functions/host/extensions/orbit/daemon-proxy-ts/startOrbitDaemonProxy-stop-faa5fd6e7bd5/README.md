# `startOrbitDaemonProxy/stop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705410-705413](../../../../../../../reference/runtime/host-main.cjs#L705410-L705413) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705410-705413](../../../../../../../reference/runtime/host-main.cjs#L705410-L705413) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:705410

Chamadas escritas diretamente neste corpo: `performStop`.

Alvos de atribuição ou incremento: `stopPromise`.

SHA-256 do trecho: `a5cde5db29bae062e76c78d95dab06322e023dfd2dedcb3e72c15d11e98436ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
