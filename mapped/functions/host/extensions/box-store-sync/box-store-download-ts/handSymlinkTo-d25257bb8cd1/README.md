# `handSymlinkTo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478309-478319](../../../../../../../reference/runtime/host-main.cjs#L478309-L478319) | `FunctionDeclaration` | sim | `path33, uid, gid` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478309-478319](../../../../../../../reference/runtime/host-main.cjs#L478309-L478319) | 1 | 0 | 4 | 0 | 0 | 0 |

### host:478309

Chamadas escritas diretamente neste corpo: `handle.close`, `handle.fd.toString`, `handle.stat`, `info2.isSymbolicLink`, `mayHandOverTo`.

SHA-256 do trecho: `9ae4eb27fda83da2c96aa031be62f9dc805db32b552dd6365925d54eac1db421`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
