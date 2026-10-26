# `batchEntrySenders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-messaging.ts` · [README do módulo](../../../../../modules/core/agents/agent-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479579-479585](../../../../../../reference/runtime/sand-eval-runner.cjs#L479579-L479585) | `FunctionDeclaration` | não | `lines2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479579-479585](../../../../../../reference/runtime/sand-eval-runner.cjs#L479579-L479585) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479579

Chamadas escritas diretamente neste corpo: `lines2.flatMap`.

SHA-256 do trecho: `8a78ce64bf72d40a8d71acfa18fa997df4e4c7f1abf2fb62a487c30a7c2caee9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
