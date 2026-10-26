# `isSandInferenceHookFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/agents/inference-hook-failure.ts` · [README do módulo](../../../../../modules/shared/agents/inference-hook-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736062-736064](../../../../../../reference/runtime/host-main.cjs#L736062-L736064) | `FunctionDeclaration` | não | `kind` |
| [evaluation:589578-589580](../../../../../../reference/runtime/sand-eval-runner.cjs#L589578-L589580) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736062-736064](../../../../../../reference/runtime/host-main.cjs#L736062-L736064) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589578-589580](../../../../../../reference/runtime/sand-eval-runner.cjs#L589578-L589580) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736062

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `8bf5a7ee782ec0c70788bf0095a6e200ab766cb7f864637f75728fd4d91f0389`.

### evaluation:589578

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `8bf5a7ee782ec0c70788bf0095a6e200ab766cb7f864637f75728fd4d91f0389`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
