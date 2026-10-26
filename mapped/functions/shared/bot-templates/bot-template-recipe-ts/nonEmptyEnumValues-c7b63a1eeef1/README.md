# `nonEmptyEnumValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/bot-templates/bot-template-recipe.ts` · [README do módulo](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494662-494666](../../../../../../reference/runtime/host-main.cjs#L494662-L494666) | `FunctionDeclaration` | não | `values` |
| [evaluation:570169-570173](../../../../../../reference/runtime/sand-eval-runner.cjs#L570169-L570173) | `FunctionDeclaration` | não | `values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494662-494666](../../../../../../reference/runtime/host-main.cjs#L494662-L494666) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570169-570173](../../../../../../reference/runtime/sand-eval-runner.cjs#L570169-L570173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494662

Chamadas escritas diretamente neste corpo: `invariant`, `values.slice`.

SHA-256 do trecho: `e39ec1945c48375e6b666e14ae255face846394afd129f7fc09a2abe39ae8865`.

### evaluation:570169

Chamadas escritas diretamente neste corpo: `invariant`, `values.slice`.

SHA-256 do trecho: `e39ec1945c48375e6b666e14ae255face846394afd129f7fc09a2abe39ae8865`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
