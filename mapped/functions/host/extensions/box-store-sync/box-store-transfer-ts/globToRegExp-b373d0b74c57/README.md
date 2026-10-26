# `globToRegExp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479346-479350](../../../../../../../reference/runtime/host-main.cjs#L479346-L479350) | `FunctionDeclaration` | não | `glob` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479346-479350](../../../../../../../reference/runtime/host-main.cjs#L479346-L479350) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:479346

Chamadas escritas diretamente neste corpo: `.replace`, `escaped.replace`, `glob.replace`, `new RegExp`.

SHA-256 do trecho: `bf30f125285c62c7d2c7379bd86e3051d322856fca75bdefd6a9128a83f2c2e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
