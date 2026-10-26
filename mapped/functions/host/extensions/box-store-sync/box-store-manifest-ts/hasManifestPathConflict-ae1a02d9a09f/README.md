# `hasManifestPathConflict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476902-476910](../../../../../../../reference/runtime/host-main.cjs#L476902-L476910) | `FunctionDeclaration` | não | `entries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476902-476910](../../../../../../../reference/runtime/host-main.cjs#L476902-L476910) | 1 | 2 | 0 | 2 | 0 | 0 |

### host:476902

Chamadas escritas diretamente neste corpo: `Object.keys`, `new Set`, `relPath.indexOf`, `relPath.slice`, `relPaths.has`.

Alvos de atribuição ou incremento: `separatorIndex`.

SHA-256 do trecho: `9b424a2e84c2d11f6edda2882ef2ee6e676d0d36630d6c4b95c5c47a8e63731c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
