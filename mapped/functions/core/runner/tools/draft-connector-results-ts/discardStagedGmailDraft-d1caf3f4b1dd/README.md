# `discardStagedGmailDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732724-732727](../../../../../../../reference/runtime/host-main.cjs#L732724-L732727) | `FunctionDeclaration` | sim | `execute, draftId` |
| [evaluation:540246-540249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540246-L540249) | `FunctionDeclaration` | sim | `execute, draftId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732724-732727](../../../../../../../reference/runtime/host-main.cjs#L732724-L732727) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:540246-540249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540246-L540249) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:732724

Chamadas escritas diretamente neste corpo: `execute`.

SHA-256 do trecho: `8328868b6459658d6c27f8e906bd55a10d8afece6388c9704ea74eddd6c2579c`.

### evaluation:540246

Chamadas escritas diretamente neste corpo: `execute`.

SHA-256 do trecho: `8328868b6459658d6c27f8e906bd55a10d8afece6388c9704ea74eddd6c2579c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
