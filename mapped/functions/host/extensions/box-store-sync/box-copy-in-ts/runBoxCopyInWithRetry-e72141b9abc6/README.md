# `runBoxCopyInWithRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483232-483268](../../../../../../../reference/runtime/host-main.cjs#L483232-L483268) | `FunctionDeclaration` | sim | `deps, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483232-483268](../../../../../../../reference/runtime/host-main.cjs#L483232-L483268) | 1 | 1 | 3 | 1 | 0 | 0 |

### host:483232

Chamadas escritas diretamente neste corpo: `deps.log`, `isTransientCopyInFailure`, `legacySync.download.bind`, `options2.retry.schedule`, `runBoxCopyIn`, `wait2.dispose`.

Alvos de atribuição ou incremento: `attempt`, `result`.

SHA-256 do trecho: `ba5e243ed5730fe288397e9fbf714cfe7a3886f922687f4278b7d260898ad1f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
