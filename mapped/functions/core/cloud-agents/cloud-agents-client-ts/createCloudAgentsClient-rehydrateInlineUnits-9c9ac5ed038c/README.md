# `createCloudAgentsClient/rehydrateInlineUnits`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513393-513428](../../../../../../reference/runtime/host-main.cjs#L513393-L513428) | `FunctionDeclaration` | sim | `state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513393-513428](../../../../../../reference/runtime/host-main.cjs#L513393-L513428) | 2 | 1 | 1 | 2 | 0 | 0 |

### host:513393

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `deps.getDashboardClient`, `new Map`, `pending.set`, `pending.values`, `settled.forEach`, `state.units.map`, `targets.map`, `walkUnitApplicationKey`.

SHA-256 do trecho: `06d29a59bca68156320090897bd88477b138896cf43469e2db972c62f1f52c6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
