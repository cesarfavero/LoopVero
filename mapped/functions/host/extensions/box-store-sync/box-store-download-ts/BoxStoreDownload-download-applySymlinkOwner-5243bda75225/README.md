# `BoxStoreDownload.download/applySymlinkOwner`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477837-477844](../../../../../../../reference/runtime/host-main.cjs#L477837-L477844) | `ArrowFunctionExpression` | sim | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477837-477844](../../../../../../../reference/runtime/host-main.cjs#L477837-L477844) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:477837

Chamadas escritas diretamente neste corpo: `handSymlinkTo`, `options2.lchown`.

SHA-256 do trecho: `3271b523d2cc25062370313fa776433e12ac01649abdfe8fb8289f8df9473b05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
