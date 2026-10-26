# `SandBrainDocsStore.deleteAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629907-629915](../../../../../../reference/runtime/sand-eval-runner.cjs#L629907-L629915) | `method` | sim | `{ id }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629907-629915](../../../../../../reference/runtime/sand-eval-runner.cjs#L629907-L629915) | 2 | 0 | 2 | 2 | 0 | 0 |

### evaluation:629907

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `stateWriteFailed`, `stateWriteOk`, `this.ensureLoaded`, `this.readAutomationConfig`, `this.removeAutomation`, `this.requireFamily`.

SHA-256 do trecho: `bc9830a5a5dcad939093cf019930cb74f3e6839ca5a64d73a18b417956566248`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
