# `BoxStoreDownload.download/reportLocalCompareFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478106-478114](../../../../../../../reference/runtime/host-main.cjs#L478106-L478114) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478106-478114](../../../../../../../reference/runtime/host-main.cjs#L478106-L478114) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:478106

Chamadas escritas diretamente neste corpo: `errorLogTag`, `isMissingPathError`, `reportBoxStoreDiagnostic`.

SHA-256 do trecho: `b194c572ccfbb05d2ac18043043bf7e35d1cce69b8f892141b0ccf74f30cd785`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
