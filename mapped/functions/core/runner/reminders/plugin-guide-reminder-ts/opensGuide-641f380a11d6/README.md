# `opensGuide`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/plugin-guide-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585661-585673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585661-L585673) | `FunctionDeclaration` | não | `call, guide, catalog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585661-585673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585661-L585673) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:585661

Chamadas escritas diretamente neste corpo: `isGuidePath`, `resolveSkillToolRequest`, `stringArg4`.

SHA-256 do trecho: `11c93a7b7d449f9946847699033af9ce1f975056e113ec6592c5f16efaa69506`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
