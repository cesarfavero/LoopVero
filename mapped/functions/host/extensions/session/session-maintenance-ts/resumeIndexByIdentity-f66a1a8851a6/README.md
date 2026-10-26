# `resumeIndexByIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-maintenance.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720212-720226](../../../../../../../reference/runtime/host-main.cjs#L720212-L720226) | `FunctionDeclaration` | não | `persistedEntries, rebuiltEntries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720212-720226](../../../../../../../reference/runtime/host-main.cjs#L720212-L720226) | 4 | 2 | 0 | 4 | 0 | 0 |

### host:720212

Chamadas escritas diretamente neste corpo: `isRebuiltEntry`, `new Map`, `rebuiltEntries.map`, `rebuiltIndexById.get`, `transcriptEntryMatchesRecovered`.

Alvos de atribuição ou incremento: `matchedCount`, `skipped2`.

SHA-256 do trecho: `b3ed6620c2d26b57e1e8f9b9013b182fce9ac8918b809ac6eb418f31bbb9ca54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
