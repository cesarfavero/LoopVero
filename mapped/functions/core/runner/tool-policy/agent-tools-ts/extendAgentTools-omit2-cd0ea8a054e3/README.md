# `extendAgentTools/omit2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756635-756638](../../../../../../../reference/runtime/host-main.cjs#L756635-L756638) | `ArrowFunctionExpression` | não | `tool, reason` |
| [evaluation:542555-542558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542555-L542558) | `ArrowFunctionExpression` | não | `tool, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756635-756638](../../../../../../../reference/runtime/host-main.cjs#L756635-L756638) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:542555-542558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542555-L542558) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:756635

Chamadas escritas diretamente neste corpo: `offered.delete`, `omitted.set`.

SHA-256 do trecho: `8d050f772c2b39abf4fc7e7214ea256952f0fa723294b3f5d7ae9d6a740ca60e`.

### evaluation:542555

Chamadas escritas diretamente neste corpo: `offered.delete`, `omitted.set`.

SHA-256 do trecho: `8d050f772c2b39abf4fc7e7214ea256952f0fa723294b3f5d7ae9d6a740ca60e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
