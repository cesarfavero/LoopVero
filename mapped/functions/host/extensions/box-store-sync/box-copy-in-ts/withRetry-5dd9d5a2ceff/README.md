# `withRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483812-483825](../../../../../../../reference/runtime/host-main.cjs#L483812-L483825) | `FunctionDeclaration` | sim | `label, fn, log5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483812-483825](../../../../../../../reference/runtime/host-main.cjs#L483812-L483825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:483812

Chamadas escritas diretamente neste corpo: `COPY_IN_CREDENTIAL_RETRY.runWithRetry`.

SHA-256 do trecho: `27b37f53fb3c6b18a0d7a2e47f9fcbc9a4806c8461da64966fe4f40f9e39be96`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
