# `createSystemPromptAssembly/linkItemsOffered`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553145-553152](../../../../../../reference/runtime/sand-eval-runner.cjs#L553145-L553152) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553145-553152](../../../../../../reference/runtime/sand-eval-runner.cjs#L553145-L553152) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553145

Chamadas escritas diretamente neste corpo: `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `resolvePinnedLinkItems`.

SHA-256 do trecho: `3abf58f2d2ae1ea4ab8d2b5cd516842e9464eadc9e6709c0a641224f8bfc2ffd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
