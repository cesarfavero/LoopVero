# `installedServerGuide`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/plugin-guide-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585689-585693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585689-L585693) | `FunctionDeclaration` | não | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585689-585693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585689-L585693) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585689

Chamadas escritas diretamente neste corpo: `deps.resolveServerHost`, `deps.resolveServerId`, `guideForHost`, `providerOf2`.

SHA-256 do trecho: `8fb149010931b486bac416457f0b1ee4219b3da3d5811458ca349f3ee4ed6037`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
