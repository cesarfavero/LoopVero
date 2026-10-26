# `describeSuppressed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764374-764378](../../../../../../../reference/runtime/host-main.cjs#L764374-L764378) | `FunctionDeclaration` | não | `suppressed` |
| [evaluation:557742-557746](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557742-L557746) | `FunctionDeclaration` | não | `suppressed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764374-764378](../../../../../../../reference/runtime/host-main.cjs#L764374-L764378) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557742-557746](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557742-L557746) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:764374

Chamadas escritas diretamente neste corpo: `.join`, `suppressed.map`.

SHA-256 do trecho: `fb0c1cab9abc276c98c0f08dbd493e23feb2fc5a36d96feb9ce8acc1c0688b1d`.

### evaluation:557742

Chamadas escritas diretamente neste corpo: `.join`, `suppressed.map`.

SHA-256 do trecho: `fb0c1cab9abc276c98c0f08dbd493e23feb2fc5a36d96feb9ce8acc1c0688b1d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
