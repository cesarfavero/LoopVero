# `hidesAppView`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/reminders/mcp-app-not-shown-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/mcp-app-not-shown-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585591-585602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585591-L585602) | `FunctionDeclaration` | sim | `deps, args, providerIdentifier, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585591-585602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585591-L585602) | 5 | 0 | 1 | 5 | 0 | 0 |

### evaluation:585591

Chamadas escritas diretamente neste corpo: `.then`, `deps.appsShown`, `deps.findTool`, `deps.isAppServer`, `resolveMcpAppResourceUri`.

SHA-256 do trecho: `c2e897d880a218e050fc6c6e850a30f9bf098abc31c0f14fc76845dae9ecf29c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
