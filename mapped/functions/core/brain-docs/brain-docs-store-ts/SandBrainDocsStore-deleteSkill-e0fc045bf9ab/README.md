# `SandBrainDocsStore.deleteSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629958-629973](../../../../../../reference/runtime/sand-eval-runner.cjs#L629958-L629973) | `method` | sim | `{ id }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629958-629973](../../../../../../reference/runtime/sand-eval-runner.cjs#L629958-L629973) | 3 | 0 | 3 | 3 | 0 | 0 |

### evaluation:629958

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `stateWriteFailed`, `stateWriteOk`, `this.boxFamilies.has`, `this.ensureLoaded`, `this.readAutomationConfig`, `this.removeAutomation`, `this.removeTree`, `this.requireFamily`, `this.skillRecord`, `this.skillsDir`.

SHA-256 do trecho: `ac245a04c0009efa44167e8ebeb46d9b60378b13f225f631542d029cf4302913`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
