# `streamPutRangeFromFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474736-474768](../../../../../../../reference/runtime/host-main.cjs#L474736-L474768) | `FunctionDeclaration` | sim | `url2, headers, srcPath, offsetBytes, sizeBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474736-474768](../../../../../../../reference/runtime/host-main.cjs#L474736-L474768) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:474736

Chamadas escritas diretamente neste corpo: `body.destroy`, `new Promise`, `new URL`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `8e2cec5f4239313609ac7861c31c075a1b89df8fcaa9cc7766c14ef3e6f9b375`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
