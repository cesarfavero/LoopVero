# `copyFileHashing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478366-478398](../../../../../../../reference/runtime/host-main.cjs#L478366-L478398) | `FunctionDeclaration` | sim | `srcPath, destPath, onChunk` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478366-478398](../../../../../../../reference/runtime/host-main.cjs#L478366-L478398) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:478366

Chamadas escritas diretamente neste corpo: `handle.close`, `handle.createReadStream`, `handle.stat`, `hash2.digest`, `info2.isFile`, `new SandBoxStoreSyncError`, `new import_node_stream4.Transform`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `a043a8e3e05769a3f4697c3d98e544d51c4e455bea111bdbd905ae8ed38fe303`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
