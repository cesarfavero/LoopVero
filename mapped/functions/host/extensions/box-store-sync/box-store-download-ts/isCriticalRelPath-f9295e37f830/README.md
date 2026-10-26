# `isCriticalRelPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477534-477536](../../../../../../../reference/runtime/host-main.cjs#L477534-L477536) | `FunctionDeclaration` | não | `relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477534-477536](../../../../../../../reference/runtime/host-main.cjs#L477534-L477536) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:477534

Chamadas escritas diretamente neste corpo: `COPY_IN_CRITICAL_BASENAMES.has`, `relPath.lastIndexOf`, `relPath.slice`.

SHA-256 do trecho: `a71cab6b5c8c49545db788648f50b6fe6bdabb95171c2d31ea19eb8211314a6a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
