# `withPluginGuideReminderWhenOn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585884-585886](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585884-L585886) | `FunctionDeclaration` | não | `executor, turnToolHost, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585884-585886](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585884-L585886) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585884

Chamadas escritas diretamente neste corpo: `allowsSystemReminder`, `turnToolHost.gates.pluginGuideReminder`, `withPluginGuideReminder`.

SHA-256 do trecho: `c005eb77b70c5deb394ce4c585c15cd7d2df85a5a0ea2ae704dd86feaf2430fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
