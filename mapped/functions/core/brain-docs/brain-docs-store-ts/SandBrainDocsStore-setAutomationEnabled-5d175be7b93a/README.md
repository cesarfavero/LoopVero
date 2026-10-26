# `SandBrainDocsStore.setAutomationEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629891-629906](../../../../../../reference/runtime/sand-eval-runner.cjs#L629891-L629906) | `method` | sim | `{     id,     isEnabled   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629891-629906](../../../../../../reference/runtime/sand-eval-runner.cjs#L629891-L629906) | 5 | 0 | 2 | 2 | 0 | 0 |

### evaluation:629891

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `stateWriteFailed`, `stateWriteOk`, `this.ensureLoaded`, `this.readAutomationConfig`, `this.requireFamily`, `this.writeAutomationConfig`.

SHA-256 do trecho: `2b4a1b32b3b2e0315fad5bfde02b967e900c50c6aba9d87518fb53ce7599103b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
