# `BoxSecretsApplier.loadPersisted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/secrets-service.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709308-709331](../../../../../../../reference/runtime/host-main.cjs#L709308-L709331) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709308-709331](../../../../../../../reference/runtime/host-main.cjs#L709308-L709331) | 2 | 0 | 1 | 5 | 0 | 2 |

### host:709308

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Math.max`, `persistedSecretsSchema.safeParse`, `readHostOwnedFile`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `raw`, `this.persistedGeneration`.

SHA-256 do trecho: `7485f6edbace21c90e597c366d11b0aecbff90d2e95125e7ac9f59e679941253`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
