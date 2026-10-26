# `readSandDataFileIfPresentSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453748-453757](../../../../../reference/runtime/host-main.cjs#L453748-L453757) | `FunctionDeclaration` | não | `path33, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453748-453757](../../../../../reference/runtime/host-main.cjs#L453748-L453757) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:453748

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `openNoFollowSync2`, `readOpenSandDataFile`, `sandDataNoFollowRoot`.

Alvos de atribuição ou incremento: `fd`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `8329c8e47771c927841521c8525666c473f19c7aabcd3014085096e1efce6237`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
