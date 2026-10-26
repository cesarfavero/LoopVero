# `listLoadableSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-agent-composition.ts` · [README do módulo](../../../../../modules/core/runner/turn-agent-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588012-588015](../../../../../../reference/runtime/sand-eval-runner.cjs#L588012-L588015) | `FunctionDeclaration` | não | `listedSkills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588012-588015](../../../../../../reference/runtime/sand-eval-runner.cjs#L588012-L588015) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588012

Chamadas escritas diretamente neste corpo: `listedSkills.store`, `store.list`, `store.listLoadable`.

SHA-256 do trecho: `3a2d43e6322187de27700c4362faefe2719ef4cdc35fab435dffdbaaeaf2af68`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
