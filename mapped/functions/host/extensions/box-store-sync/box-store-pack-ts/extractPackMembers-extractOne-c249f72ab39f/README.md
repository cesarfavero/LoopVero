# `extractPackMembers/extractOne`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-pack.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478571-478595](../../../../../../../reference/runtime/host-main.cjs#L478571-L478595) | `ArrowFunctionExpression` | sim | `member` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478571-478595](../../../../../../../reference/runtime/host-main.cjs#L478571-L478595) | 3 | 0 | 3 | 2 | 1 | 1 |

### host:478571

Chamadas escritas diretamente neste corpo: `.digest`, `.update`, `Buffer.alloc`, `Math.max`, `args.admitBytes`, `args.onBlob`, `handle.read`, `new SandBoxStoreSyncError`, `new Uint8Array`, `release`.

Alvos de atribuição ou incremento: `bytes`, `extracted`, `mismatched`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `b18ff49cb08728d2cdfd5a2deb1f9b43243c13c64b176ec6fd6f48dc3673379a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
