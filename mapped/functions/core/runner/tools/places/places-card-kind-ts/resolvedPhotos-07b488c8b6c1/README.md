# `resolvedPhotos`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/places/places-card-kind.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768779-768788](../../../../../../../../reference/runtime/host-main.cjs#L768779-L768788) | `FunctionDeclaration` | sim | `ctx, port, places, clock` |
| [evaluation:564354-564363](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564354-L564363) | `FunctionDeclaration` | sim | `ctx, port, places, clock` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768779-768788](../../../../../../../../reference/runtime/host-main.cjs#L768779-L768788) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:564354-564363](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564354-L564363) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:768779

Chamadas escritas diretamente neste corpo: `budget.run`, `createDeadlinePolicy`, `places.flatMap`.

SHA-256 do trecho: `0fb9c45ff402fc1dd3221e38524ae55b70752dd96117a1a23d2746cd99979147`.

### evaluation:564354

Chamadas escritas diretamente neste corpo: `budget.run`, `createDeadlinePolicy`, `places.flatMap`.

SHA-256 do trecho: `0fb9c45ff402fc1dd3221e38524ae55b70752dd96117a1a23d2746cd99979147`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
