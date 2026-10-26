# `modelCatalogLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-model-selection.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-model-selection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567639-567654](../../../../../../reference/runtime/sand-eval-runner.cjs#L567639-L567654) | `FunctionDeclaration` | não | `catalog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567639-567654](../../../../../../reference/runtime/sand-eval-runner.cjs#L567639-L567654) | 2 | 3 | 0 | 1 | 0 | 0 |

### evaluation:567639

Chamadas escritas diretamente neste corpo: `.join`, `describeParamIncompatibilities`, `entry.aliases.join`, `lines2.push`, `param.values.map`.

SHA-256 do trecho: `2fdc8e9aff87af9db04016f3ea290767938a5ba01d1c0f145cb6ba2ccfb3e15f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
