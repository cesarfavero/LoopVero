# `isRepositoryListingProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/repositories-cursor.ts` · [README do módulo](../../../../../modules/core/cloud-agents/repositories-cursor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512418-512420](../../../../../../reference/runtime/host-main.cjs#L512418-L512420) | `FunctionDeclaration` | não | `value` |
| [evaluation:567211-567213](../../../../../../reference/runtime/sand-eval-runner.cjs#L567211-L567213) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512418-512420](../../../../../../reference/runtime/host-main.cjs#L512418-L512420) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567211-567213](../../../../../../reference/runtime/sand-eval-runner.cjs#L567211-L567213) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:512418

Chamadas escritas diretamente neste corpo: `REPOSITORY_LISTING_PROVIDERS.some`.

SHA-256 do trecho: `f5f82425e87dc38fa044ad4a1d37bbad16336b2828bb38542f619231e5e5a931`.

### evaluation:567211

Chamadas escritas diretamente neste corpo: `REPOSITORY_LISTING_PROVIDERS.some`.

SHA-256 do trecho: `f5f82425e87dc38fa044ad4a1d37bbad16336b2828bb38542f619231e5e5a931`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
