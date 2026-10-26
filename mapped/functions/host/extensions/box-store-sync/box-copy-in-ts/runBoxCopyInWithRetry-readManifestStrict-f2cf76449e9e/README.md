# `runBoxCopyInWithRetry/readManifestStrict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483242-483251](../../../../../../../reference/runtime/host-main.cjs#L483242-L483251) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483242-483251](../../../../../../../reference/runtime/host-main.cjs#L483242-L483251) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:483242

Chamadas escritas diretamente neste corpo: `legacySync.readManifestStrict`.

Alvos de atribuição ou incremento: `advertisedLegacyManifest`.

SHA-256 do trecho: `6a29b3f4dc55739019ee9145e698d96827fe5e3c023c66bc587512962207024a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
