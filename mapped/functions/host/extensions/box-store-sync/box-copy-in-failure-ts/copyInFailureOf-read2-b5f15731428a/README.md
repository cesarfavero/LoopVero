# `copyInFailureOf/read2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in-failure.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473956-473987](../../../../../../../reference/runtime/host-main.cjs#L473956-L473987) | `ArrowFunctionExpression` | não | `error65` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473956-473987](../../../../../../../reference/runtime/host-main.cjs#L473956-L473987) | 9 | 1 | 0 | 6 | 0 | 0 |

### host:473956

Chamadas escritas diretamente neste corpo: `isCopyInNativeCode`, `read2`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `efee5ad2594e93da620bd08c05f6b4370de73846306f0bc2fb1e45779499e9ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
