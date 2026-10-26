# `parseManifest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476911-476934](../../../../../../../reference/runtime/host-main.cjs#L476911-L476934) | `FunctionDeclaration` | não | `bytes, onWriteBlockedError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476911-476934](../../../../../../../reference/runtime/host-main.cjs#L476911-L476934) | 4 | 0 | 0 | 3 | 2 | 1 |

### host:476911

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `JSON.parse`, `Symbol`, `hasManifestPathConflict`, `manifestSchema.safeParse`, `manifestVersionSchema.safeParse`, `new BoxStoreManifestPathConflictError`, `new BoxStoreUnsupportedManifestVersionError`, `onWriteBlockedError`.

Alvos de atribuição ou incremento: `value`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `db63f25bc20c4b18ffe137be303d22a8ad983c7110dd8ac85f58a2d1074f81e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
